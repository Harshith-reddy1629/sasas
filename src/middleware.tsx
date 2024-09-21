// middleware.js
import { NextResponse } from "next/server";
export function middleware() {
  // Get the user's IP address
  // Get the user's country from Vercel's geo data
  // Create the response object
  const response = NextResponse.next();
  // Add custom headers
  return response;
}
// Apply middleware to all routes
export const config = {
  matcher: "/:path*",
};
