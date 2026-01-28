import { NextResponse } from "next/server";
import * as jwt from "jsonwebtoken";
import { headers } from "next/headers";

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function isValidDiscountId(id: string) {
  return /^[0-9]{6,20}$/.test(id);
}

// Handle CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const name = String(body?.name ?? "").trim();
    const discountId = String(body?.discountId ?? "").trim();

    // Validate discountId
    if (!discountId || discountId.length === 0) {
      return NextResponse.json(
        { error: "discountId is required" },
        { status: 400 }
      );
    }

    if (!isValidDiscountId(discountId)) {
      return NextResponse.json(
        { error: "Invalid discountId format. Must be 6-20 digits." },
        { status: 400 }
      );
    }

    const secret = requireEnv("TJ_PASS_SECRET");

    const payload: { name?: string; discountId: string } = {
      discountId,
    };

    if (name) {
      payload.name = name;
    }

    const token = jwt.sign(payload, secret, {
      algorithm: "HS256",
      expiresIn: "365d",
    });

    // Build baseUrl safely (works behind proxies/Vercel)
    const h = headers();
    const host = h.get("host") || "localhost:3001";
    const proto = h.get("x-forwarded-proto") || "https";

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `${proto}://${host}`;
    const url = `${baseUrl}/tj/${encodeURIComponent(token)}`;

    return NextResponse.json(
      { token, url },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Server error" },
      { status: 500 }
    );
  }
}
