import fitz
import sys

try:
    doc = fitz.open("C:\\Users\\derya\\OneDrive\\Masaüstü\\soup\\SOUP_UFR3S_OCSC.pdf")
    image_count = 0
    for page_index in range(len(doc)):
        page = doc[page_index]
        image_list = page.get_images()
        for image_index, img in enumerate(image_list, start=1):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            filename = f"C:\\Users\\derya\\OneDrive\\Masaüstü\\soup\\site\\public\\images\\pdf_extracted_p{page_index}_img{image_index}.{image_ext}"
            with open(filename, "wb") as f:
                f.write(image_bytes)
            print(f"Extracted: pdf_extracted_p{page_index}_img{image_index}.{image_ext}")
            image_count += 1
    print(f"Extracted {image_count} total images.")
except Exception as e:
    print(f"Error: {e}")
