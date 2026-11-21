# VELOCITY

Fictional premium automotive brand site. React, Vite, JavaScript, Tailwind CSS 3, GSAP + ScrollTrigger, React Router 6, Lucide.
All models, figures and company details are invented demonstration content.

## Run

    npm install
    npm run dev        # http://localhost:5173
    npm run build && npm run preview

## Photographs

No photographs are bundled. Every image has a labelled placeholder slot until its file exists.
Drop licensed JPGs into `public/images/` using the names in `public/images/README.md`
(regenerate that list with `npm run images:list`). Tune crops per image with `pos` / `posM`
(desktop-tablet / mobile object-position) in `src/data/images.js`. Keep each car in the right half of hero frames.

## Structure

- `src/data/` images manifest, vehicles (single source of truth), shared content
- `src/animations/` gsapConfig (easing, durations, media queries), animationHelpers (hero intro, page motion)
- `src/hooks/useMotion.js` gsap.matchMedia scoped to a ref, reverted on unmount
- `src/components/{layout,home,models,common}`, `src/pages/`

## Motion rules

- One easing language (`EASE`, `DUR`). Transform and opacity only.
- Every animation is created inside `gsap.matchMedia()` via `useMotion`, so cleanup on unmount and Strict Mode double-mount are automatic.
- `prefers-reduced-motion`: no animation runs and every element stays in its final state.
- Mobile: shorter durations, smaller travel, no parallax. Parallax is desktop + fine pointer only.
- Native scrolling is never hijacked (no Lenis).
