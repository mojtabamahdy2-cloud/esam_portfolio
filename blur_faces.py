import cv2
import os
import glob
import urllib.request

# Download the Haar cascade if it doesn't exist
cascade_path = "haarcascade_frontalface_default.xml"
if not os.path.exists(cascade_path):
    url = "https://raw.githubusercontent.com/opencv/opencv/master/data/haarcascades/haarcascade_frontalface_default.xml"
    urllib.request.urlretrieve(url, cascade_path)

face_cascade = cv2.CascadeClassifier(cascade_path)

def blur_faces_in_image(image_path):
    img = cv2.imread(image_path)
    if img is None:
        print(f"Could not read {image_path}")
        return

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Detect faces
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.05, minNeighbors=3, minSize=(30, 30))
    
    if len(faces) > 0:
        for (x, y, w, h) in faces:
            # Expand bounding box slightly
            expand_x = int(w * 0.1)
            expand_y = int(h * 0.15)
            
            x1 = max(0, x - expand_x)
            y1 = max(0, y - expand_y)
            x2 = min(img.shape[1], x + w + expand_x)
            y2 = min(img.shape[0], y + h + expand_y)
            
            # Extract face ROI
            face_roi = img[y1:y2, x1:x2]
            if face_roi.size > 0:
                # Blur the face heavily
                blurred_face = cv2.GaussianBlur(face_roi, (99, 99), 30)
                # Put the blurred face back into the image
                img[y1:y2, x1:x2] = blurred_face
                
        # Save the image
        cv2.imwrite(image_path, img)
        print(f"Blurred {len(faces)} faces in {image_path}")
    else:
        print(f"No faces found in {image_path}")

# Run on all images
abayat_dir = "public/Abayat"
image_files = glob.glob(f"{abayat_dir}/**/*.jpg", recursive=True) + glob.glob(f"{abayat_dir}/**/*.png", recursive=True)

for img_path in image_files:
    blur_faces_in_image(img_path)

print("Done.")
