"use client"
import { Note } from "@/types/types";
import { createNote, getNotes } from "@/utils/api";
import { createContext, useEffect, useMemo, useState } from "react";

interface NoteContextType {
  notes: Note[];
  addNote: (text: string) => Promise<void>;
}

export const NoteContext = createContext<NoteContextType | undefined>(
  undefined
);

export const NoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const allNotes = await getNotes();
      setNotes(allNotes);
    };
    fetch();
  }, []);

  const addNote = async (text: string) => {
    const updatedNotes = await createNote(text);
    setNotes(updatedNotes);
  };

  const value = useMemo(() => ({ notes, addNote }), [notes]);

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};
