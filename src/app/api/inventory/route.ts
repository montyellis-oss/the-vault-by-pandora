import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
function getInventoryPath() { return join(process.cwd(), "src", "data", "inventory.json"); }
function readInventory() { return JSON.parse(readFileSync(getInventoryPath(), "utf-8")); }
export async function GET() { try { return NextResponse.json(readInventory()); } catch { return NextResponse.json({ error: "Failed" }, { status: 500 }); } }
export async function PUT(request: NextRequest) { try { const { products } = await request.json(); const current = readInventory(); current.products = products; writeFileSync(getInventoryPath(), JSON.stringify(current, null, 2), "utf-8"); return NextResponse.json({ success: true }); } catch { return NextResponse.json({ error: "Failed" }, { status: 500 }); } }