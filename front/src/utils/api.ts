import { Note } from "@/types/types";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getNotes = async (): Promise<Note[]> => {
  try {
    const res = await axios.get(`${API_URL}/api/getNotes`);

    return res.data;
  } catch (error: any) {
    throw new Error(`Error getting notes: ${error.message}`);
  }
};
export const getNoteById = async (id: string): Promise<Note> => {
  try {
    const res = await axios.get(`${API_URL}/api/getNote/${id}`);

    return res.data;
  } catch (error: any) {
    throw new Error(`Error getting note: ${error.message}`);
  }
};
export const toggleNoteById = async (
  id: string,
  completed: boolean
): Promise<Note[]> => {
  try {
    const res = await axios.put(`${API_URL}/api/toggleNote/${id}`, {
      completed,
    });

    return res.data;
  } catch (error: any) {
    throw new Error(`Error getting note: ${error.message}`);
  }
};
export const editNoteById = async (
  id: string,
  text: string
): Promise<Note[]> => {
  try {
    const res = await axios.put(`${API_URL}/api/editNote/${id}`, {
      text,
    });

    return res.data;
  } catch (error: any) {
    throw new Error(`Error edit note: ${error.message}`);
  }
};
export const removeNoteById = async (id: string): Promise<Note[]> => {
  try {
    const res = await axios.delete(`${API_URL}/api/deleteNote/${id}`);

    return res.data;
  } catch (error: any) {
    throw new Error(`Error getting note: ${error.message}`);
  }
};
export const createNote = async (text: string): Promise<Note[]> => {
  try {
    const res = await axios.post(`${API_URL}/api/createNote`, { text });

    return res.data;
  } catch (error: any) {
    throw new Error(`Error creating note: ${error.message}`);
  }
};
