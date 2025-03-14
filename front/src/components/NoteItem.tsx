import { Note } from "@/types/types";
import Link from "next/link";
import React from "react";

interface NoteItemProps {
  note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  return (
    <Link className="mb-6" href={`/note/${note._id}`}>
      <li className="mb-8 border shadow rounded bg-white p-4 w-3/4 mx-auto cursor-pointer">
        <h1 className="text-2xl font-bold">{note.text}</h1>
        <p className="text-gray-500 text-right">
          created: {new Date(note.createdAt).toLocaleString()}
        </p>
      </li>
    </Link>
  );
};

export default NoteItem;
