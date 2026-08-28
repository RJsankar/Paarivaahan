from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "brand"
OUT.mkdir(parents=True, exist_ok=True)


def font(size: int, bold: bool = False):
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
    ]
    for candidate in candidates:
        try:
            return ImageFont.truetype(candidate, size)
        except OSError:
            continue
    return ImageFont.load_default()


def draw_mark(canvas: Image.Image, bounds: tuple[int, int, int, int]):
    draw = ImageDraw.Draw(canvas)
    x0, y0, x1, y1 = bounds
    width = x1 - x0
    draw.rounded_rectangle(bounds, radius=int(width * .24), fill="#1A237E")
    draw.arc((x0 + width*.18, y0 + width*.20, x0 + width*.84, y0 + width*.86), 195, 330, fill="#FF6B00", width=max(5, int(width*.09)))
    road_y = y0 + width*.67
    draw.line((x0 + width*.22, road_y, x0 + width*.78, road_y), fill="white", width=max(4, int(width*.055)))
    wheel = width*.075
    for cx in (x0 + width*.34, x0 + width*.69):
        draw.ellipse((cx-wheel, road_y-wheel, cx+wheel, road_y+wheel), fill="white")


for size in (192, 512):
    image = Image.new("RGB", (size, size), "#F5F5F5")
    margin = int(size * .08)
    draw_mark(image, (margin, margin, size-margin, size-margin))
    image.save(OUT / f"icon-{size}.png", optimize=True)

card = Image.new("RGB", (1200, 630), "#F5F5F5")
draw = ImageDraw.Draw(card)
draw.rounded_rectangle((60, 60, 1140, 570), radius=34, fill="white", outline="#E0E2EC", width=2)
draw_mark(card, (105, 112, 245, 252))
draw.text((285, 121), "PARIVAHAN", font=font(24, True), fill="#FF6B00")
draw.text((285, 157), "SARATHI", font=font(42, True), fill="#1A237E")
draw.text((105, 305), "Transport services,", font=font(54, True), fill="#171A33")
draw.text((105, 370), "made understandable.", font=font(54, True), fill="#171A33")
draw.text((108, 464), "Multilingual guidance · document wallet · citizen-controlled Form Agent", font=font(22), fill="#666C82")
draw.rounded_rectangle((915, 105, 1090, 145), radius=20, fill="#FFF0E4")
draw.text((941, 116), "PROTOTYPE", font=font(14, True), fill="#C65300")
card.save(OUT / "og-card.png", optimize=True)
