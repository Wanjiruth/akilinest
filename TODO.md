# AkiliNest SEO/Performance Upgrade — TODO

## Step 1: SEO correctness (titles/meta/H1/headings)
- ✅ Audit each route page component for exactly one H1, correct heading hierarchy, and keyword-rich unique title + description.
- ✅ Update `PageMeta` props where needed.


## Step 2: Blog content (4 requested posts)
- Inspect `src/content/blog` structure and post schema.
- Add the 4 exact posts with optimized keywords and internal links + CTA.
- Ensure `/blog` and `/blog/:slug` render them correctly.

## Step 3: Trust + content pieces
- Verify testimonial section/page implementation.
- Ensure FAQ covers safety, screen time, AI ethics, and session structure.
- Update programmes/services clarity (taster sessions, holiday camps, age groups, pricing).

## Step 4: Accessibility fixes
- Check for viewport zoom lock (remove `user-scalable=no` if present).
- Ensure labels exist for all form inputs.
- Review video embeds for captions track; add where possible.
- Fix obvious contrast issues.

## Step 5: Performance & Speed improvements (Lighthouse target ≥90)
- Add explicit `width`/`height` to all `<img>`.
- Ensure lazy loading for below-the-fold images/iframes.
- Reduce video preload/autoplay where non-critical.
- Optimize CSS loading strategy as supported by Vite/build.

## Step 6: Technical/security headers alignment
- Tighten CSP to match actual usage.
- Ensure `Strict-Transport-Security` and `Cross-Origin-Opener-Policy` are correct.

## Step 7: Trust/local SEO
- Verify contact page map embed (if location exists) and add location keywords.
- Ensure sticky WhatsApp + clickable phone on every page.
- Add prominent Book Now CTA above the fold.

## Step 8: Housekeeping
- Footer year already set; confirm.
- Validate broken internal/external links.
- Ensure Privacy + Terms exist and linked.
- Ensure custom 404 page includes search and key links.

## Step 9: Verify
- Re-run build and Lighthouse (mobile/slow 4G) and record scores.
- Update `llms.txt` at deploy root (already present; confirm content + routing).
- Confirm `robots.txt` does not block and sitemap is correct.

