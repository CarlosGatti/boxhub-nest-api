import type { NextApiRequest, NextApiResponse } from "next";
import { jwtVerify } from "jose";

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const token = String(req.query.token ?? "");
    if (!token) {
      return res.status(400).json({ error: "Missing token" });
    }

    const secret = new TextEncoder().encode(requireEnv("TJ_PASS_SECRET"));
    const { payload } = await jwtVerify(token, secret, { algorithms: ["HS256"] });

    const name = typeof payload?.name === "string" ? payload.name : "";
    const discountId = typeof payload?.discountId === "string" ? payload.discountId : "";

    if (!discountId) {
      return res.status(400).json({ error: "Invalid payload" });
    }

    return res.status(200).json({ name, discountId });
  } catch {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}
