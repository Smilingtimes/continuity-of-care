import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://continuity-of-care.example${path}`, {
      headers: { accept: "text/html", "x-forwarded-host": "continuity-of-care.example", "x-forwarded-proto": "https" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the finished landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Continuity of Care — A Human-First AI Workspace<\/title>/);
  assert.match(html, /Your context should follow you/);
  assert.match(html, /Use this template/);
  assert.match(html, /ME\.md/);
  assert.match(html, /NOW\.md/);
  assert.match(html, /PROJECT\.md/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /SoftwareSourceCode/);
  assert.match(html, /WebSite/);
  assert.match(html, /name="robots" content="index, follow"/);
  assert.match(html, /https:\/\/continuity-of-care\.example\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("includes accessible structure and an honest product boundary", async () => {
  const html = await (await render()).text();
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(html, /<nav aria-label="Primary navigation">/);
  assert.match(html, /<main>/);
  assert.match(html, /<h1>/);
  assert.match(html, /not clinical software, case-management software, or an autonomous agent framework/i);
  assert.match(css, /prefers-reduced-motion/);
});

test("publishes absolute search discovery URLs", async () => {
  const [sitemapSource, robotsSource] = await Promise.all([
    readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/robots.ts", import.meta.url), "utf8"),
  ]);
  assert.match(sitemapSource, /https:\/\/continuity-of-care\.smilingtimes\.chatgpt\.site\//);
  assert.match(robotsSource, /https:\/\/continuity-of-care\.smilingtimes\.chatgpt\.site\/sitemap\.xml/);
});
