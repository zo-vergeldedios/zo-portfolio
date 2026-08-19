import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently in view so navigation can highlight it.
 *
 * `ids` must be in document order.
 *
 * This used to compare IntersectionObserver entries by `intersectionRatio`
 * inside a band shrunk to the middle 40% of the viewport, which could never
 * reliably elect the last section: the ratio is a fraction of each section's
 * own height, so it is biased toward short sections, and entries only update
 * when they cross a threshold, so the stored ratios were frequently stale.
 * At the bottom of the page the band also sits well above the final section,
 * so "contact" lost to "experience" and never highlighted.
 *
 * Marker-line scroll tracking is deterministic instead: whichever section has
 * most recently crossed the line wins, with the page bottom special-cased.
 */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const resolve = () => {
      const scrollY = window.scrollY;
      const viewportH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;

      // The final section can be shorter than the distance between the marker
      // line and the page bottom, in which case it could never cross the line
      // no matter how far you scroll. Once we're at the end, it wins outright.
      const scrollable = docH > viewportH + 4;
      if (scrollable && scrollY + viewportH >= docH - 2) {
        return ids[ids.length - 1];
      }

      const marker = scrollY + viewportH * 0.4;

      let current = ids[0];
      for (const id of ids) {
        const node = document.getElementById(id);
        if (!node) continue;
        if (node.getBoundingClientRect().top + scrollY <= marker) current = id;
      }
      return current;
    };

    // One measurement per frame — the reads below force layout, so an
    // unthrottled scroll handler would thrash.
    let queued = false;
    const onScroll = () => {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(() => {
        queued = false;
        setActive(resolve());
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return active;
}
