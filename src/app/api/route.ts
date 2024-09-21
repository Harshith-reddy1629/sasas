import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
  // const ip = req.headers.get("x-visitor-ip") || "Unknown IP";
  // const country = req.headers.get("x-visitor-country") || "Unknown Country";
  // const c = request.headers.get("X-Visitor") || "";
  const ip =
    request.headers.get("x-real-ip") ?? request.headers.get("x-forwarded-for");
  const city = request.headers.get("x-vercel-ip-city");
  const country = request.headers.get("x-vercel-ip-country");
  const region = request.headers.get("x-vercel-ip-country-region");
  const latitude = request.headers.get("x-vercel-ip-latitude");
  const longitude = request.headers.get("x-vercel-ip-longitude");
  const timezone = request.headers.get("x-vercel-ip-timezone");
  return NextResponse.json({
    ip,
    country,
    city,
    region,
    latitude,
    longitude,
    timezone,
    // c,
  });
}
