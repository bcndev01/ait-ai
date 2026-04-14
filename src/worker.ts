/**
 * aceitai.app Cloudflare Worker
 *
 * Runs in front of the static Vite build. Handles:
 *   /.well-known/apple-app-site-association  → AASA JSON (Universal Links)
 *   /r/:code                                  → referral landing
 *   /c/:token  /m/:token  /s/:token  /g/:code → share landings
 *   /daily                                    → daily challenge landing
 *   everything else                           → static site assets
 */

// ⚠️ Apple Developer → Membership → Team ID (10 chars)
const TEAM_ID = "BYB658Q2R2";
const BUNDLE_ID = "ozapplab.com.AceItAISolver";
const APP_STORE_URL = "https://apps.apple.com/app/id0000000000";
const APPLE_APP_ID = "0000000000";

const AASA = {
  applinks: {
    details: [
      {
        appIDs: [`${TEAM_ID}.${BUNDLE_ID}`],
        components: [
          { "/": "/r/*",   comment: "referral" },
          { "/": "/c/*",   comment: "challenge shared card" },
          { "/": "/m/*",   comment: "mindmap public share" },
          { "/": "/s/*",   comment: "solution public share" },
          { "/": "/g/*",   comment: "class group invite" },
          { "/": "/daily", comment: "daily challenge" },
        ],
      },
    ],
  },
};

type Env = {
  ASSETS: Fetcher;
};

const COPY: Record<string, { title: string; subtitle: string }> = {
  r:     { title: "Seni davet ettim",             subtitle: "14 gün Pro hediyen hazır" },
  c:     { title: "Sen çözebilir misin?",         subtitle: "AceIt AI'da bu soruyu çöz" },
  m:     { title: "Zihin haritası seni bekliyor", subtitle: "Konuyu 1 bakışta anla" },
  s:     { title: "Çözüme göz at",                subtitle: "AceIt AI ile adım adım çözüm" },
  g:     { title: "Sınıfına katıl",               subtitle: "Grup liderlik tablosunda yerini al" },
  daily: { title: "Bugünün sorusu",               subtitle: "AceIt AI — günün challenge'ı" },
};

const escapeHtml = (s: string) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );

function landingHTML(opts: { title: string; subtitle: string; token: string | null }) {
  const tokenBlock = opts.token
    ? `<div class="code">${escapeHtml(opts.token)}</div>`
    : "";
  const tokenJS = opts.token
    ? `try{navigator.clipboard&&navigator.clipboard.writeText(${JSON.stringify(opts.token)});}catch(e){}`
    : "";

  return `<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>${escapeHtml(opts.title)} — AceIt AI</title>
<meta name="apple-itunes-app" content="app-id=${APPLE_APP_ID}, app-argument=aceitai://open" />
<meta property="og:title" content="${escapeHtml(opts.title)} — AceIt AI" />
<meta property="og:description" content="${escapeHtml(opts.subtitle)}" />
<style>
:root{color-scheme:dark}
body{margin:0;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px;text-align:center;background:#0a0e14;color:#fff;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text",sans-serif}
.logo{font-size:56px;margin-bottom:16px}
h1{font-size:28px;margin:0 0 8px}
p{font-size:16px;opacity:.7;max-width:340px}
.code{margin:20px 0;padding:12px 24px;border-radius:12px;background:rgba(255,255,255,.06);letter-spacing:2px;font-weight:600;font-size:18px}
.cta{margin-top:24px;display:inline-block;padding:14px 28px;border-radius:999px;background:linear-gradient(90deg,#7b61ff,#00c2ff);color:#fff;text-decoration:none;font-weight:700}
</style>
</head>
<body>
<div class="logo">🎯</div>
<h1>${escapeHtml(opts.title)}</h1>
<p>${escapeHtml(opts.subtitle)}</p>
${tokenBlock}
<a class="cta" href="${APP_STORE_URL}">App Store'dan İndir</a>
<script>${tokenJS}</script>
</body>
</html>`;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === "/.well-known/apple-app-site-association") {
      return new Response(JSON.stringify(AASA), {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=3600",
        },
      });
    }

    const matchShare = path.match(/^\/(r|c|m|s|g)\/([^/]+)\/?$/);
    if (matchShare) {
      const [, type, token] = matchShare;
      const copy = COPY[type];
      return new Response(landingHTML({ ...copy, token }), {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    if (path === "/daily" || path === "/daily/") {
      return new Response(landingHTML({ ...COPY.daily, token: null }), {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    // Fall through to the static Vite build served by the assets binding.
    return env.ASSETS.fetch(request);
  },
};
