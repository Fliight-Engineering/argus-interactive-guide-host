#!/usr/bin/env python3
from PIL import Image
import sys
import numpy as np

def remove_white_background_and_rotate(image_path, output_path, rotation=0):
    """
    Remove white background and rotate image.
    rotation: 0, 90, 180, or 270 degrees clockwise
    """
    # Open the image
    img = Image.open(image_path)
    
    # Convert to RGBA if not already
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
    
    # Rotate the image if needed
    if rotation != 0:
        img = img.rotate(-rotation, expand=True)  # Negative because PIL rotates counter-clockwise
    
    # Convert to numpy array for easier processing
    img_array = np.array(img)
    
    # Create a mask for white/light pixels
    # Check if RGB values are all above a threshold (e.g., 250 for pure white)
    # Also check for near-white pixels (slight variations)
    white_threshold = 250
    r, g, b, a = img_array[:,:,0], img_array[:,:,1], img_array[:,:,2], img_array[:,:,3]
    
    # Create mask: pixels that are white or very close to white
    white_mask = (r > white_threshold) & (g > white_threshold) & (b > white_threshold)
    
    # Make white pixels transparent
    img_array[white_mask, 3] = 0  # Set alpha to 0 for white pixels
    
    # Convert back to PIL Image
    img = Image.fromarray(img_array)
    
    # Save the image
    img.save(output_path, 'PNG', optimize=True)
    print(f"Image processed and saved to {output_path}")
    print(f"  - Rotated: {rotation} degrees clockwise")
    print(f"  - White background removed (transparent)")

if __name__ == "__main__":
    input_path = "/home/fliight/github/Project/argus-interactive-guide/new_assets/Argus VTS User Guide V3.3- Barmico 2.docx/images/image3.png"
    output_path = "/home/fliight/github/Project/argus-interactive-guide/mobile/6edH8g7lC3v.png"
    
    # Try different rotations - adjust as needed:
    # 0 = no rotation
    # 90 = rotate 90° clockwise
    # 180 = rotate 180°
    # 270 = rotate 270° clockwise (or 90° counter-clockwise)
    rotation = 0  # Try no rotation first - antenna should face up
    
    remove_white_background_and_rotate(input_path, output_path, rotation)

