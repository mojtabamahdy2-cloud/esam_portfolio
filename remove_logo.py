import cv2
import os
import glob
import numpy as np

def remove_logo_from_image(image_path):
    img = cv2.imread(image_path)
    if img is None:
        print(f"Could not read {image_path}")
        return

    h, w, _ = img.shape
    
    # Define the region of the logo (upper right corner)
    # Adjust these percentages if the logo is larger/smaller
    y1 = 0
    y2 = int(h * 0.25)
    x1 = int(w * 0.70)
    x2 = w
    
    # Create a mask for inpainting
    mask = np.zeros((h, w), dtype=np.uint8)
    mask[y1:y2, x1:x2] = 255
    
    # Use Telea inpainting algorithm
    result = cv2.inpaint(img, mask, 3, cv2.INPAINT_TELEA)
    
    # Save the result
    cv2.imwrite(image_path, result)
    print(f"Removed logo from {image_path}")

# Folders to process
folders = [
    r"public\images\Chest vest",
    r"public\images\hats"
]

for folder in folders:
    image_files = glob.glob(os.path.join(folder, "*.jpg")) + glob.glob(os.path.join(folder, "*.png"))
    for img_path in image_files:
        remove_logo_from_image(img_path)

print("Done.")
