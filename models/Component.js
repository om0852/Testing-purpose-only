// models/Component.js
import mongoose from "mongoose";

const ComponentSchema = new mongoose.Schema({
  type: String,   // e.g. "accordion"
  id: Number,     // e.g. 11
  code: String,   // raw JSX string
});

// Prevent model overwrite in dev
export default mongoose.models.Component ||
       mongoose.model("Component", ComponentSchema);
