import fitz
import os

pdf_path = r"D:\agent manager\Lemonade Ideas Website\Lemonade Ideas (delnazdadachanj)\Branding\lemonade website.pdf"
output_dir = r"D:\agent manager\Lemonade Ideas Website\Lemonade Ideas (delnazdadachanj)\Branding\lemonade website pages"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

doc = fitz.open(pdf_path)

for page_num in range(len(doc)):
    page = doc.load_page(page_num)
    # 300 DPI high resolution extraction
    pix = page.get_pixmap(matrix=fitz.Matrix(300/72, 300/72))
    
    # Format output filename (e.g. Page_1.jpg)
    output_path = os.path.join(output_dir, f"Page_{page_num + 1}.jpg")
    pix.save(output_path)
    print(f"Saved: {output_path}")

print("Done extracting all PDF pages.")
