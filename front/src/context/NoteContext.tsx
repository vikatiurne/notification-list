"use client";
import { Note } from "@/types/types";
import {
  createNote,
  getNotes,
  removeNoteById,
  toggleNoteById,
} from "@/utils/api";
import { createContext, useEffect, useMemo, useState } from "react";

interface NoteContextType {
  notes: Note[];
  addNote: (text: string) => Promise<void>;
  toggleNote: (id: string, completed: boolean) => Promise<void>;
  deleteNote: (id: string) => Promise<void>;
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
  }, [notes]);

  const addNote = async (text: string) => {
    const updatedNotes = await createNote(text);
    setNotes(updatedNotes);
  };

  const toggleNote = async (id: string, completed: boolean) => {
    const updatedNotes = await toggleNoteById(id, completed);
    setNotes(updatedNotes);
  };

  const deleteNote = async (id: string) => {
    const updatedNotes = await removeNoteById(id);
    setNotes(updatedNotes);
  };

  const value = useMemo(
    () => ({ notes, addNote, toggleNote, deleteNote }),
    [notes]
  );

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};
