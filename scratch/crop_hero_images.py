from PIL import Image

# 1. Crop main security officer from brochure page 2
img2 = Image.open(r"c:\Users\pc\Desktop\PROJETS\ATHENA SECURITY\images\WhatsApp Image 2026-10-08 at 09.48.17.jpeg")
w2, h2 = img2.size

# The security officer with walkie talkie is located in the right/center portion of the brochure
crop_box_officer = (int(w2 * 0.28), int(h2 * 0.12), int(w2 * 0.99), int(h2 * 0.78))
officer = img2.crop(crop_box_officer)
officer.save(r"c:\Users\pc\Desktop\PROJETS\ATHENA SECURITY\public\images\officer-athena.jpeg", quality=95)
print("Saved officer-athena.jpeg", officer.size)

# 2. Crop secondary officer with hand raised from brochure page 2
crop_box_hand = (int(w2 * 0.03), int(h2 * 0.26), int(w2 * 0.25), int(h2 * 0.52))
hand_guard = img2.crop(crop_box_hand)
hand_guard.save(r"c:\Users\pc\Desktop\PROJETS\ATHENA SECURITY\public\images\guard-hand.jpeg", quality=95)
print("Saved guard-hand.jpeg", hand_guard.size)
