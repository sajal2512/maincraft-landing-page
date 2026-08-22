import os
import glob

files = glob.glob("blog-post-*.html")

for file in files:
    with open(file, "r") as f:
        content = f.read()

    # Title
    content = content.replace("— MainCrafts Technology</title>", "— Sajal Shrivastava</title>")
    
    # Logo aria-label
    content = content.replace('aria-label="MainCrafts Technology — Home"', 'aria-label="Sajal Shrivastava — Home"')
    
    # Logo text
    content = content.replace('<span class="navbar__logo-text">Main<span class="navbar__logo-accent">Crafts</span></span>', '<span class="navbar__logo-text">Sajal<span class="navbar__logo-accent">.</span></span>')
    
    # Author card
    content = content.replace('Web Developer &amp; Tech Enthusiast at MainCrafts Technology.', 'Web Developer &amp; Tech Enthusiast.')
    
    # Footer
    content = content.replace('&copy; 2026 MainCrafts Technology. All rights reserved.', '&copy; 2026 Sajal Shrivastava. All rights reserved.')
    
    # LinkedIn
    content = content.replace('href="https://www.linkedin.com/in/sajal-shrivastava"', 'href="https://www.linkedin.com/in/sajal-shrivastava-9a107637b/"')
    
    # WhatsApp
    if "whatsapp-fab" not in content:
        whatsapp_html = """  <!-- ═══════════════════════════════════════════════════════════════
       WHATSAPP BUTTON
       ═══════════════════════════════════════════════════════════════ -->
  <a href="https://wa.me/91XXXXXXXXXX" class="whatsapp-fab" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-whatsapp" aria-hidden="true"></i>
  </a>

</body>"""
        content = content.replace("</body>", whatsapp_html)

    with open(file, "w") as f:
        f.write(content)

print("Updated blog posts.")
