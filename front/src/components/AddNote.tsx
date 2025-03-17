"use client";
import { NoteContext } from "@/context/NoteContext";
import React, { useContext, useEffect, useState } from "react";

const AddNote: React.FC = () => {
  const [text, setText] = useState<string>("");

  const { addNote, isEdit,  editingNoteText, editNote } =
    useContext(NoteContext)!;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    !isEdit ? await addNote(text) : await editNote(editingNoteId, text);
    setText("");
  };

 
  useEffect(() => {
    !isEdit ? setText("") : setText(editingNoteText);
  }, [isEdit]);

  return (
    <form onSubmit={handleSubmit} className="mb-4 text-center ">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="border p-2 rounded w-2/3 mr-3"
        placeholder="type a text..."
      />
      <button className="p-2 bg-blue-500 text-white rounded cursor-pointer">
        {!isEdit ? "Add Notes" : "Save"}
      </button>
    </form>
  );
};

export default AddNote;
