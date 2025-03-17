"use client";
import { Note } from "@/types/types";
import {
  createNote,
  editNoteById,
  getNotes,
  removeNoteById,
  toggleNoteById,
} from "@/utils/api";
import { createContext, useEffect, useMemo, useState } from "react";

interface NoteContextType {
  notes: Note[];
  isEdit: boolean;
  editingNoteId: string;
  editingNoteText: string;
  addNote: (text: string) => Promise<void>;
  toggleNote: (id: string, completed: boolean) => Promise<void>;
  editNote: (id: string, text: string) => Promise<void>;
  deleteNote: (id: string) => Promise<void>;
  setFlagEdit: (id: string, text: string) => void;
}

export const NoteContext = createContext<NoteContextType | undefined>(
  undefined
);

export const NoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editingNoteId, setEditingNoteId] = useState("");
  const [editingNoteText, setEditingNoteText] = useState("");

  const fetch = async () => {
    const allNotes = await getNotes();
    setNotes(allNotes);
  };

  useEffect(() => {
    fetch();
  }, [isEdit]);

  const addNote = async (text: string) => {
    const updatedNotes = await createNote(text);
    setNotes(updatedNotes);
    setIsEdit(false);
  };

  const toggleNote = async (id: string, completed: boolean) => {
    const updatedNotes = await toggleNoteById(id, completed);
    setNotes(updatedNotes);
  };
  const editNote = async (id: string, text: string) => {
    const updatedNotes = await editNoteById(id, text);
    setIsEdit(false);
    setEditingNoteText(text);
    setEditingNoteId(id);
    setNotes(updatedNotes);
  };

  const setFlagEdit = (id: string, text: string) => {
    setIsEdit(true);
    setEditingNoteId(id);
    setEditingNoteText(text);
  };

  const deleteNote = async (id: string) => {
    const updatedNotes = await removeNoteById(id);
    setNotes(updatedNotes);
  };

  const value = useMemo(
    () => ({
      notes,
      isEdit,
      editingNoteId,
      editingNoteText,
      setFlagEdit,
      addNote,
      toggleNote,
      deleteNote,
      editNote,
    }),
    [notes]
  );

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};
