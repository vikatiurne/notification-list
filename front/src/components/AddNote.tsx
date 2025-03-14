"use client";
import { NoteContext } from "@/context/NoteContext";
import React, { useContext, useState } from "react";

const AddNote: React.FC = () => {
  const [text, setText] = useState<string>("");

  const { addNote } = useContext(NoteContext)!;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addNote(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 text-center ">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="border p-2 rounded w-2/3 mr-3"
        placeholder="type a text..."
      />
      <button className="p-2 bg-blue-500 text-white rounded cursor-pointer">Add Notes</button>
    </form>
  );
};

export default AddNote;
