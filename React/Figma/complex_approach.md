## the Approach
For complex UI components, I followed a layered approach:

### Step-by-step:

1. Break UI into sections (Hero, Banner, Cards, etc.)

2. Identify repeating patterns (like card components)

3. Divide each complex component into layers:
   - Base container
   - Content layer (image/text)
   - Overlay/gradient layer
   - Decorative elements (badges, ribbons, strips)

4. Build JSX structure first (no styling)

5. Apply CSS in order:
   - Layout (flex/grid)
   - Positioning (relative/absolute)
   - Styling (colors, shadows, gradients).


**For the actual complex shapes:**

- Angled ribbons and strips → clip-path
- Slanted buttons → skewX with counter-skew on text
- Floating badges → absolute positioning with rotate
- Dark overlays on images → pseudo elements or gradient overlay


**\* Tools for complex shapes:**
for non-standard ui shapes:

- `clip-path`: for angled cuts
- `transform skewX(): skew/rotate` (skewed button) for tilted elements, counter skew on text
- `::before/ ::after`(pseudo-elements) for decorative overlays




## Complex shapes and aapproach (component-wise approach):

- 1. Hero Section(Layered UI)
- 2. Recruit Banner(Split + overlay +content)
- 3. Cards
- 4. Squads
- 5. Character

## 1. Hero section(Layered Ui):
### Problem:

Background images + Blur/lighting effects + dark overlay + centered content + slider dots + (Layer stacking problem)

### Approach:

- main container: Container → `position: relative`
- Background → image (cover, center)
- Overlay → absolute dark/gradient layer
- Content → centered using flex or transform
- Place:
  - heading
  - subtext
  - dots(small reusable component(active/inactive state))

**Core Concept:** Layer stacking (background → overlay → content)

## 2.Recruit Banner(Split + overlay + content):
### Problem:

- Left: text+button
- right: bullet point
- background: multiple images blended
- (grid + overlay + gradient)

### Approach:

- use **grid or flex(2 section: let+right)**
- Background: either multiple image or single image with gradient overlay

- left:
  - heading+button
- right:
  - bullet list
- Add **overlay gradient** to improve readability
- Control spacing + alignment

=> core concept: **split layout + overlay blending**

### 3. Product Cards(reusable pattern)
### problem:
image + title + rating + border glow

### Approach:

- create **card component**
- structure:
  - image container
  - consistent spacing
- Rating:
  - map starts dynamically
- aDD:
  - HOVER EFFECTS
  - BORDER/GLOW USING BOX-SHADOW

=> cORE concept: **reusable compoent + clean structure**

# 4. Draft cards(the real complex):
Angled ribbon + button strip + layered design
### Approach:

- Base:
  - card container(relative)
- inside:
  - image section
  - content section
- top ribbon:
  - create using:
  - `position: absolute`
  - `transform:rotate()` or `clip-path`
- bottom strip:
  - use:
    _ skew/transform
    _ or clip-path polygon (Top ribbon → clip-path polygon (diagonal cut on bottom edge)
    Bottom strip → clip-path polygon (diagonal cut on top edge)
    Both use position: absolute + z-index for layering)

=> core concept: **decorative layers using transform / clip-path**

# 5. Purchase Cards (Data + Actions)

### Problem:

Image + text + button + metadata

### Approach:

- Card layout (flex column)
- Sections:
  - image
  - title
  - metadata (date, info)
  - action button

- Button:
  - reusable component

- Keep spacing consistent

=> Core concept: **structured data + reusable UI**

# 6. Squad Cards (Image Overlay)

### Problem:

Image background + text on top + badges/icons

### Approach:

- Container:
  - `position: relative`

- Background image:
  - inside `<img>` or CSS

- Overlay:
  - dark gradient (for readability)

- Content:
  - positioned using `absolute`

- Badge/icon:
  - place using top/right absolute

Core concept: **image + overlay + positioned content**

# 7. Character Cards (Floating Elements)

### Problem:

Avatar + info + floating level badge

### Approach:

- Card container (relative)
- Left:
  - avatar/image

- Right:
  - text info

- Badge:
  - `position: absolute + transform: rotate(-5deg) + clip-path for the angled sides`
  - top corner
  - ensure layering using:
  - z-index

- Use flex for layout

=> Core concept: **relative parent + absolute child positioning**

# 8. Sections (What’s Hot, Drafts, Purchases)

### Problem:

Horizontal scrolling + grouped cards

### Approach:

- Section wrapper
- Header:
  - title + "show more"

- Content:
  - flex row OR grid

- Enable:
  - horizontal scroll if needed

- Map data → render cards

=> Core concept: **composition + reuse**


