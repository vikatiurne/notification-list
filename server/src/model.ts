import mongoose, { Document, Schema } from "mongoose";

interface Note extends Document {
  text: string;
}

const NoteSchema: Schema = new mongoose.Schema(
  {
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const Note = mongoose.model<Note>("Note", NoteSchema);

export default Note;
