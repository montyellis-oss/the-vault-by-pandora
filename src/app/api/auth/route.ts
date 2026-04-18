import { NextResponse } from "next/server";
// Static version for GitHub Pages
export const dynamic = 'force-static';
export async function POST() {
  return NextResponse.json({ error: "Not supported in static export" }, { status: 405 });
}