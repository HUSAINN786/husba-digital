import pathlib, re, sys
root = pathlib.Path(sys.argv[1])
replacements = [
("Craféx Creative", "HUSBA DIGITAL"), ("Craféx", "HUSBA DIGITAL"),
("CRAFÉX CREATIVE", "HUSBA DIGITAL"), ("CRAFÉX", "HUSBA"),
("Crafex Creative", "HUSBA DIGITAL"), ("Crafex", "HUSBA DIGITAL"),
("Digital Branding & Content Agency", "Digital Solutions & IT Services Company"),
("Strategy, design, and content for ambitious companies across Nigeria and Africa.", "Web development, custom software, business systems, branding, and digital growth solutions."),
("Strategy, design, and storytelling for ambitious companies across Nigeria and Africa.", "Digital products, thoughtful design, and technology built around business goals."),
("A curated collection of brands we've helped transform across Nigeria and beyond.", "Concept visuals showing the kinds of digital experiences HUSBA DIGITAL can create. These are illustrative concepts, not claimed client case studies."),
("We understand the Nigerian market because we live it. Lagos to Accra, we build brands that connect.", "We build useful, accessible digital experiences around each business’s goals."),
("Lagos, Nigeria", "Contact details to be added"), ("Lagos, NG", "HUSBA DIGITAL"),
("Lagos, 2024", "Digital solutions"), ("Lagos", "HUSBA DIGITAL"),
("Nigeria and Africa", "businesses and teams"), ("across Nigeria and beyond", "for businesses and teams"),
("hello@crafexcreative.com", "Contact details to be added"),
("https://instagram.com/crafexcreative", "#contact"),
("https://linkedin.com/company/crafexcreative", "#contact"),
("https://x.com/crafexcreative", "#contact"), ("https://behance.net/crafexcreative", "#contact"),
]
for p in root.rglob("*"):
    if not p.is_file() or p.suffix.lower() not in {".jsx", ".js", ".html", ".css", ".md"}: continue
    try: s = p.read_text(encoding="utf-8")
    except UnicodeDecodeError: continue
    for old, new in replacements: s = s.replace(old, new)
    s = s.replace('href="mailto:Contact details to be added"', 'href="#contact"')
    if p.name == "Hero.jsx":
        s = re.sub(r"const profileCards = \[.*?\n\]", """const profileCards = [
  { name: 'Web Development', role: 'Websites & web applications', initials: 'WD', color: 'from-brand-500 to-violet-600' },
  { name: 'Custom Software', role: 'Business systems & tools', initials: 'CS', color: 'from-blue-500 to-cyan-600' },
  { name: 'Digital Growth', role: 'Branding, design & marketing', initials: 'DG', color: 'from-emerald-500 to-teal-600' },
]""", s, count=1, flags=re.S)
        s = s.replace('"We no dey do ordinary"', '"Your Digital Growth Partner"')
    if p.name == "About.jsx":
        s = re.sub(r"const team = \[.*?\n\]\n\nconst milestones", """const team = [
  { name: 'Website Development', role: 'Websites & web applications', initials: 'WD', color: 'from-brand-500 to-violet-600', bio: 'Responsive digital experiences designed around your audience and business goals.' },
  { name: 'Software Solutions', role: 'Custom tools & business systems', initials: 'SS', color: 'from-blue-500 to-cyan-600', bio: 'Practical software that helps teams simplify workflows and operate more efficiently.' },
  { name: 'Brand & Design', role: 'Visual identity & creative', initials: 'BD', color: 'from-emerald-500 to-teal-600', bio: 'Clear, consistent brand systems and graphic design for digital-first businesses.' },
  { name: 'Digital Growth', role: 'Marketing & social media', initials: 'DG', color: 'from-orange-500 to-amber-600', bio: 'Digital marketing and social media support aligned with your goals.' },
]

const milestones""", s, count=1, flags=re.S)
        s = re.sub(r"const milestones = \[.*?\n\]\n\nconst clients", """const milestones = [
  { year: '01', title: 'Discover', desc: 'Understand the business, audience, goals, and practical constraints before choosing a solution.' },
  { year: '02', title: 'Plan', desc: 'Shape the right approach, scope, content structure, and visual direction.' },
  { year: '03', title: 'Build', desc: 'Develop responsive, maintainable digital experiences with care and attention to detail.' },
  { year: '04', title: 'Improve', desc: 'Prepare for launch and identify sensible next steps for ongoing improvement.' },
]

const clients""", s, count=1, flags=re.S)
        s = re.sub(r"const clients = \[.*?\n\]", """const clients = [
  { name: 'Website Development', sector: 'Websites & web apps' },
  { name: 'Software Development', sector: 'Custom business tools' },
  { name: 'Business Management', sector: 'Operational systems' },
  { name: 'Branding & Design', sector: 'Visual communication' },
  { name: 'Digital Marketing', sector: 'Digital growth' },
  { name: 'E-commerce', sector: 'Online catalogues & stores' },
]""", s, count=1, flags=re.S)
        s = s.replace('Clients', 'Capabilities')
        s = re.sub(r"\[\{ value: '150\+', label: 'Projects' \}, \{ value: '50\+', label: 'Clients' \}, \{ value: '8\+', label: 'Years' \}\]", "[{ value: 'Web', label: 'Development' }, { value: 'Custom', label: 'Software' }, { value: 'Digital', label: 'Growth' }]", s)
    if p.name == "HomeSections.jsx":
        s = re.sub(r"const milestones = \[.*?\n\]", """const milestones = [
  { year: '01', title: 'Discover', desc: 'Start with business goals, audience needs, and the problem to solve.' },
  { year: '02', title: 'Design', desc: 'Create a clear experience and visual direction that fits the brief.' },
  { year: '03', title: 'Develop', desc: 'Build responsive websites, applications, and useful digital tools.' },
  { year: '04', title: 'Deliver', desc: 'Prepare a thoughtful launch and a foundation for future improvements.' },
]""", s, count=1, flags=re.S)
        s = s.replace('ARTISTS OF CRAFT', 'BUILD FOR WHAT’S NEXT')
        s = s.replace('From Lagos to the world, we build brands that move people. Every pixel, every word, every strategy — intentional.', 'From first idea to launch, we combine design and technology to make digital work useful.')
        s = re.sub(r"const stats = \[.*?\n\s*\]", """const stats = [
    { value: 'Web', label: 'Development' },
    { value: 'Custom', label: 'Software' },
    { value: 'Digital', label: 'Growth' },
  ]""", s, count=1, flags=re.S)
    if p.name == "Projects.jsx":
        s = re.sub(r"const projects = \[.*?\n\]", """const projects = [
  { id: 1, title: 'Digital Business Platform', category: 'Concept · Web Application', tags: ['Web Development', 'UI/UX'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80', color: '#A78BFA' },
  { id: 2, title: 'Brand & Visual System', category: 'Concept · Branding', tags: ['Branding', 'Graphic Design'], img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80', color: '#8b6be0' },
  { id: 3, title: 'E-commerce Experience', category: 'Concept · Web', tags: ['E-commerce', 'Web Design'], img: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=1920&q=80', color: '#643D91' },
  { id: 4, title: 'Business Management Tool', category: 'Concept · Software', tags: ['Custom Software', 'Product Design'], img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=80', color: '#A78BFA' },
  { id: 5, title: 'Digital Campaign System', category: 'Concept · Digital Marketing', tags: ['Digital Marketing', 'Social Media'], img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80', color: '#8b6be0' },
]""", s, count=1, flags=re.S)
        s = s.replace('Featured<br />Projects', 'Concept<br />Showcase')
    if p.name == "Contact.jsx":
        s = s.replace("['Brand Identity', 'Social Media Strategy', 'Content Creation', 'Website Design', 'Digital Marketing', 'Other']", "['Website Development', 'Software Development', 'Business Management Software', 'Graphic Design & Branding', 'Digital Marketing', 'Social Media Management', 'E-commerce Solutions', 'Other']")
    p.write_text(s, encoding="utf-8")
html = root / "index.html"
s = html.read_text(encoding="utf-8")
s = re.sub(r'<meta name="description" content="[^"]*"', '<meta name="description" content="HUSBA DIGITAL — Your Digital Growth Partner. Website development, custom software, business management systems, branding, digital marketing, and e-commerce solutions."', s)
s = re.sub(r'<title>.*?</title>', '<title>HUSBA DIGITAL | Your Digital Growth Partner</title>', s, flags=re.S)
html.write_text(s, encoding="utf-8")
pkg = root / "package.json"
s = pkg.read_text(encoding="utf-8").replace('"name": "crafex-portfolio"', '"name": "husba-digital"')
pkg.write_text(s, encoding="utf-8")
lock = root / "package-lock.json"
if lock.exists():
    s = lock.read_text(encoding="utf-8").replace('"name": "crafex-portfolio"', '"name": "husba-digital"')
    lock.write_text(s, encoding="utf-8")
