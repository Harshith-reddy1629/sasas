import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  const ip = req.headers.get("x-visitor-ip") || "Unknown IP";
  const country = req.headers.get("x-visitor-country") || "Unknown Country";
  const c = req.headers.get("X-Visitor") || "";
  return NextResponse.json({ ip, country, c });
}
