import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const PRODUCTS_PATH = path.join(process.cwd(), "src/data/products.json");

function isAuthed(req: NextRequest): boolean {
  const cookie = req.cookies.get("admin_session");
  return cookie?.value === (process.env.ADMIN_SESSION_SECRET || "dev-secret-key");
}

export async function GET(req: NextRequest) {
  if (!isAuthed(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const data = await fs.readFile(PRODUCTS_PATH, "utf-8");
    return NextResponse.json(JSON.parse(data));
  } catch {
    return NextResponse.json({ error: "Failed to read products" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  if (!isAuthed(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = await req.json();
    if (!Array.isArray(body)) {
      return NextResponse.json({ error: "Products must be an array" }, { status: 400 });
    }
    await fs.writeFile(PRODUCTS_PATH, JSON.stringify(body, null, 2), "utf-8");
    return NextResponse.json({ success: true, count: body.length });
  } catch {
    return NextResponse.json({ error: "Failed to save products" }, { status: 500 });
  }
}