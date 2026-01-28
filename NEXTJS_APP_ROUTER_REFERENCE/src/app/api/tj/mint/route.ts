import { NextResponse } from "next/server";

/**
 * Proxy route for TJ token minting
 * Forwards requests to backend NestJS API
 */
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
    
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.discart.me";
    const backendUrl = `${apiUrl}/api/tj/mint`;

    console.log("[TJ Mint Proxy] Calling backend:", backendUrl);

    const res = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      console.error("[TJ Mint Proxy] Backend error:", data);
      return NextResponse.json(
        { error: data?.error || "Failed to mint token" },
        {
          status: res.status,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        }
      );
    }

    console.log("[TJ Mint Proxy] Success:", { token: data?.token?.substring(0, 20) + "..." });

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error: any) {
    console.error("[TJ Mint Proxy] Error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to mint token" },
      { status: 500 }
    );
  }
}
