from PIL import Image

def process():
    img_path = r"c:\projects\iqbal-portfolio\public\images\My_favicon.jpeg"
    img = Image.open(img_path).convert("RGBA")
    w, h = img.size
    pixels = img.load()

    # Create target RGBA canvas
    ih_img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    ih_pixels = ih_img.load()

    # The IH monogram strictly lives within x: 235..770, y: 205..795
    for y in range(205, 795):
        for x in range(235, 770):
            r, g, b, a = pixels[x, y]
            if b > 60:
                navy_b = 35
                if b > navy_b + 25:
                    alpha = min(255, int((b - navy_b) * 2.5))
                    if alpha > 30:
                        ih_pixels[x, y] = (r, g, b, alpha)

    bbox = ih_img.getbbox()
    if bbox:
        crop = ih_img.crop(bbox)
        cw, ch = crop.size
        dim = max(cw, ch) + 40  # 1:1 square canvas with padding

        square_img = Image.new("RGBA", (dim, dim), (0, 0, 0, 0))
        off_x = (dim - cw) // 2
        off_y = (dim - ch) // 2
        square_img.paste(crop, (off_x, off_y), crop)

        # Resize to standard high-res 512x512
        final_img = square_img.resize((512, 512), Image.Resampling.LANCZOS)
        final_img.save(r"c:\projects\iqbal-portfolio\public\images\my_favicon.png", "PNG")
        print("Saved 512x512 transparent square my_favicon.png successfully!")

process()
