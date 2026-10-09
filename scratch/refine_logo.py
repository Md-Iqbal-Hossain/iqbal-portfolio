from PIL import Image

def process():
    img_path = r"c:\projects\iqbal-portfolio\public\images\My_favicon.jpeg"
    img = Image.open(img_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()

    # 1. Clean dark square logo badge (remove outer checkerboard & notches)
    # Find bounding box of the dark square: dark pixels where R<30, G<30, B<60
    min_x, min_y, max_x, max_y = width, height, 0, 0
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            # Dark navy background pixel or logo pixel
            if (r < 40 and g < 40 and b < 80) or (b > r + 20 and b > g + 20) or (r > 60 and b > 100):
                # Check if it's NOT outer checkerboard
                if not (r > 150 and g > 150 and b > 150):
                    if x < min_x: min_x = x
                    if y < min_y: min_y = y
                    if x > max_x: max_x = x
                    if y > max_y: max_y = y

    print(f"Logo dark box detected: ({min_x}, {min_y}) to ({max_x}, {max_y})")

    # Bounding box of main square (excluding notch artifacts below max_y)
    # The dark square is approximately centered and square
    sq_w = max_x - min_x
    sq_h = sq_w # make square
    sq_crop = img.crop((min_x, min_y, min_x + sq_w, min_y + sq_h))

    # Mask outer background of sq_crop if any corner has white
    sq_pixels = sq_crop.load()
    sw, sh = sq_crop.size
    for y in range(sh):
        for x in range(sw):
            r, g, b, a = sq_pixels[x, y]
            if r > 160 and g > 160 and b > 160 and abs(r - g) < 30:
                sq_pixels[x, y] = (0, 0, 0, 0)

    sq_crop.save(r"c:\projects\iqbal-portfolio\public\images\my_favicon.png", "PNG")
    print("Saved clean square badge to public/images/my_favicon.png")

    # 2. Transparent IH monogram only (removing dark navy background too)
    mono_img = Image.open(img_path).convert("RGBA")
    mono_pixels = mono_img.load()
    mw, mh = mono_img.size

    for y in range(mh):
        for x in range(mw):
            r, g, b, a = mono_pixels[x, y]
            # Keep purple/blue IH logo pixels
            # IH logo pixels have significant purple/blue saturation: b > 80 and (r > 50 or b > r + 30)
            is_ih_pixel = (b > 90 and (r > 40 or b - g > 30)) and not (r > 160 and g > 160 and b > 160)
            if not is_ih_pixel:
                mono_pixels[x, y] = (0, 0, 0, 0)

    bbox_mono = mono_img.getbbox()
    if bbox_mono:
        mono_img = mono_img.crop(bbox_mono)

    mono_img.save(r"c:\projects\iqbal-portfolio\public\images\my_favicon_icon.png", "PNG")
    print("Saved IH monogram to public/images/my_favicon_icon.png")

process()
