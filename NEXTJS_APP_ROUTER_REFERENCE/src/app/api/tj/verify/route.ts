import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");
    if (!token) return NextResponse.json({ error: "Missing token" }, { status: 400 });

    const secret = new TextEncoder().encode(requireEnv("TJ_PASS_SECRET"));
    const { payload } = await jwtVerify(token, secret, { algorithms: ["HS256"] });

    const name = typeof payload?.name === "string" ? payload.name : "";
    const discountId = typeof payload?.discountId === "string" ? payload.discountId : "";
    if (!discountId) return NextResponse.json({ error: "Invalid payload" }, { status: 400 });

    return NextResponse.json({ name, discountId }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
  }
}
