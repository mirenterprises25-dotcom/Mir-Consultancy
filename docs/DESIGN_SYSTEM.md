# MIR Core - Design System & Brand Identity

This document outlines the atomic design principles, typography logic, color scales, and overarching interaction philosophy for the MIR ecosystem. It is designed to be timeless, scaling across MIR Consulting and any future subsidiaries.

## 1. Core Philosophy

The MIR brand communicates **intelligence, authority, analytical depth, and long-term institutional credibility**. 
We aim to evoke the trust intrinsic to elite tier-1 consulting firms (like McKinsey or BCG) but execute it through a modern, technology-native lens. 

- **Restrained Power**: We do not shout. The design is quiet, asymmetrical, and confident.
- **Editorial Structure**: Treating the web page like a premium financial or strategic journal. Generous whitespace, precise typography, and clear hierarchy.
- **No Friction**: Avoid startup tropes like erratic scrolling, "jelly" hover effects, or sensory overload. Motion must be deliberate, smooth, and narrative-aiding.

---

## 2. Color System

To maintain a feeling of calm authority, the palette relies almost entirely on deep neutrals and stark contrasts, broken only deliberately by a single muted accent.

### Primary Palette (Graphite / Midnight)
Our base structure relies on the darkest bounds of the blue-grey spectrum. Avoid pure black `#000` to prevent harsh eye strain.

- **Brand-950**: `#0A0F1A` — The deepest midnight for primary hero backgrounds.
- **Brand-900**: `#131B2A` — Primary dark surface (cards, footers).
- **Brand-800**: `#1D283A` — Elevated dark surface or borders.
- **Brand-600**: `#475569` — Secondary text on light backgrounds.

### Light Neutral Palette (Warm Whites)
Pure white `#FFF` is used as the primary canvas, supported by extremely subtle warm greys to build depth without border outlines.

- **Base Canvas**: `#FFFFFF` — Primary content background.
- **Brand-50**: `#F8FAFC` — Secondary surface (alternating sections).
- **Brand-100**: `#F1F5F9` — Dividers, strict lines, and disabled states.

### The Accent (Muted Gold)
Used sparingly to signify interactive elements, highlights, and primary CTAs. It signals prestige without being ostentatious.

- **Accent (Base)**: `#C49B5B`
- **Accent (Hover)**: `#A67E42`

---

## 3. Typography Hierarchy

We pair a highly editorial serif for conceptual authority with a clean sans-serif for functional readability.

- **Display / Headings (`font-display`)**: `Playfair Display` (Google Font). Used for H1-H3. Provides a timeless, intellectual gravitas.
- **Body / Functional (`font-sans`)**: `Inter` (Google Font). Used for body text, UI elements, and data visualization. Highly readable, neutral, and precise.

### Typographic Scales
- **H1**: Huge, confident, editorial. (e.g., `text-5xl md:text-7xl`)
- **Body Lead**: Slightly larger body text for introductions.
- **Eyebrow**: Uppercase, deeply tracked (`tracking-widest`), small font size. Used to introduce sections above the H2.

---

## 4. Layout & Spacing Philosophy

- **Asymmetry over Center-Alignment**: Long-form strategic reading is naturally left-aligned. We center content rarely, only for brief intermissions.
- **Generous Whitespace**: Sections should be padded massively (`py-24` to `py-32`). A dense page implies a lack of curatorial confidence.
- **The Box Model**: Elements should not bump into edges. Containers max out at a tight, readable width (e.g., `max-w-7xl` for grid mapping, `max-w-3xl` for pure text blocks).

---

## 5. Interaction & Motion Design (Framer Motion)

Motion must be intelligent, strictly adhering to the physics of mass and friction. 

- **Scroll Reveals**: Elements should fade up gently as they enter the viewport (`y: 20, opacity: 0` to `y: 0, opacity: 1` over `0.8s`).
- **Hovers**: Buttons and cards use subtle elevation (`box-shadow`) or the deliberate expansion of structural lines (e.g., an underline scaling from left to right). They do not bounce.
- **Transitions**: The page should feel like sliding through a unified document, avoiding jump cuts.
