import { NextResponse } from "next/server";

/**
 * Proxy route for TJ token verification
 * Forwards requests to backend NestJS API
 */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.json({ error: "Missing token" }, { status: 400 });
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.discart.me";
    const backendUrl = `${apiUrl}/api/tj/verify?token=${encodeURIComponent(token)}`;

    console.log("[TJ Verify Proxy] Calling backend:", backendUrl.replace(token, "***"));

    const res = await fetch(backendUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      console.error("[TJ Verify Proxy] Backend error:", data);
      return NextResponse.json(
        { error: data?.error || "Failed to verify token" },
        { status: res.status }
      );
    }

    console.log("[TJ Verify Proxy] Success:", { discountId: data?.discountId });

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error("[TJ Verify Proxy] Error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to verify token" },
      { status: 500 }
    );
  }
}
