import fitz  # PyMuPDF
from PIL import Image
import io
import os
import sys

def pdf_to_long_image(pdf_path, output_path):
    print(f"Opening {pdf_path}...")
    try:
        doc = fitz.open(pdf_path)
    except Exception as e:
        print(f"Error opening PDF: {e}")
        sys.exit(1)

    images = []
    
    # Render all pages to images (using 2.0 zoom for better resolution)
    zoom = 2.0
    mat = fitz.Matrix(zoom, zoom)
    
    for page_num in range(len(doc)):
        print(f"Processing page {page_num + 1}/{len(doc)}...")
        page = doc[page_num]
        pix = page.get_pixmap(matrix=mat)
        
        # Convert pixmap to PIL Image
        img_data = pix.tobytes("png")
        img = Image.open(io.BytesIO(img_data))
        images.append(img)
        
    doc.close()
    
    if not images:
        print("No pages found in PDF.")
        sys.exit(1)
        
    # Calculate the total height and max width
    total_height = sum(img.height for img in images)
    max_width = max(img.width for img in images)
    
    # Create a new blank image with the calculated dimensions
    # Using white background
    long_image = Image.new('RGB', (max_width, total_height), (255, 255, 255))
    
    # Paste each page sequentially
    current_y = 0
    for i, img in enumerate(images):
        long_image.paste(img, (0, current_y))
        current_y += img.height
        
    # Save the final long image
    print(f"Saving combined image to {output_path}...")
    long_image.save(output_path, quality=95)
    print("Done!")

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) > 2:
        input_pdf = sys.argv[1]
        output_img = sys.argv[2]
    else:
        input_pdf = r"D:\agent manager\Lemonade Ideas Website\Icons\SMM.pdf"
        output_img = r"D:\agent manager\Lemonade Ideas Website\Icons\SMM_Long_Image.png"
    
    if not os.path.exists(input_pdf):
        print(f"File not found: {input_pdf}")
        sys.exit(1)
        
    pdf_to_long_image(input_pdf, output_img)
