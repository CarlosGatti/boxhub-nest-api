# TJ Discount Barcode - Frontend Implementation Guide

## 📋 Overview

Create a PWA page that displays a Code128 barcode + discount ID for scanning at Trader Joe's registers.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install jose jsbarcode
```

### 2. Environment Variables

Add to `.env.local`:

```bash
NEXT_PUBLIC_API_URL="https://api.discart.me"  # or your backend URL
NEXT_PUBLIC_BASE_URL="https://carlosgatti.com"  # your frontend URL
```

### 3. Create API Route: `/app/api/tj/verify/route.ts`

```typescript
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get('token');
  
  if (!token) {
    return NextResponse.json({ error: 'Missing token' }, { status: 400 });
  }

  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.discart.me';
    const res = await fetch(`${apiUrl}/api/tj/verify?token=${encodeURIComponent(token)}`);
    
    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      return NextResponse.json(
        { error: error?.error || 'Failed to verify token' },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to verify token' },
      { status: 500 }
    );
  }
}
```

### 4. Create API Route: `/app/api/tj/mint/route.ts`

```typescript
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, discountId } = body;

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.discart.me';
    const res = await fetch(`${apiUrl}/api/tj/mint`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, discountId }),
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      return NextResponse.json(
        { error: error?.error || 'Failed to mint token' },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to mint token' },
      { status: 500 }
    );
  }
}
```

### 5. Create Page: `/app/tj/[token]/page.tsx`

```typescript
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import JsBarcode from "jsbarcode";

type Payload = { name: string; discountId: string };

export default function TJTokenPage({ params }: { params: { token: string } }) {
  const token = decodeURIComponent(params.token);
  const [data, setData] = useState<Payload | null>(null);
  const [err, setErr] = useState<string>("");
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const run = async () => {
      try {
        setErr("");
        const res = await fetch(`/api/tj/verify?token=${encodeURIComponent(token)}`);
        if (!res.ok) {
          const j = await res.json().catch(() => ({}));
          throw new Error(j?.error || "Failed to verify token");
        }
        const j = (await res.json()) as Payload;
        setData(j);
      } catch (e: any) {
        setErr(e?.message || "Error");
      }
    };
    run();
  }, [token]);

  useEffect(() => {
    if (!data?.discountId) return;
    if (!svgRef.current) return;

    // Render Code128 barcode into SVG
    JsBarcode(svgRef.current, data.discountId, {
      format: "CODE128",
      displayValue: false,
      margin: 0,
      height: 110,
    });
  }, [data?.discountId]);

  const title = useMemo(() => {
    if (!data) return "Crew Discount";
    return data.name ? `Crew Discount — ${data.name}` : "Crew Discount";
  }, [data]);

  const copy = async () => {
    if (!data?.discountId) return;
    try {
      await navigator.clipboard.writeText(data.discountId);
    } catch {}
  };

  const goFullscreen = async () => {
    const el = document.documentElement as any;
    if (el.requestFullscreen) {
      try { await el.requestFullscreen(); } catch {}
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-black text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-5 shadow">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="text-sm text-white/70 mt-1">
              Show this barcode to scan. If scan fails, read the ID below.
            </p>
          </div>
          <button
            onClick={goFullscreen}
            className="text-sm px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15"
          >
            Fullscreen
          </button>
        </div>

        {err ? (
          <div className="mt-6 rounded-xl bg-red-500/15 border border-red-500/30 p-4">
            <p className="text-sm">{err}</p>
          </div>
        ) : !data ? (
          <div className="mt-6 text-sm text-white/70">Loading…</div>
        ) : (
          <>
            <div className="mt-6 rounded-2xl bg-white p-4">
              <svg ref={svgRef} className="w-full h-auto" />
            </div>

            <div className="mt-5">
              <div className="text-white/70 text-xs">Discount ID</div>
              <div className="mt-1 text-3xl font-mono tracking-wider">
                {data.discountId}
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={copy}
                  className="flex-1 px-4 py-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 hover:bg-emerald-500/25"
                >
                  Copy ID
                </button>
                <a
                  className="flex-1 text-center px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15"
                  href="/"
                >
                  Home
                </a>
              </div>

              <div className="mt-4 text-xs text-white/60">
                Tip: increase screen brightness before scanning.
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
```

### 6. Optional: Admin Page `/app/tj-admin/page.tsx`

```typescript
"use client";

import { useState } from "react";

export default function TJAdminPage() {
  const [name, setName] = useState("");
  const [discountId, setDiscountId] = useState("");
  const [result, setResult] = useState<{ url: string; token: string } | null>(null);
  const [err, setErr] = useState("");

  const mint = async () => {
    setErr("");
    setResult(null);
    try {
      const res = await fetch("/api/tj/mint", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, discountId }),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(j?.error || "Failed to mint");
      setResult(j);
    } catch (e: any) {
      setErr(e?.message || "Error");
    }
  };

  const copy = async () => {
    if (!result?.url) return;
    try { await navigator.clipboard.writeText(result.url); } catch {}
  };

  return (
    <main className="min-h-screen p-6 flex items-center justify-center bg-neutral-950 text-white">
      <div className="w-full max-w-lg rounded-2xl bg-white/5 border border-white/10 p-6">
        <h1 className="text-xl font-semibold">TJ Pass Admin</h1>
        <p className="text-sm text-white/70 mt-1">
          Create a tokenized link for a friend (use only their own discount ID).
        </p>

        <div className="mt-6 grid gap-3">
          <input
            className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none"
            placeholder="Name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none font-mono"
            placeholder="Discount ID (digits)"
            value={discountId}
            onChange={(e) => setDiscountId(e.target.value)}
          />

          <button
            onClick={mint}
            className="mt-2 px-4 py-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 hover:bg-emerald-500/25"
          >
            Generate Link
          </button>

          {err ? (
            <div className="rounded-xl bg-red-500/15 border border-red-500/30 p-3 text-sm">
              {err}
            </div>
          ) : null}

          {result ? (
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <div className="text-xs text-white/70">Shareable URL</div>
              <div className="mt-2 break-all font-mono text-sm">{result.url}</div>
              <button
                onClick={copy}
                className="mt-3 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-sm"
              >
                Copy URL
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
```

### 7. PWA Support (Optional)

Create `public/manifest.webmanifest`:

```json
{
  "name": "Discount Barcode",
  "short_name": "Barcode",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#000000",
  "theme_color": "#000000",
  "icons": [
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

In `app/layout.tsx`, add:

```typescript
export const metadata = {
  manifest: "/manifest.webmanifest",
  themeColor: "#000000",
};
```

Add Apple meta tags:

```html
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
```

## ✅ Checklist

- [ ] Install `jose` and `jsbarcode`
- [ ] Add environment variables
- [ ] Create `/api/tj/verify` route
- [ ] Create `/api/tj/mint` route
- [ ] Create `/tj/[token]` page
- [ ] (Optional) Create `/tj-admin` page
- [ ] (Optional) Add PWA manifest and icons
- [ ] Test token generation and verification
- [ ] Test barcode rendering
- [ ] Test on mobile device

## 🔗 Backend Endpoints

- `POST /api/tj/mint` - Generate token
- `GET /api/tj/verify?token=...` - Verify token

See `TJ_BARCODE_SETUP.md` for backend details.

---

**Ready to implement!** Copy the code above and customize as needed.
