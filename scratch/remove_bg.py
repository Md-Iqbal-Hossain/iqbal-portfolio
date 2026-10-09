import sys
from PIL import Image

def remove_white_gray_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()

    # Flood fill mask: True for background to make transparent
    visited = set()
    to_visit = []

    # Add all border pixels to starting queue
    for x in range(width):
        to_visit.append((x, 0))
        to_visit.append((x, height - 1))
    for y in range(height):
        to_visit.append((0, y))
        to_visit.append((width - 1, y))

    def is_bg_pixel(r, g, b):
        # Checkerboard background consists of light gray and white pixels (high R, G, B values)
        # Check if R, G, B are all relatively high (e.g. > 160) and near grayscale (low saturation)
        if r > 160 and g > 160 and b > 160:
            if max(r, g, b) - min(r, g, b) < 40:
                return True
        return False

    while to_visit:
        x, y = to_visit.pop()
        if (x, y) in visited:
            continue
        visited.add((x, y))

        r, g, b, a = pixels[x, y]
        if is_bg_pixel(r, g, b):
            pixels[x, y] = (0, 0, 0, 0)
            # Add 4 neighbors
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:
                    to_visit.append((nx, ny))

    # Crop to non-transparent bounding box with small padding
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)

    img.save(output_path, "PNG")
    print("Saved transparent image to:", output_path)
    print("Cropped bounding box size:", img.size)

if __name__ == "__main__":
    input_file = r"c:\projects\iqbal-portfolio\public\images\My_favicon.jpeg"
    output_file = r"c:\projects\iqbal-portfolio\public\images\my_favicon.png"
    remove_white_gray_bg(input_file, output_file)
