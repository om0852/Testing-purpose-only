import { dbConnect } from "@/lib/dbConnect";
import Component from "@/models/Component";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const { type, id } = await params;
  await dbConnect();
  const comp = await Component.findOne({ type, id: Number(id) });
  if (!comp) return NextResponse.json({ message: "Not found" }, { status: 404 });
  return NextResponse.json({ code: comp.code });
}
