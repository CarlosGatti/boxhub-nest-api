import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import { headers } from "next/headers";

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function isValidDiscountId(id: string) {
  return /^[0-9]{6,20}$/.test(id);
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const name = String(body?.name ?? "").trim();
    const discountId = String(body?.discountId ?? "").trim();

    if (!isValidDiscountId(discountId)) {
      return NextResponse.json({ error: "Invalid discountId format." }, { status: 400 });
    }

    const secret = new TextEncoder().encode(requireEnv("TJ_PASS_SECRET"));

    const token = await new SignJWT({ name: name || undefined, discountId })
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("365d")
      .sign(secret);

    // Build baseUrl safely (works behind proxies)
    const h = headers();
    const host = h.get("host") || "localhost:3001";
    const proto = h.get("x-forwarded-proto") || "http";

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `${proto}://${host}`;
    const url = `${baseUrl}/tj/${encodeURIComponent(token)}`;

    return NextResponse.json({ token, url }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
  }
}
