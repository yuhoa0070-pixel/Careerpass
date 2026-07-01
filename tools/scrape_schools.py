#!/usr/bin/env python3
"""
Careerpass — institution data scraper.

WHY THIS EXISTS
---------------
The build environment for the website has NO external internet access, so the
scraping must be run on YOUR machine (which has internet). This script visits
each institution's official homepage, politely, and extracts basic public
metadata (page title, meta description, visible headings, and any links that
look like program/faculty pages). It writes the result to schools_scraped.json.

Afterwards, share schools_scraped.json back and it will be merged into the
site's schoolsData.

USAGE
-----
    pip install requests beautifulsoup4
    python tools/scrape_schools.py

NOTES
-----
- Be respectful: this uses a real User-Agent, a timeout, and a delay between
  requests. Do not hammer the sites.
- Some sites block bots or require JavaScript; those will be recorded with an
  "error" field so you can fill them in manually.
- Verify anything important (tuition, deadlines) against the official source;
  homepages rarely list exact fees.
"""

import json
import time
import sys

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    print("Please run: pip install requests beautifulsoup4")
    sys.exit(1)

# id -> official site (best-known URLs; update any that changed)
INSTITUTIONS = {
    # Public universities
    "rupp": ("Royal University of Phnom Penh", "https://www.rupp.edu.kh/"),
    "rule": ("Royal University of Law and Economics", "https://rule.edu.kh/"),
    "num": ("National University of Management", "https://num.edu.kh/"),
    "uhs": ("University of Health Sciences", "https://uhs.edu.kh/"),
    "itc": ("Institute of Technology of Cambodia", "https://itc.edu.kh/"),
    "rua": ("Royal University of Agriculture", "https://rua.edu.kh/"),
    # Institutes / academies
    "cadt": ("Cambodia Academy of Digital Technology", "https://cadt.edu.kh/"),
    "npic": ("National Polytechnic Institute of Cambodia", "https://npic.edu.kh/"),
    "nie": ("National Institute of Education", "https://nie.edu.kh/"),
    "era": ("Royal School of Administration", "https://era.gov.kh/"),
    "ntti": ("National Technical Training Institute", "https://ntti.edu.kh/"),
    "pnca": ("Prek Leap National College of Agriculture", "https://pncagri.edu.kh/"),
    # Provincial
    "nubb": ("National University of Battambang", "https://nubb.edu.kh/"),
    "sru": ("Svay Rieng University", "https://sru.edu.kh/"),
    "mcu": ("Meanchey University", "https://mcu.edu.kh/"),
    "csku": ("Chea Sim Kamchay Mear University", "https://csku.edu.kh/"),
    # Private
    "aupp": ("American University of Phnom Penh", "https://aupp.edu.kh/"),
    "camed": ("CamEd Business School", "https://cam-ed.com/"),
    "paragon": ("Paragon International University", "https://paragoniu.edu.kh/"),
    "puc": ("Paññasastra University of Cambodia", "https://www.puc.edu.kh/"),
    "up": ("University of Puthisastra", "https://www.puthisastra.edu.kh/"),
    "norton": ("Norton University", "https://www.norton-u.com/"),
    "bbu": ("Build Bright University", "https://bbu.edu.kh/"),
    "biu": ("Beltei International University", "https://beltei.edu.kh/"),
    "uc": ("The University of Cambodia", "https://uc.edu.kh/"),
    "vanda": ("Vanda Institute", "https://vanda.edu.kh/"),
    "iu": ("International University", "https://iu.edu.kh/"),
    "limkokwing": ("Limkokwing University Cambodia", "https://www.limkokwing.net/cambodia/"),
    # Digital / bootcamps
    "ab": ("Above & Beyond School", "https://aandb.school/"),
    "tux": ("TUX Global Institute", "https://tux.edu.kh/"),
    "camscience": ("CamScience", "https://camscience.org/"),
    "camtech": ("CamTech University", "https://camtech.edu.kh/"),
    "sabaicode": ("SabaiCode", "https://sabaicode.com/"),
    "dichi": ("DICHI Academy", "https://dichi.io/"),
    "khmercoders": ("Khmer Coders", "https://khmercoders.dev/"),
}

HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; CareerpassBot/1.0; educational research)"
}
DELAY_SECONDS = 2.0
TIMEOUT = 15


def scrape_one(name, url):
    entry = {"name": name, "url": url}
    try:
        r = requests.get(url, headers=HEADERS, timeout=TIMEOUT)
        entry["status"] = r.status_code
        if r.status_code != 200:
            entry["error"] = f"HTTP {r.status_code}"
            return entry
        soup = BeautifulSoup(r.text, "html.parser")
        entry["title"] = (soup.title.string or "").strip() if soup.title else ""
        desc = soup.find("meta", attrs={"name": "description"}) or soup.find(
            "meta", attrs={"property": "og:description"}
        )
        entry["description"] = desc["content"].strip() if desc and desc.get("content") else ""
        # Headings (often faculty / program names)
        entry["headings"] = [
            h.get_text(strip=True)
            for h in soup.find_all(["h1", "h2", "h3"])
            if h.get_text(strip=True)
        ][:40]
        # Links that look like faculty / program / department pages
        keywords = ("faculty", "program", "department", "course", "school", "degree",
                    "admission", "tuition", "fee")
        links = []
        for a in soup.find_all("a", href=True):
            text = a.get_text(strip=True)
            href = a["href"].lower()
            if any(k in href or k in text.lower() for k in keywords) and text:
                links.append({"text": text[:80], "href": a["href"]})
        # de-dup, cap
        seen, uniq = set(), []
        for l in links:
            if l["href"] not in seen:
                seen.add(l["href"])
                uniq.append(l)
        entry["relevant_links"] = uniq[:30]
    except Exception as e:
        entry["error"] = str(e)
    return entry


def main():
    out = {}
    total = len(INSTITUTIONS)
    for i, (sid, (name, url)) in enumerate(INSTITUTIONS.items(), 1):
        print(f"[{i}/{total}] {sid}: {url}")
        out[sid] = scrape_one(name, url)
        time.sleep(DELAY_SECONDS)
    with open("schools_scraped.json", "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=2)
    ok = sum(1 for v in out.values() if v.get("status") == 200)
    print(f"\nDone. {ok}/{total} fetched OK -> schools_scraped.json")
    print("Send schools_scraped.json back to have it merged into the site.")


if __name__ == "__main__":
    main()
