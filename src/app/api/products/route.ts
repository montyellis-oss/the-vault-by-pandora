import { NextResponse } from "next/server";
// Static version for GitHub Pages
export const dynamic = 'force-static';
export async function GET() {
  return NextResponse.json([]);
}