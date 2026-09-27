import cv2
import os
import glob
import numpy as np

def remove_logo_fast(image_path):
    img = cv2.imread(image_path)
    if img is None:
        return

    h, w, _ = img.shape
    
    # Very tight logo area: top 8% and right 15% (strictly confined to corner)
    y1 = 0
    y2 = int(h * 0.10)
    x1 = int(w * 0.82)
    x2 = w
    
    mask = np.zeros((h, w), dtype=np.uint8)
    mask[y1:y2, x1:x2] = 255
    
    # Inpaint only the tiny logo region
    result = cv2.inpaint(img, mask, 3, cv2.INPAINT_TELEA)
    
    cv2.imwrite(image_path, result)
    print(f"Removed tiny logo from {image_path}")

folders = [
    r"public\images\Chest vest",
    r"public\images\hats"
]

for folder in folders:
    for ext in ["*.jpg", "*.png", "*.jpeg"]:
        for img_path in glob.glob(os.path.join(folder, ext)):
            remove_logo_fast(img_path)

print("Fast logo removal finished.")
