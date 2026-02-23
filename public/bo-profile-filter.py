#!/usr/bin/env python3
"""
Building Open profile picture filter.
Applies the BO logo to any profile picture.

Usage:
    python3 bo-profile-filter.py <input_image> [output_image]

If no output is specified, saves to <input_name>-bo.<ext>
"""

import sys
import os
import io
from PIL import Image
import cairosvg

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
LOGO_SVG = os.path.join(SCRIPT_DIR, "logo.svg")

# Logo config
CANVAS_SIZE = 800
LOGO_SIZE = 90
LOGO_OFFSET_RIGHT = 155
LOGO_OFFSET_BOTTOM = 95


def apply_bo_filter(input_path, output_path=None):
    if output_path is None:
        name, ext = os.path.splitext(input_path)
        output_path = f"{name}-bo.png"

    # Load and square-crop
    img = Image.open(input_path).convert("RGBA")
    w, h = img.size
    size = min(w, h)
    left = (w - size) // 2
    top = (h - size) // 2
    img = img.crop((left, top, left + size, top + size))
    img = img.resize((CANVAS_SIZE, CANVAS_SIZE), Image.LANCZOS)

    # Render SVG logo
    svg_content = open(LOGO_SVG, "r").read()
    png_data = cairosvg.svg2png(
        bytestring=svg_content.encode(),
        output_width=LOGO_SIZE,
        output_height=int(LOGO_SIZE * 40 / 46),
    )
    logo = Image.open(io.BytesIO(png_data)).convert("RGBA")

    # Position bottom-right
    logo_x = CANVAS_SIZE - logo.width - LOGO_OFFSET_RIGHT
    logo_y = CANVAS_SIZE - logo.height - LOGO_OFFSET_BOTTOM

    # Composite
    img.paste(logo, (logo_x, logo_y), logo)
    img.save(output_path)
    print(f"Saved: {output_path} ({CANVAS_SIZE}x{CANVAS_SIZE})")
    return output_path


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    input_path = sys.argv[1]
    output_path = sys.argv[2] if len(sys.argv) > 2 else None
    apply_bo_filter(input_path, output_path)
