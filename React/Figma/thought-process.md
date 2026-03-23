### Thought Process:

The Figma ui full page breakdown:
1. TopBar          → social links + external links
2. Navbar          → logo, nav links, subscribe btn, user
3. HeroBanner      → image slider + welcome message
4. RecruitBanner   → promotional banner (dismissable)
5. WhatsHot        → 3 columns of game cards
6. Drafts          → horizontal scrollable card row
7. Purchases       → horizontal scrollable card row
8. MySquads        → squad cards row
9. MyCharacters    → character cards row
10. Footer         → logo, links, social icons, copyright


<!-- 
->Layout-those which use on every page not just one page lke Home
->sections-seperate those components which only will use in one page not other pages
->ui-seperate| cards repeat across multiple section-reusable

 -layout -structure of app, how page is defined
 -skeleton of page

 -ui: small pieces used inside layout or sections
 - for example: cards button header input -->


## Developer mode create any webiste:
1.see design 2.analyse 3.break down 4.plan 5.then code



## Figma Design overflow:
- 1. design and identified section:
- => TopBar->Navbar->Hero->RecruitBanner->WhatsHot->Drafts->Purchase->Squads->Characters->Footer

- 2.repeating patterns:
- =>Gamecard(repeats in every section)
- => sectionHeader repeats in every section


- 3.folder structure:
- =>components/layout -> shared across pages
- =>components/sections/ -> page specific sections
- =>components/ui/ ->reusable small pieces
- =>pages/ ->assembles everything
- =>data/ ->mock data seperate from ui

src/
├── components/
│   ├── layout/
│   │   ├── TopBar.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── sections/
│   │   ├── HeroBanner.jsx
│   │   ├── RecruitBanner.jsx
│   │   ├── WhatsHot.jsx
│   │   ├── Drafts.jsx
│   │   ├── Purchases.jsx
│   │   ├── MySquads.jsx
│   │   └── MyCharacters.jsx
│   │
│   └── ui/
│       ├── GameCard.jsx        ← reused in WhatsHot, Drafts
│       ├── PurchaseCard.jsx    ← used in Purchases
│       ├── SquadCard.jsx       ← used in MySquads
│       ├── CharacterCard.jsx   ← used in MyCharacters
│       └── SectionHeader.jsx  ← "WHAT'S HOT", "DRAFTS" etc
│
├── pages/
│   └── Home.jsx               ← assembles everything
│
├── data/
│   └── mockData.js            ← fake data for all cards
│
├── App.jsx
└── main.jsx


3. reusable component: 
- 1.gamecard(cover image,title,subtitle,star,rating +number);
- 2.sectionheader(appears in every section,section title(drafts,purchases..),show more link)


# components thinking: spot what repeats,build it once,reuse it everywhere.



4. identified where state is needed:
- =>HeroBanner -> Slider needs activeSlide state
- =>RecruitBanner -> CLose button need isVisible state

## Note:
- broke the UI into 10 sections, 
- found 2 reusable components, 
- planned the folder structure, 
- and identified 2 places where state is needed.

