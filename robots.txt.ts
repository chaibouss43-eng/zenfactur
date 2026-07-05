export async function GET() {
  return new Response(`User-agent: *\nAllow: /\nSitemap: https://zenfactur.fr/sitemap-index.xml\n`);
}
