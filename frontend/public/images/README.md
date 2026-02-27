# Static Images Directory

This `public/images` folder holds all the static visual assets for the website. Since it is inside the `/public` directory, Vite will serve these files directly at the root URL.

### Folder Structure
- `/logos`: Place your SVGs or PNGs for the MIR brand and client logos here.
- `/backgrounds`: High-resolution, abstract, or architectural photos for the Hero sections.
- `/insights`: Thumbnail imagery or graphs to be displayed on the Insight Journal cards.

### How to use these in your React Code:
Because these are in the public folder, you can reference them directly with an absolute path from the root.

**Example (Using an image in `backgrounds/hero.jpg`):**
```tsx
<div style={{ backgroundImage: "url('/images/backgrounds/hero.jpg')" }}>
  ...
</div>
```

**Example (Using a logo in `logos/mir-logo.png`):**
```tsx
<img src="/images/logos/mir-logo.png" alt="MIR Consulting Logo" />
```
