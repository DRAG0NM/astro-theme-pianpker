#!/usr/bin/env python3
from fontTools.ttLib import TTFont
import sys

def get_unicode_range(font_file):
    """Extract unicode-range from font file"""
    try:
        # Load the font file
        font = TTFont(font_file)
        cmap = font.getBestCmap()
        
        # Get Unicode code points for all characters
        unicode_points = sorted(cmap.keys())
        
        # Merge consecutive code points into ranges
        ranges = []
        start = unicode_points[0]
        end = start
        
        for point in unicode_points[1:]:
            if point == end + 1:
                end = point
            else:
                # Add a range
                if start == end:
                    ranges.append(f"U+{start:04X}")
                else:
                    ranges.append(f"U+{start:04X}-{end:04X}")
                start = end = point
        
        # Add the final range
        if start == end:
            ranges.append(f"U+{start:04X}")
        else:
            ranges.append(f"U+{start:04X}-{end:04X}")
        
        # Generate CSS format
        return "unicode-range: " + ",".join(ranges) + ";"
        
    except:
        return "Error: Unable to process this font file"

# Usage
if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python simple_unicode_range.py fontfile.woff2")
    else:
        result = get_unicode_range(sys.argv[1])
        print(result)