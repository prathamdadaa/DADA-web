# DADA — IGNOU BCA Resource Hub

A simple, fast, semester-wise resource page for IGNOU BCA (BCA_NEW / ODL) students. It links every course in the official 39-course, 6-semester curriculum straight to:

- 📗 **eGyanKosh** — IGNOU's official free repository of Self-Learning Material (SLM) PDFs
- 📘 **IGNOU Assignment Portal** — the official place to download current assignments

No fake "notes" or copy-pasted PDFs — just clean, organized links to the real, official source for every course, plus a suggested daily study routine.

**Live demo:** *(add your GitHub Pages / hosting link here once deployed)*

---

## 🙋 About this project

Hi, I'm **Pratham Dada**, a BCA student myself. I built this because I kept losing time hunting for the right eGyanKosh link or assignment PDF every semester — so I made one page that does it for everyone.

This is meant to grow as a **community project**. If you're also a BCA student (IGNOU or otherwise), or just someone who wants to help other students, you're welcome here. Fix a broken link, add missing material, improve the design, translate it, whatever you've got — all of it helps someone studying at 2 AM before an assignment deadline. Let's grow this together. 🚀

---

## 📁 Project structure

```
dada-site/
├── index.html      # Page structure & content (semesters, courses, routine)
├── styles.css       # All styling — colors/spacing live in CSS variables at the top
├── script.js        # Loader animation + accessible semester tab switching
└── README.md        # You are here
```

No build step, no framework, no dependencies. Open `index.html` in a browser and it works.

---

## 🤝 How to contribute

Everyone is welcome — first-time contributors especially. Here's how:

1. **Fork** this repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/<your-username>/dada-bca-hub.git
   ```
3. Create a branch for your change:
   ```bash
   git checkout -b add-sem2-notes-link
   ```
4. Make your change (see ideas below 👇)
5. Commit and push:
   ```bash
   git commit -m "Add missing MCS-203 reference link"
   git push origin add-sem2-notes-link
   ```
6. Open a **Pull Request** — describe what you added or fixed, and why

If you're new to Git/GitHub, don't worry — open an [Issue](../../issues) describing what you'd like to add or fix, and we can help you through it, or someone else can pick it up.

### Ways to contribute

- ✅ **Add or fix study material links** — more official reference links per course (eGyanKosh direct PDF links, IGNOU video lectures, etc.)
- ✅ **Add missing courses** — if a course code is wrong or a semester's list is outdated per the latest IGNOU programme guide, open a PR
- ✅ **Fix broken links** — IGNOU's site structure changes sometimes; if a link 404s, please report or fix it
- ✅ **Improve the daily routine section** — share a study schedule that's worked for you
- ✅ **Design & accessibility improvements** — better contrast, mobile fixes, animation polish
- ✅ **Translations** — a Hindi or regional-language version would help a lot of students
- ✅ **Write helper guides** — e.g. "How to submit assignments on the IGNOU portal," "How eGyanKosh search works"

### Contribution guidelines

- Keep it **official-source-only**. Please don't add pirated PDFs, third-party "notes" sites of unclear origin, or anything that isn't IGNOU/eGyanKosh itself. The whole point of this project is trustworthy, always-correct links.
- Keep the file structure simple — one HTML file, one CSS file, one JS file. No frameworks/build tools unless discussed first in an Issue.
- Match the existing code style (see `styles.css` — colors and spacing use CSS variables at the top; please reuse them instead of hardcoding new hex values).
- Be kind in PR reviews — most of us are students helping in our free time.

---

## 🗺️ Roadmap / ideas (pick one up!)

- [ ] Add direct-PDF links per course (not just eGyanKosh search)
- [ ] Add previous years' question papers section
- [ ] Add a search/filter bar across all semesters
- [ ] Dark/light theme toggle
- [ ] Hindi language version
- [ ] Deploy via GitHub Pages with a proper domain

Feel free to open an Issue with your own idea too.

---

## 👥 Contributors

This list updates automatically — no one needs to edit it by hand. It pulls live from this repo's contributor graph.

[![Contributors](https://contrib.rocks/image?repo=<prathamdadaa>/dada-bca-hub)](https://github.com/<prathamdadaa>/dada-bca-hub/graphs/contributors)

*(Replace `<your-username>/dada-bca-hub` above with your actual GitHub username/repo name once it's live — the image will then auto-refresh with everyone's avatar as they contribute.)*

You can also see the full, always-current list any time on GitHub's native **[Contributors](../../graphs/contributors)** page.

---

## 📜 License

This project is open source under the [MIT License](LICENSE) — feel free to use, fork, and adapt it for your own institute/course hub.

---

## 💬 Contact

Started by **Pratham Dada**, BCA student.
Open an [Issue](../../issues) or start a [Discussion](../../discussions) — happy to have you contribute, ask questions, or just say hi.

Let's help every BCA student find what they need without the stress. 🎓
