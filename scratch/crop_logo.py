from PIL import Image, ImageOps

input_path = r"c:\Users\pc\Desktop\PROJETS\ATHENA SECURITY\images\WhatsApp Image 2026-10-08 at 09.48.50.jpeg"
output_jpg = r"c:\Users\pc\Desktop\PROJETS\ATHENA SECURITY\public\images\logo-athena.jpeg"
output_png = r"c:\Users\pc\Desktop\PROJETS\ATHENA SECURITY\public\images\logo-athena-transparent.png"
output_icon = r"c:\Users\pc\Desktop\PROJETS\ATHENA SECURITY\public\favicon.ico"
output_icon_png = r"c:\Users\pc\Desktop\PROJETS\ATHENA SECURITY\public\favicon.png"

# Load original logo image
img = Image.open(input_path).convert("RGBA")

# Find bounding box of non-white pixels
# Convert to grayscale to locate bounding box of shield logo
gray = img.convert("L")
# Invert so white background becomes 0 and logo pixels are > 0
inverted = ImageOps.invert(gray)
# Threshold out near-white pixels (e.g. > 15)
threshold = inverted.point(lambda p: 255 if p > 15 else 0)
bbox = threshold.getbbox()

if bbox:
  # Add small padding around the shield (e.g. 10px)
  w, h = img.size
  pad = 8
  left = max(0, bbox[0] - pad)
  top = max(0, bbox[1] - pad)
  right = min(w, bbox[2] + pad)
  bottom = min(h, bbox[3] + pad)
  
  cropped = img.crop((left, top, right, bottom))
else:
  cropped = img

# 1. Save tightly cropped JPEG (with crisp white background)
bg_jpg = Image.new("RGB", cropped.size, (255, 255, 255))
bg_jpg.paste(cropped, mask=cropped.split()[3])
bg_jpg.save(output_jpg, "JPEG", quality=95)
print(f"Saved cropped JPEG: {output_jpg} size={bg_jpg.size}")

# 2. Save transparent PNG (turn near-white background pixels into transparent)
datas = cropped.getdata()
new_data = []
for item in datas:
  # If pixel is close to white (R>240, G>240, B>240), make transparent
  if item[0] > 240 and item[1] > 240 and item[2] > 240:
    new_data.append((255, 255, 255, 0))
  else:
    new_data.append(item)

cropped.putdata(new_data)
cropped.save(output_png, "PNG")
print(f"Saved transparent PNG: {output_png} size={cropped.size}")

# 3. Save Favicon
favicon_img = cropped.resize((64, 64), Image.Resampling.LANCZOS)
favicon_img.save(output_icon_png, "PNG")
favicon_img.save(output_icon, format="ICO")
print(f"Saved favicon: {output_icon}")
