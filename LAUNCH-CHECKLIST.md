# Launch and Discoverability Checklist

> **Status date:** 2026-07-22 · **Owner:** Nelson Santos

This checklist separates verified launch work from actions that require the
owner's identity, accounts, consent, or a stable release decision.

## Completed and verified

- [x] Public GitHub repository with an MIT license and accurate description.
- [x] GitHub Topics for social work, responsible AI, AI literacy, context
  management, and related subjects.
- [x] Repository enabled as a GitHub template.
- [x] Semantic README with an honest project boundary.
- [x] Root `llms.txt` and `CITATION.cff` prepared.
- [x] Public project website with HTTPS and no analytics, cookies, accounts, or
  personal-data collection.
- [x] Unique page title, description, canonical URL, indexing directives,
  Open Graph/X metadata, and a project-specific social card.
- [x] Absolute XML sitemap, `robots.txt`, website `llms.txt`, and Schema.org
  structured metadata.
- [x] Responsive layout, semantic headings, keyboard-visible focus, readable
  contrast, and reduced-motion support.

## Owner actions after merge

### 1. Publish the first stable release

- [ ] Merge the discoverability and website pull request.
- [ ] Create a `v0.1.0` GitHub release with a short plain-language summary.
- [ ] Add the release version and date to `CITATION.cff`.

### 2. Register with search engines

These services require the owner's account and site-verification consent.

- [ ] Add the site as a URL-prefix property in Google Search Console.
- [ ] Provide the generated verification token for insertion in the site's
  metadata, then redeploy.
- [ ] Submit `https://continuity-of-care.smilingtimes.chatgpt.site/sitemap.xml`.
- [ ] Add the site to Bing Webmaster Tools, or import it from Search Console.
- [ ] Check indexing after several days; do not interpret immediate absence as
  a technical failure.

### 3. Create a durable scholarly record

- [ ] Connect the GitHub repository to the owner's Zenodo account.
- [ ] Archive the `v0.1.0` release and obtain a DOI.
- [ ] Add the DOI to `CITATION.cff`, the README, and the project website.
- [ ] Add an ORCID only if the owner already has or intentionally creates one.

### 4. Build relevant external references

- [ ] Share one useful demonstration or article rather than a bare repository
  link.
- [ ] Seek inclusion in responsible-AI, AI-literacy, tech-for-good, nonprofit
  technology, and social-work education resource collections.
- [ ] Avoid describing the project as case-management software, clinical
  software, or an autonomous agent.
- [ ] Add consent-based examples or case studies after people use the library.

## Ongoing checks

- [ ] Review README, sitemap dates, citation metadata, and examples with each
  release.
- [ ] Check public links, mobile readability, and keyboard navigation.
- [ ] Review GitHub traffic and search-console queries without adding invasive
  visitor tracking.
- [ ] Reassess privacy, accessibility, and claims before every public release.
