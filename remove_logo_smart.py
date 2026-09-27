import cv2
import os
import glob
import numpy as np
from rembg import remove

def remove_logo_smart(image_path):
    img = cv2.imread(image_path)
    if img is None:
        return

    h, w, _ = img.shape
    
    # Logo area: top 15% and right 30%
    y1 = 0
    y2 = int(h * 0.15)
    x1 = int(w * 0.70)
    x2 = w
    
    # Create mask for logo
    mask = np.zeros((h, w), dtype=np.uint8)
    mask[y1:y2, x1:x2] = 255
    
    # Use rembg to get a precise mask of the person and clothes
    person_mask = remove(img, only_mask=True)
    
    # Dilate the person mask to be extra safe around the edges (shoulders, hats)
    kernel = np.ones((9, 9), np.uint8)
    person_mask_dilated = cv2.dilate(person_mask, kernel, iterations=2)
    
    # Exclude the person from the inpaint mask
    mask[person_mask_dilated > 30] = 0
    
    # Inpaint only the logo, strictly avoiding the person
    result = cv2.inpaint(img, mask, 3, cv2.INPAINT_TELEA)
    
    cv2.imwrite(image_path, result)
    print(f"Smart removed logo from {image_path}")

folders = [
    r"public\images\Chest vest",
    r"public\images\hats"
]

for folder in folders:
    for ext in ["*.jpg", "*.png", "*.jpeg"]:
        for img_path in glob.glob(os.path.join(folder, ext)):
            remove_logo_smart(img_path)

print("Smart logo removal finished.")
