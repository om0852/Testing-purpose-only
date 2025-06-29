import "dotenv/config";
import  dbConnect  from "../lib/dbConnect";
import Component from "../models/Component.js";

await dbConnect();
await Component.deleteMany();

await Component.create([
  {
    type: "accordion",
    id: 11,
    code: `
export default function Accordion() {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{border:"1px solid #ccc",padding:8}}>
      <button onClick={()=>setOpen(!open)}>
        Accordion 11 (click)
      </button>
      {open && <div style={{marginTop:8}}>Hello from Accordion 11!</div>}
    </div>
  );
}
`,
  },
  {
    type: "accordion-example",
    id: 11,
    code: `
import Accordion from "./Accordion";

export default function Example() {
  return (
    <>
      <h3>Preview of Accordion 11</h3>
      <Accordion />
    </>
  );
}
`,
  },
]);

console.log("Seeded 🎉");
process.exit(0);
