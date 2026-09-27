import cv2
import os
import glob
import numpy as np

cascade_path = "haarcascade_frontalface_default.xml"
face_cascade = cv2.CascadeClassifier(cascade_path)

def remove_logo_fast_smart(image_path):
    img = cv2.imread(image_path)
    if img is None:
        return

    h, w, _ = img.shape
    
    # Logo area: top 18% and right 25% (strictly confined)
    y1 = 0
    y2 = int(h * 0.18)
    x1 = int(w * 0.75)
    x2 = w
    
    mask = np.zeros((h, w), dtype=np.uint8)
    mask[y1:y2, x1:x2] = 255
    
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.05, minNeighbors=3, minSize=(30, 30))
    
    # Protect body/clothes/hat based on face position
    for (fx, fy, fw, fh) in faces:
        # Protect a wide column from just above the head to the bottom of the image
        body_x1 = max(0, fx - int(fw * 1.5))
        body_y1 = max(0, fy - int(fh * 1.5))  # extra space for hats
        body_x2 = min(w, fx + int(fw * 2.5))
        body_y2 = h  # all the way down
        
        # Exclude this entire body region from the mask
        mask[body_y1:body_y2, body_x1:body_x2] = 0
        
    # Inpaint only the logo, avoiding the person
    result = cv2.inpaint(img, mask, 3, cv2.INPAINT_TELEA)
    
    cv2.imwrite(image_path, result)
    print(f"Fast smart removed logo from {image_path}")

folders = [
    r"public\images\Chest vest",
    r"public\images\hats"
]

for folder in folders:
    for ext in ["*.jpg", "*.png", "*.jpeg"]:
        for img_path in glob.glob(os.path.join(folder, ext)):
            remove_logo_fast_smart(img_path)

print("Fast smart logo removal finished.")
