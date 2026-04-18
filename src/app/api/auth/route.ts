import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const ADMIN_PIN = process.env.ADMIN_PIN || "314159";
const SESSION_SECRET =
  process.env.ADMIN_SESSION_SECRET ||
  crypto.randomBytes(32).toString("hex");

if (!process.env.ADMIN_SESSION_SECRET) {
  process.env.ADMIN_SESSION_SECRET = SESSION_SECRET;
}

export async function POST(req: NextRequest) {
  try {
    const { pin } = await req.json();
    if (!pin || typeof pin !== "string") {
      return NextResponse.json({ error: "PIN is required" }, { status: 400 });
    }
    const isValid = crypto.timingSafeEqual(
      Buffer.from(pin.padEnd(32, "\0")),
      Buffer.from(ADMIN_PIN.padEnd(32, "\0"))
    );
    if (!isValid) {
      return NextResponse.json({ error: "Invalid PIN" }, { status: 401 });
    }
    const response = NextResponse.json({ success: true });
    response.cookies.set("admin_session", SESSION_SECRET, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 4,
    });
    return response;
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set("admin_session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });
  return response;
}