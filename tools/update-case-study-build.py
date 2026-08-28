from io import BytesIO
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor

ROOT = Path(__file__).resolve().parents[1]
TARGET = ROOT / "output" / "pdf" / "parivahan-sarathi-design-case-study.pdf"
SOURCE = ROOT / "tmp" / "pdfs" / "case-study-build48.pdf"
SOURCE.parent.mkdir(parents=True, exist_ok=True)
SOURCE.write_bytes(TARGET.read_bytes())


def overlay(page_number: int):
    stream = BytesIO()
    c = canvas.Canvas(stream, pagesize=(960, 540))
    if page_number == 1:
        c.setFillColor(HexColor("#070922"))
        c.rect(221, 156, 14, 13, stroke=0, fill=1)
        c.setFillColor(HexColor("#FFFFFF"))
        c.setFont("Helvetica", 9)
        c.drawString(222.8, 158.1, "50")
    elif page_number == 7:
        c.setFillColor(HexColor("#FFFFFF"))
        c.rect(81, 17, 11, 11, stroke=0, fill=1)
        c.setFillColor(HexColor("#697084"))
        c.setFont("Helvetica", 7)
        c.drawString(82.1, 18.6, "50")
    elif page_number == 8:
        c.setFillColor(HexColor("#FFFFFF"))
        c.rect(382, 334, 122, 19, stroke=0, fill=1)
        c.setFillColor(HexColor("#171A33"))
        c.setFont("Helvetica-Bold", 11)
        c.drawString(386, 338, "2 interface languages")
    elif page_number == 11:
        c.setFillColor(HexColor("#FFFFFF"))
        c.rect(751, 290, 40, 34, stroke=0, fill=1)
        c.setFillColor(HexColor("#FF6B00"))
        c.setFont("Helvetica-Bold", 24)
        c.drawString(756, 295, "50")
        c.setFillColor(HexColor("#070922"))
        c.rect(233, 107, 24, 24, stroke=0, fill=1)
        c.setFillColor(HexColor("#FFFFFF"))
        c.setFont("Helvetica-Bold", 18)
        c.drawCentredString(245, 111, "2")
        c.setFillColor(HexColor("#070922"))
        c.rect(555, 107, 42, 24, stroke=0, fill=1)
        c.setFillColor(HexColor("#FF6B00"))
        c.setFont("Helvetica-Bold", 18)
        c.drawCentredString(576, 111, "125")
        c.setFillColor(HexColor("#FFFFFF"))
        c.rect(751, 207, 169, 40, stroke=0, fill=1)
        c.setFillColor(HexColor("#697084"))
        c.setFont("Helvetica", 8.5)
        c.drawString(756, 235, "Judge Mode, local privacy controls,")
        c.drawString(756, 223, "source recency and evaluation pack.")
    c.save()
    stream.seek(0)
    return PdfReader(stream).pages[0]


reader = PdfReader(SOURCE)
writer = PdfWriter()
for index, page in enumerate(reader.pages, start=1):
    if index in {1, 7, 8, 11}:
        page.merge_page(overlay(index))
    writer.add_page(page)

with TARGET.open("wb") as handle:
    writer.write(handle)

check = PdfReader(TARGET)
assert len(check.pages) == 12
