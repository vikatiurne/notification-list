"use client";
import { NoteContext } from "@/context/NoteContext";
import React, { useContext, useState } from "react";

interface ActionBtnProps {
  id: string;
}

const ActionBtns: React.FC<ActionBtnProps> = ({ id }) => {
  const { notes, toggleNote } = useContext(NoteContext)!;

  const curentNote = notes.find((note) => note._id === id);

  const [isChecked, setIsChecked] = useState<boolean | undefined>(
    curentNote?.completed
  );

  const handleChangeCheckbox = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const completed = e.target.checked;
    setIsChecked(completed);
    await toggleNote(id, completed);
  };

  return (
    <div className="flex justify-center gap-6">
      <button className="p-2 rounded bg-red-400">Delete Note</button>
      <input
        className="w-8"
        type="checkbox"
        name="completed"
        id={id}
        checked={isChecked}
        onChange={handleChangeCheckbox}
      />
    </div>
  );
};

export default ActionBtns;
