"use client";
import { NoteContext } from "@/context/NoteContext";
import React, { useContext, useState } from "react";

interface ActionBtnProps {
  id: string;
}

const ActionBtns: React.FC<ActionBtnProps> = ({ id }) => {
  const { notes, toggleNote, deleteNote, setFlagEdit } =
    useContext(NoteContext)!;

  const curentNote = notes.find((note) => note._id === id);

  const [isChecked, setIsChecked] = useState<boolean | undefined>(
    curentNote?.completed
  );

  const handleDeleteNote = async () => await deleteNote(id);
  const handleEditNote = async () => {
    if (curentNote) setFlagEdit(id, curentNote.text);
  };

  const handleChangeCheckbox = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const completed = e.target.checked;
    setIsChecked(completed);
    await toggleNote(id, completed);
  };

  return (
    <div className="flex justify-center gap-6">
      <button
        onClick={handleDeleteNote}
        className="p-2 rounded bg-red-400 cursor-pointer"
      >
        Delete Note
      </button>
      <input
        className="w-8"
        type="checkbox"
        name="completed"
        id={id}
        checked={isChecked}
        onChange={handleChangeCheckbox}
      />
      <button
        onClick={handleEditNote}
        className="p-2 rounded bg-green-400 cursor-pointer"
      >
        Edit Note
      </button>
    </div>
  );
};

export default ActionBtns;
