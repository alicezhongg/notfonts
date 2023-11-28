from PIL import Image
import os

def convert_to_webp(input_folder, output_folder):
    # Create output folder if it doesn't exist
    os.makedirs(output_folder, exist_ok=True)

    # Loop through each file in the input folder
    for filename in os.listdir(input_folder):
        if filename.endswith(".png"):
            # Construct the full path for input and output files
            input_path = os.path.join(input_folder, filename)
            output_path = os.path.join(output_folder, os.path.splitext(filename)[0] + ".webp")
            print("Converting %s to %s" % (input_path, output_path))
            # Open the PNG file and save as WebP
            img = Image.open(input_path)
            img.save(output_path, "webp")

if __name__ == "__main__":
    # Use the current working directory as input and output folders
    current_directory = os.getcwd()
    convert_to_webp(current_directory, current_directory)
