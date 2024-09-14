// middleware.js
import { NextRequest, NextResponse } from "next/server";
export function middleware(req: NextRequest) {
  // Get the user's IP address
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "Unknown IP";
  // Get the user's country from Vercel's geo data
  const country = req.geo?.country || "Unknown Country";
  console.log(`Visitor IP: ${ip}, Country: ${country}`);
  // Create the response object
  const response = NextResponse.next();
  // Add custom headers
  response.headers.set("X-Visitor-IP", ip);
  response.headers.set("X-Visitor", JSON.stringify(req.geo));
  response.headers.set("X-Visitor-Country", country);
  return response;
}
// Apply middleware to all routes
export const config = {
  matcher: "/:path*",
};
