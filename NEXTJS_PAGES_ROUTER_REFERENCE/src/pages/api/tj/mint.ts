import type { NextApiRequest, NextApiResponse } from "next";
import { SignJWT } from "jose";

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function isValidDiscountId(id: string) {
  return /^[0-9]{6,20}$/.test(id);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const name = String(req.body?.name ?? "").trim();
    const discountId = String(req.body?.discountId ?? "").trim();

    if (!isValidDiscountId(discountId)) {
      return res.status(400).json({ error: "Invalid discountId format." });
    }

    const secret = new TextEncoder().encode(requireEnv("TJ_PASS_SECRET"));

    const token = await new SignJWT({ name: name || undefined, discountId })
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("365d")
      .sign(secret);

    const proto = (req.headers["x-forwarded-proto"] as string) || "http";
    const host = req.headers.host;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `${proto}://${host}`;

    const url = `${baseUrl}/tj/${encodeURIComponent(token)}`;

    return res.status(200).json({ token, url });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || "Server error" });
  }
}
