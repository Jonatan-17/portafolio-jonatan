"""Genera las portadas SVG (sin texto) de los proyectos que no tienen capturas,
el favicon y la imagen para compartir (og-image).

Uso: python tools/portadas.py
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "proyectos"

# id: (color1, color2, acento, motivo)
COVERS = {
    "safeguardian": ("#1b0b2e", "#3a0f4f", "#c084fc", "eye"),
    "helpdesk": ("#0b1630", "#123a6b", "#60a5fa", "ticket"),
    "gamerjpa": ("#0d1f17", "#14532d", "#4ade80", "gamepad"),
    "coworking": ("#2a1206", "#7c2d12", "#fb923c", "db"),
    "music": ("#0b1120", "#1e3a8a", "#38bdf8", "note"),
    "aeropuerto": ("#081a2b", "#0e4166", "#7dd3fc", "plane"),
    "gastos": ("#14110a", "#3f3a12", "#facc15", "coin"),
}

MOTIFS = {
    "eye": '<path d="M140 400c130-180 390-180 520 0-130 180-390 180-520 0Z" stroke="{a}" stroke-width="22" fill="none"/><circle cx="400" cy="400" r="88" fill="{a}"/><circle cx="400" cy="400" r="36" fill="{c1}"/>',
    "ticket": '<path d="M180 260h440v90a50 50 0 0 0 0 100v90H180v-90a50 50 0 0 0 0-100Z" stroke="{a}" stroke-width="22" fill="none" stroke-linejoin="round"/><path d="M300 330h200M300 400h200M300 470h120" stroke="{a}" stroke-width="18" stroke-linecap="round"/>',
    "gamepad": '<rect x="170" y="300" width="460" height="230" rx="115" stroke="{a}" stroke-width="22" fill="none"/><path d="M290 375v80M250 415h80" stroke="{a}" stroke-width="20" stroke-linecap="round"/><circle cx="500" cy="390" r="20" fill="{a}"/><circle cx="550" cy="440" r="20" fill="{a}"/>',
    "db": '<ellipse cx="400" cy="250" rx="190" ry="60" stroke="{a}" stroke-width="22" fill="none"/><path d="M210 250v300c0 33 85 60 190 60s190-27 190-60V250M210 350c0 33 85 60 190 60s190-27 190-60M210 450c0 33 85 60 190 60s190-27 190-60" stroke="{a}" stroke-width="22" fill="none"/>',
    "note": '<path d="M330 540V250l260-60v290" stroke="{a}" stroke-width="24" fill="none" stroke-linejoin="round"/><circle cx="280" cy="545" r="62" fill="{a}"/><circle cx="540" cy="485" r="62" fill="{a}"/>',
    "plane": '<path d="M150 430l500-210-150 360-90-130Z" stroke="{a}" stroke-width="22" fill="none" stroke-linejoin="round"/><path d="M410 450l240-230" stroke="{a}" stroke-width="18"/>',
    "coin": '<circle cx="400" cy="400" r="190" stroke="{a}" stroke-width="22" fill="none"/><circle cx="400" cy="400" r="140" stroke="{a}" stroke-width="10" fill="none" stroke-opacity=".5"/><path d="M440 320c-20-25-110-30-110 25s110 35 110 90-90 55-115 25M390 280v240" stroke="{a}" stroke-width="20" fill="none" stroke-linecap="round"/>',
}


def cover(c1, c2, a, motif):
    m = MOTIFS[motif].format(a=a, c1=c1)
    lines = "".join(f'<path d="M{x} 0L{x-400} 800" stroke="{a}" stroke-opacity=".06" stroke-width="2"/>' for x in range(0, 1700, 60))
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="800" viewBox="0 0 1280 800">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{c1}"/><stop offset="1" stop-color="{c2}"/></linearGradient>
<radialGradient id="h" cx=".72" cy=".42" r=".55"><stop offset="0" stop-color="{a}" stop-opacity=".35"/><stop offset="1" stop-color="{a}" stop-opacity="0"/></radialGradient></defs>
<rect width="1280" height="800" fill="url(#g)"/>{lines}<rect width="1280" height="800" fill="url(#h)"/>
<g transform="translate(560 0)" opacity=".9">{m}</g>
<rect y="560" width="1280" height="240" fill="#000" opacity=".25"/>
</svg>
'''


FAVICON = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<rect width="64" height="64" rx="12" fill="#141414"/>
<path d="M38 12h10v28c0 9-6 14-15 14-6 0-11-2-14-6l6-7c2 2 4 3 7 3 4 0 6-2 6-6Z" fill="#E50914"/>
</svg>
'''

OG = '''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs><radialGradient id="r" cx=".8" cy=".3" r=".7"><stop offset="0" stop-color="#E50914" stop-opacity=".45"/><stop offset="1" stop-color="#E50914" stop-opacity="0"/></radialGradient></defs>
<rect width="1200" height="630" fill="#141414"/><rect width="1200" height="630" fill="url(#r)"/>
<rect x="80" y="150" width="190" height="44" fill="#E50914"/>
<text x="175" y="181" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="800" fill="#fff" text-anchor="middle" letter-spacing="4">PORTAFOLIO</text>
<text x="76" y="320" font-family="Inter, Arial, sans-serif" font-size="104" font-weight="900" fill="#fff" letter-spacing="-2">JONATAN DAVID</text>
<text x="80" y="390" font-family="Inter, Arial, sans-serif" font-size="38" font-weight="600" fill="#e5e5e5">Desarrollador Backend · con conocimientos de Frontend</text>
<text x="80" y="450" font-family="Inter, Arial, sans-serif" font-size="30" fill="#b3b3b3">Java · Spring Boot · PostgreSQL · Automatización con IA</text>
<rect x="80" y="500" width="6" height="56" fill="#E50914"/>
<text x="104" y="538" font-family="Inter, Arial, sans-serif" font-size="26" font-style="italic" fill="#b3b3b3">"Mientras el proceso sea largo, la gloria será eterna"</text>
</svg>
'''


def main():
    for pid, (c1, c2, a, motif) in COVERS.items():
        d = OUT / pid
        d.mkdir(parents=True, exist_ok=True)
        (d / "portada.svg").write_text(cover(c1, c2, a, motif), encoding="utf-8")
    (ROOT / "assets" / "favicon.svg").write_text(FAVICON, encoding="utf-8")
    (ROOT / "assets" / "og-image.svg").write_text(OG, encoding="utf-8")
    print("Portadas, favicon y og-image.svg generados")


if __name__ == "__main__":
    main()
