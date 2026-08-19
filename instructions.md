# Portfolio Redesign Instructions

## Core Rules — Non-Negotiable

- **Preserve the existing color scheme.** Do not change the current near-black background or orange accent. Use the exact color values already defined in `:root`/CSS variables.
- **Preserve all existing copy.** Do not rewrite, shorten, or replace headlines, project descriptions, About content, bio, or other text.
- **Preserve all existing sections.** Do not remove or rename sections unless explicitly instructed. You may reorganize, restyle, and improve their presentation.
- This is a **visual, structural, and interaction redesign**, not a content rewrite.
- **Do not fabricate content, metrics, experience, or achievements.**

---

# Design Direction

The goal is **premium, minimal, modern, and technically polished**.

Use **brittanychiang.com as the primary design reference** for structure and restraint, then add **2–3 interaction patterns inspired by mauriciojuba.com**.

Do **not** copy either site's layout or branding. Borrow specific design patterns only.

---

# 1. mauriciojuba.com — Interaction Inspiration

Use these patterns selectively.

### Scroll Reveal

- Elements fade in and move upward when entering the viewport.
- Animation: `opacity: 0 → 1`, `translateY(20px) → 0`.
- Use `IntersectionObserver`.
- Keep animations subtle and fast.
- Respect `prefers-reduced-motion`.

### Numbered Section Labels

Add a small monospace label above each major section heading:

```text
01 / ABOUT
02 / PROJECTS
03 / SKILLS
04 / CONTACT
```

Keep these labels subtle.

### Hover Micro-interactions

Buttons and links should have:

- Slight scale increase (`1.02`)
- Border/accent color transition
- `150–200ms ease-out` timing

Avoid exaggerated animations, 3D effects, or unnecessary motion.

### Optional Marquee

A subtle repeated-text background effect may be used behind the Projects section header.

Only use this if it improves the design. Keep opacity low and movement slow.

### Dynamic Detail

Add at most one lightweight dynamic element, such as:

```text
● AVAILABLE FOR OPPORTUNITIES
```

A subtle pulsing dot is enough. Do not add unnecessary clocks, scroll counters, or complex effects.

---

# 2. brittanychiang.com — Primary Design Reference

Use this site as the benchmark for simplicity, hierarchy, spacing, and navigation.

### Desktop Navigation

Implement a fixed left sidebar containing:

- Name
- Title/tagline
- Navigation links
- Resume download CTA
- Optional availability indicator

The main content should scroll on the right.

Navigation should highlight the current section while scrolling using `IntersectionObserver`.

### Mobile Navigation

On smaller screens:

- Replace the sidebar with a compact top navigation.
- Use a hamburger menu if necessary.
- Keep navigation simple and unobtrusive.
- Keep the Resume download easily accessible.

### Typography & Hierarchy

Maintain a clear hierarchy:

```text
Name / Primary heading
→ Section heading
→ Body text
→ Supporting metadata
```

Use consistent spacing based on an 8px scale:

```text
8 / 16 / 24 / 32 / 48 / 64
```

Avoid arbitrary margins and inconsistent spacing.

### Project Cards

Keep project cards restrained:

- Subtle background/border change on hover
- Accent color for interactive elements
- Tech tags as small chips
- No heavy shadows
- No 3D tilt
- No excessive animation

**Do not fabricate project metrics** such as users, revenue, ratings, customers, or performance numbers.

### Experience / Background

If the existing portfolio contains experience or work history, present it using either:

- A clean tabbed experience layout, or
- A vertical timeline/list

Prioritize readability over complexity.

---

# Section-Specific Requirements

## Hero

Keep the existing content and general layout.

Add a subtle entrance animation with this stagger:

1. Name
2. Title
3. Tagline
4. Buttons
5. Tech chips

Use approximately `80ms` between each element.

### Resume Download

Add a clear **Download Resume** button to the Hero.

Requirements:

- Link to the current resume PDF stored in the project.
- Use a professional filename such as `Zo-[LastName]-Software-Engineer-Resume.pdf`.
- The button should visually complement the existing CTA buttons.
- Do not make the Resume button more visually dominant than the primary portfolio CTA.
- The download must work on both desktop and mobile.
- Do not create a separate Resume page unless there is already one.
- If the resume PDF does not exist yet, create the expected asset path/reference but **do not fabricate resume content**.

Example CTA hierarchy:

```text
[ View Projects ]  [ Download Resume ]
```

Do not rewrite the existing hero copy.

---

## Navigation

### Desktop

- Fixed sidebar
- Active section indicator
- Smooth scrolling
- Resume download CTA

### Mobile

- Top navigation
- Hamburger menu if needed
- Resume download accessible without requiring the user to scroll through the entire page

Use `IntersectionObserver` to detect the active section.

---

## Section Headers

Every major section should have a numbered monospace label:

```text
01 / ABOUT
02 / PROJECTS
03 / SKILLS
04 / CONTACT
```

Keep labels small and understated.

---

## Projects

Use clean, premium project cards.

Each card should include the existing:

- Project title
- Description
- Tech stack
- Links/images already present

Improve hierarchy and interaction without changing the copy.

---

## Footer / Contact

Keep this section simple.

Use direct links for:

- GitHub
- LinkedIn
- Email/contact
- Resume download

Do not add a contact form unless one already exists and works.

---

# SEO & Accessibility

Perform this as a **separate pass after the visual redesign**.

### SEO

- Use exactly one `<h1>` for the primary page heading/name.
- Use proper `<h2>` and `<h3>` hierarchy.
- Add/update `<title>`.
- Add/update `<meta name="description">` to accurately position me as a **Software Engineer**.
- Add Open Graph metadata.
- Add Twitter Card metadata.
- Include appropriate `title`, `description`, `image`, and `url`.
- Add `sitemap.xml` and `robots.txt` if they don't already exist.

### Accessibility

- Add meaningful `alt` text to all images.
- Use semantic HTML:
  - `<nav>`
  - `<main>`
  - `<section>`
  - `<footer>`

- Avoid using `<div>` for everything.
- Ensure keyboard navigation works.
- Ensure sufficient contrast.
- Respect `prefers-reduced-motion`.
- Ensure the Resume download button has a clear accessible label.

---

# Implementation Rules for Claude Code

### Work Incrementally

Do **not** redesign the entire portfolio in one pass.

Work component-by-component:

1. Inspect the existing implementation.
2. Identify the relevant component/styles.
3. Make the change.
4. Run the development server.
5. Visually inspect the result.
6. Fix regressions.
7. Move to the next component.

### Dependencies

Prefer:

- Plain CSS
- CSS transitions/keyframes
- `IntersectionObserver`
- Existing project dependencies

**Do not add heavy animation libraries** such as Framer Motion or GSAP unless the existing interaction genuinely cannot be implemented cleanly without them.

### Preserve Existing Architecture

Before changing code:

- Inspect the current component structure.
- Reuse existing components where practical.
- Reuse existing CSS variables.
- Do not unnecessarily rewrite working functionality.
- Do not introduce duplicate components or styles.
- Do not break existing links or functionality.

### Resume Implementation

Before implementing the Resume button:

1. Inspect the project for an existing resume PDF.
2. If one exists, use it rather than creating another copy.
3. If none exists, determine the appropriate public/static asset location based on the existing framework.
4. Add the Resume download link using the project's existing conventions.
5. Verify the link works in the production build.
6. Do not generate or modify resume content.

Use a professional filename:

```text
Zo-[LastName]-Software-Engineer-Resume.pdf
```

### Reference Usage

When implementing a component, use the relevant reference pattern explicitly.

Example:

> Restyle the navigation using the fixed-sidebar + active-section pattern from brittanychiang.com. Keep the existing orange/black color variables, preserve all current navigation labels, add the Resume download CTA, and use IntersectionObserver for the active section state.

---

# Final Quality Check

Before considering the redesign complete:

- [ ] Existing copy is unchanged.
- [ ] Existing sections are still present.
- [ ] Existing color scheme is unchanged.
- [ ] Desktop sidebar navigation works.
- [ ] Mobile navigation works.
- [ ] Active section highlighting works.
- [ ] Resume download button is visible and accessible.
- [ ] Resume PDF opens/downloads correctly.
- [ ] Resume filename is professional.
- [ ] Resume CTA does not overpower the primary CTA.
- [ ] Scroll-reveal animations work.
- [ ] Hover states are subtle and consistent.
- [ ] Project cards remain clean and restrained.
- [ ] No fabricated metrics or content were added.
- [ ] Responsive layouts work across desktop/tablet/mobile.
- [ ] `prefers-reduced-motion` is respected.
- [ ] Semantic HTML and heading hierarchy are correct.
- [ ] SEO metadata is complete.
- [ ] No unnecessary dependencies were introduced.
- [ ] No existing functionality was broken.

**Overall target:** A portfolio that feels **minimal, premium, modern, and technically polished**—closer to Brittany Chiang's restraint, with a small amount of Mauricio Juba's motion and interactivity.
