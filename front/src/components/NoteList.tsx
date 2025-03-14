"use client";
import { NoteContext } from "@/context/NoteContext";
import React, { useContext } from "react";
import NoteItem from "./NoteItem";

const NoteList: React.FC = () => {
    const { notes } = useContext(NoteContext)!;
    
  return notes.length === 0 ? (
    <p className="text-3xl font-bold text-center">there are no notes</p>
  ) : (
    <ul >
      {notes.map((note) => (
        <NoteItem key={note._id} note={note} />
      ))}
    </ul>
  );
};

export default NoteList;
