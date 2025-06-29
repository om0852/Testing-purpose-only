import { dbConnect } from "@/lib/dbConnect";
import Component from "@/models/Component";

export async function POST() {
  await dbConnect();

  await Component.deleteMany({}); // Optional: wipe old data

  await Component.insertMany([
    {
        "type": "accordion",
        "id": 11,
        "code": "function Accordion() {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <div className=\"border-2 border-indigo-500 rounded-lg p-4 max-w-md mx-auto bg-white/70 backdrop-blur-sm shadow-lg\">\n      <button\n        onClick={() => setOpen(!open)}\n        className=\"w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-md font-semibold shadow-md hover:from-indigo-600 hover:to-purple-600 active:scale-95 transition-all duration-300\"\n      >\n        Accordion 11 (click)\n      </button>\n      {open && (\n        <div className=\"mt-4 text-pink-600 animate-pulse font-medium\">\n          Hello! 🎉 This accordion is now colourful.\n        </div>\n      )}\n    </div>\n  );\n}\n\nrender(<Accordion />);"
      }
,      
  {
    "type": "accordion",
    "id": 12,
    "code": "function Accordion() {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <motion.div\n      initial={{ opacity: 0, y: -20 }}\n      animate={{ opacity: 1, y: 0 }}\n      transition={{ duration: 0.4 }}\n      className=\"border-2 border-indigo-500 rounded-lg p-4 max-w-md mx-auto bg-white/70 backdrop-blur-sm shadow-lg\"\n    >\n      <motion.button\n        whileTap={{ scale: 0.95 }}\n        whileHover={{ scale: 1.03 }}\n        onClick={() => setOpen(!open)}\n        className=\"w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-md font-semibold shadow-md hover:from-indigo-600 hover:to-purple-600 transition-all duration-300\"\n      >\n        Accordion 12 (framer-motion)\n      </motion.button>\n      {open && (\n        <motion.div\n          initial={{ height: 0, opacity: 0 }}\n          animate={{ height: 'auto', opacity: 1 }}\n          exit={{ height: 0, opacity: 0 }}\n          className=\"mt-4 text-pink-600 font-medium\"\n        >\n          This accordion is animated with framer-motion ✨\n        </motion.div>\n      )}\n    </motion.div>\n  );\n}\n\nrender(<Accordion />);"
  }
  

      
  ]);

  return new Response(JSON.stringify({ message: "Seeded!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
