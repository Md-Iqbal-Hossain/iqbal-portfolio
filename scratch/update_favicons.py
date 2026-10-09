from PIL import Image

def convert():
    png_path = r"c:\projects\iqbal-portfolio\public\images\my_favicon.png"
    img = Image.open(png_path)

    # Save to src/app/icon.png
    img.save(r"c:\projects\iqbal-portfolio\src\app\icon.png", "PNG")

    # Save to src/app/favicon.ico (multi-resolution ico 16x16, 32x32, 48x48, 64x64)
    img.save(r"c:\projects\iqbal-portfolio\src\app\favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
    print("Updated favicon files in src/app/ successfully!")

convert()
