import mongoose, { Document, Schema } from "mongoose";

interface Note extends Document {
  text: string;
  completed: boolean;
}

const NoteSchema: Schema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Note = mongoose.model<Note>("Note", NoteSchema);

export default Note;
