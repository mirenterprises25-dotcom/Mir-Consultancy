# UI Modification & Design Reference Guide

This guide is your map to the entire frontend structure of the MIR Consulting website. Use this document when you want to change the visual design, add content, or describe exactly where you want me (your AI assistant) to make modifications in the future.

---

## 🎨 1. Global Branding & Styling Rules

All global colors, fonts, and styling rules are centralized in **one specific file**. If you ever want to change the "Midnight Blue" (brand-950) or the "Muted Gold" (accent) colors, or alter the typography universally:

*   **File Location**: `frontend/src/index.css`
*   **What it contains**: 
    *   **Lines 3-18 (`@theme`)**: All specific color hex codes (e.g., `--color-brand-950`, `--color-accent`) and the Google Fonts definitions (Inter and Playfair Display).
    *   **Lines 46-60 (`@layer components`)**: The actual CSS code for the main buttons (`btn-primary`, `btn-accent`) and custom interactive links (`link-editorial`).

---

## 🧩 2. Global Components (Header & Footer)

These are the elements that appear on *every single page* of the website. 

### Header (Navigation Bar)
*   **File Location**: `frontend/src/components/Header.tsx`
*   **What it contains**:
    *   **The Logo (Lines 29-31)**: The text "MIR Consulting" at the top left.
    *   **Desktop Navigation (Lines 34-80)**: The dropdown menus for "Industries" and "Capabilities", along with direct links to "Insights" and "The Firm".
    *   **Mobile Menu (Lines 94-123)**: The dropdown drawer that appears on smartphones when the hamburger icon is clicked.

### Footer (Bottom Section)
*   **File Location**: `frontend/src/components/Footer.tsx`
*   **What it contains**:
    *   **Logo & Vision (Lines 9-18)**: The bottom left structural block with the brief company description.
    *   **Capability Links (Lines 24-32)**: The center column mapping to the consulting practice areas.
    *   **Firm Links & Insights (Lines 35-42)**: The right column mapping to leadership and perspectives.
    *   **Copyright & Policies (Lines 46-53)**: The very bottom line of the page.

---

## 🏠 3. The Homepage Layout (`/`)

The homepage is an "Intellectual Journey" divided into five distinct strategic vertical strips.

*   **File Location**: `frontend/src/pages/Home.tsx`

**Section Map (Top to Bottom):**
1.  **The Hero Section (Lines 29-84)**: The massive dark section with the "Navigating Complexity" header, buttons, and the "MIR Mandate" abstract quote box on the right.
2.  **Industries Grid (Lines 87-133)**: The white section with the asymmetrical layout detailing sectors like "Restaurants & Fast Food" (01) and "Hotels & Hospitality" (02).
3.  **Consulting Capabilities (Lines 136-163)**: The dark grid listing the 4 core methodologies (Operations Optimization, Data Analytics, etc.) with the animated Lucide icons.
4.  **Insights Journal (Lines 166-224)**: The library preview featuring the massive featured "Case Study" block on the left and two smaller "Article" links on the right.
5.  **Final Trust CTA (Lines 227-246)**: The very bottom white section that says "Built on Intellectual Rigor." with two buttons directing visitors to "Engage Leadership" or "Explore the Holding Vision".

---

## 📊 4. The Internal Page Layouts

When you click through the site, here is exactly where the code for those internal pages lives:

### Industry Detail Pages (e.g., `/industries/restaurants-fast-food`)
*   **File Location**: `frontend/src/pages/IndustryDetail.tsx`
*   **Structure**:
    *   **Dark Header (Lines 44-59)**: Defines the massive industry title and short description.
    *   **The Strategic Mandate (Lines 64-72)**: The main body text paragraphs.
    *   **Quantitative Impact Box (Lines 75-92)**: The box on the right side noting "Cost Restructuring" and "Yield Expansion" metrics.
    *   **Bottom CTA (Lines 97-108)**: The dark strip directing users to "Engage the Firm".

### Capability Detail Pages (e.g., `/capabilities/data-analytics-bi`)
*   **File Location**: `frontend/src/pages/CapabilityDetail.tsx`
*   **Structure**:
    *   **Light Header (Lines 44-57)**: The massive title and description with the gold vertical accent line.
    *   **Implementation Philosophy (Lines 62-68)**: The methodology narrative format.
    *   **The Blueprint Grid (Lines 71-90)**: The 3 vertical steps showing "01", "02", "03" and the "Systemic Integration" icons.

### The Insights Library (`/insights`)
*   **File Location**: `frontend/src/pages/Insights.tsx`
*   **Structure**:
    *   **The Filter Tabs (Lines 59-75)**: The sticky horizontal menu bar (All Research, Case Studies, etc.) built with Framer Motion logic.
    *   **The Publication Cards (Lines 86-107)**: The logic rendering the high-end editorial cards with the "read time" metadata and drop-shadows.

### Specific Publication Details (`/insights/:slug`)
*   **File Location**: `frontend/src/pages/InsightDetail.tsx`
*   **Structure**:
    *   **Premium Header (Lines 48-73)**: Shows the red accent progress bar, the date, and the "Share/PDF" buttons.
    *   **Editorial Body (Lines 77-105)**: Contains the logic for the "Drop Cap" (first massive letter styling) and the blockquotes.
    *   **Author Block (Lines 110-123)**: The "MIR Research Institute" box at the bottom of the article.

### Trust Pages (The Firm / Leadership)
*   **File Location**: `frontend/src/pages/StaticPage.tsx`
*   **Structure**:
    *   **Leadership Grid (Lines 60-84)**: The logic generating the partner profiles with placeholders for professional headshots.
    *   **"Our Idea" Content Map (Lines 94-106)**: The specific typography mapping the "Integrity" and "Velocity" architectural pillars.
    *   **"Company Future" Timeline (Lines 109-122)**: The structured blocks laying out Phase 1, Phase 2, etc.

---

## 🗣️ 5. How to Ask for Changes in the Future

If you want me to redesign or add content to the website in the future, you can give me highly specific prompts using this guide. 

**Examples of what you can say:**
*   *"I want to add a third industry to the left column of the Asymmetrical Grid on the **Home Page**. See `src/pages/Home.tsx` section 2."*
*   *"Please update the Quantitative Impact Box on the **Industry Detail** page (`src/pages/IndustryDetail.tsx`) to include a third metric regarding 'Patron Retention'."*
*   *"Let's change our primary color from Midnight Blue to a deeply saturated Emerald Green. Please update the `--color-brand-950` variables in `src/index.css`."*
*   *"I wrote a new publication. Let's add an entirely new section immediately below the 'Insights Journal' on the **Home Page** that promotes a specific Whitepaper download."*
