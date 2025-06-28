


import { Schema, model, models, Document } from "mongoose";

/** TypeScript helper so you get IntelliSense everywhere you use the model */
export interface ComponentDoc extends Document {
  /** e.g. "accordion" */
  name: string;
  /** optional if you start storing multiple versions like "accordion‑1" / "accordion‑2" */
  variant?: string;

  /** raw React / TSX source uploaded from GitHub or the UI */
  componentCode: string;
  /** demo page that imports the component and shows how to use it */
  exampleCode: string;

  /** any extra tags for search / filtering */
  tags?: string[];

  /** createdAt / updatedAt are injected automatically by { timestamps: true } */
  createdAt: Date;
  updatedAt: Date;
}

const ComponentSchema = new Schema<ComponentDoc>(
  {
    name:      { type: String, required: true, index: true },
    variant:   { type: String, default: "1" },

    componentCode: { type: String, required: true },
    exampleCode:   { type: String, required: true },

    tags: [{ type: String }],
  },
  {
    timestamps: true,      // adds createdAt / updatedAt
    versionKey: false,     // no __v field
    strict: "throw",       // warn if someone saves unknown keys
  },
);

/** Prevent model recompilation in Next.js hot‑reload */
export default models.Component || model<ComponentDoc>("Component", ComponentSchema);



export async function POST(){


}