import type { NextApiRequest, NextApiResponse } from "next";
import * as jwt from "jsonwebtoken";

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

interface TokenPayload {
  name?: string;
  discountId: string;
  iat?: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      res.setHeader("Allow", "GET");
      return res.status(405).json({ error: "Method not allowed" });
    }

    const token = String(req.query.token ?? "");
    if (!token) {
      return res.status(400).json({ error: "Missing token" });
    }

    const secret = requireEnv("TJ_PASS_SECRET");
    const payload = jwt.verify(token, secret, {
      algorithms: ["HS256"],
    }) as TokenPayload;

    const name = typeof payload?.name === "string" ? payload.name : "";
    const discountId =
      typeof payload?.discountId === "string" ? payload.discountId : "";

    if (!discountId) {
      return res.status(400).json({ error: "Invalid payload" });
    }

    return res.status(200).json({ name, discountId });
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError || error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}
