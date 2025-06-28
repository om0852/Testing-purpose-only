import fs from "fs/promises";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { getMongo } from "@/app/libs/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const { name } = (await req.json()) as { name: string };


  try {
    // 1  Fetch from MongoDB
    const { db } = await getMongo();
    const doc = await db
      .collection("component")
      .findOne<{ componentCode: string; exampleCode: string }>({ name });

    if (!doc)
      return NextResponse.json({ error: "component not found" }, { status: 404 });

    // 2  Write files
    const folder = path.join(process.cwd(), "app/components/accordion");
    await fs.mkdir(folder, { recursive: true });

    await fs.writeFile(path.join(folder, "component.tsx"), doc.componentCode);
    await fs.writeFile(path.join(folder, "example.tsx"), doc.exampleCode);

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error:err }, { status: 500 });
  }
}



export async function GET(){
    const { db } = await getMongo();
    // db.collection("component").insertOne({
    //     name: "accordion",
    //     componentCode: `export default function Accordion() { return <div>Accordion!</div>; }`,
    //     exampleCode: `import Accordion from "./component"; export default () => <Accordion />;`,
    //   });
    db.collection("component").insertOne({
        name: "button",
        variant: "1",
        tags: ["button", "ui", "gradient"],
      
        // ---------------- component.tsx ----------------
        componentCode: `
      import React from "react";
      
      interface GradientButtonProps {
        label?: string;
        onClick?: () => void;
      }
      
      export default function GradientButton({
        label = "Click",
        onClick,
      }: GradientButtonProps) {
        return (
          <button
            onClick={onClick}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition"
          >
            {label}
          </button>
        );
      }
        `.trim(),
      
        // ---------------- example.tsx ----------------
        exampleCode: `
      import GradientButton from "./component";
      
      export default function ButtonExample() {
        return (
          <div className="flex items-center justify-center h-screen">
            <GradientButton
              label="Press Me"
              onClick={() => alert("Button clicked!")}
            />
          </div>
        );
      }
        `.trim(),
      });
      
      return NextResponse.json("done")
}