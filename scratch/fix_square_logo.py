from PIL import Image

def process():
    img_path = r"c:\projects\iqbal-portfolio\public\images\My_favicon.jpeg"
    img = Image.open(img_path).convert("RGBA")
    w, h = img.size
    pixels = img.load()

    # Create a fresh RGBA canvas 720x720 (transparent background)
    canvas = Image.new("RGBA", (720, 720), (0, 0, 0, 0))
    c_pixels = canvas.load()

    # Fill the 720x720 canvas with the dark navy logo background color #040822
    navy_color = (4, 8, 34, 255)
    for y in range(720):
        for x in range(720):
            c_pixels[x, y] = navy_color

    # Now copy the IH monogram logo from img into canvas
    # In original img, IH logo is centered around x=512, y=501
    # Bounding box of IH monogram in img:
    min_x, min_y, max_x, max_y = w, h, 0, 0
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            # Check if it's an IH monogram logo pixel (purple/blue shades)
            if (b > 80 and (r > 40 or b - g > 25)) and not (r > 150 and g > 150 and b > 150):
                if x < min_x: min_x = x
                if y < min_y: min_y = y
                if x > max_x: max_x = x
                if y > max_y: max_y = y

    print(f"IH Monogram bounding box: ({min_x}, {min_y}) to ({max_x}, {max_y}), size: {max_x - min_x}x{max_y - min_y}")

    # Crop the exact IH monogram from original image (with dark navy surrounding pixels)
    # Add padding around the IH monogram inside the navy box
    pad = 90
    crop_x1 = max(0, min_x - pad)
    crop_y1 = max(0, min_y - pad)
    crop_x2 = min(w, max_x + pad)
    crop_y2 = min(h, max_y + pad)

    crop_w = crop_x2 - crop_x1
    crop_h = crop_y2 - crop_y1

    # Place cropped IH logo in center of 720x720 navy box
    off_x = (720 - crop_w) // 2
    off_y = (720 - crop_h) // 2

    for cy in range(crop_h):
        for cx in range(crop_w):
            orig_x = crop_x1 + cx
            orig_y = crop_y1 + cy
            r, g, b, a = pixels[orig_x, orig_y]
            # Only copy if it's not the outer white/gray checkerboard
            if not (r > 150 and g > 150 and b > 150):
                c_pixels[off_x + cx, off_y + cy] = (r, g, b, 255)

    # Make corners slightly rounded or keep clean square
    # Save clean transparent PNG
    canvas.save(r"c:\projects\iqbal-portfolio\public\images\my_favicon.png", "PNG")
    print("Saved perfectly square transparent my_favicon.png")

process()
