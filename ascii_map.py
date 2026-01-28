
import sys
from PIL import Image

# Ascii characters used to create the output 
ASCII_CHARS = ["@", "#", "S", "%", "?", "*", "+", ";", ":", ",", "."]

def resize_image(image, new_width=100):
    width, height = image.size
    ratio = height / width
    new_height = int(new_width * ratio * 0.55) # 0.55 for aspect ratio correction of fonts
    resized_image = image.resize((new_width, new_height))
    return resized_image

def grayify(image):
    return image.convert("L")

def pixels_to_ascii(image):
    pixels = image.getdata()
    characters = "".join([ASCII_CHARS[pixel // 25] for pixel in pixels])
    return characters

def main(new_width=100):
    path = "src/assets/images/kaap-plattegrond.png"
    try:
        image = Image.open(path)
    except:
        print(path, " is not a valid pathname to an image.")
        return

    new_image_data = pixels_to_ascii(grayify(resize_image(image)))
    
    pixel_count = len(new_image_data)
    ascii_image = "\n".join([new_image_data[index:(index+new_width)] for index in range(0, pixel_count, new_width)])
    
    print(ascii_image)

if __name__ == "__main__":
    main()
