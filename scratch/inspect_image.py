import os
from PIL import Image

img_path = r"c:\projects\iqbal-portfolio\public\images\My_favicon.jpeg"
img = Image.open(img_path)
print("Image size:", img.size)
print("Image mode:", img.mode)
