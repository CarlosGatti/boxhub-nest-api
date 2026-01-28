import type { NextApiRequest, NextApiResponse } from "next";
import * as jwt from "jsonwebtoken";

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function isValidDiscountId(id: string) {
  return /^[0-9]{6,20}$/.test(id);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  // Only allow POST
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const name = String(req.body?.name ?? "").trim();
    const discountId = String(req.body?.discountId ?? "").trim();

    // Validate discountId
    if (!discountId || discountId.length === 0) {
      return res.status(400).json({ error: "discountId is required" });
    }

    if (!isValidDiscountId(discountId)) {
      return res
        .status(400)
        .json({ error: "Invalid discountId format. Must be 6-20 digits." });
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

    const proto = (req.headers["x-forwarded-proto"] as string) || "https";
    const host = req.headers.host;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `${proto}://${host}`;

    const url = `${baseUrl}/tj/${encodeURIComponent(token)}`;

    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    return res.status(200).json({ token, url });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || "Server error" });
  }
}
