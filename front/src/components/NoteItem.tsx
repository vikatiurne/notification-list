import { Note } from "@/types/types";
import Link from "next/link";
import React, { useContext } from "react";
import ActionBtns from "./ActionBtns";
import { NoteContext } from "@/context/NoteContext";

interface NoteItemProps {
  note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  const { notes } = useContext(NoteContext)!;

  const curentNote = notes.find((n) => n._id === note._id);

  return (
    <div className="mb-8 border shadow rounded bg-white p-4 w-3/4 mx-auto cursor-pointer">
      <Link className="mb-6" href={`/note/${note._id}`}>
        <li>
          <h1
            className={`text-2xl font-bold ${
              curentNote?.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {curentNote?.text}
          </h1>
          <p className="text-gray-500 text-right">
            created:{" "}
            {!!curentNote && new Date(curentNote?.createdAt).toLocaleString()}
          </p>
        </li>
      </Link>
      <ActionBtns id={note._id} />
    </div>
  );
};

export default NoteItem;
