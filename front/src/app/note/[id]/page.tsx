"use client";

import { Note } from "@/types/types";
import { getNoteById } from "@/utils/api";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const NotePage: React.FC = () => {
  const [note, setNote] = useState<Note | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams();
  const noteId = Array.isArray(id) ? id[0] : id;

  useEffect(() => {
    const fetch = async () => {
      if (noteId) {
        try {
          const note = await getNoteById(noteId);
          setNote(note);
        } catch (error: any) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }
    };
    fetch();
  }, [id]);

  if (loading) {
    return <p className="text-center text-2xl">Loading</p>;
  }
  if (error) {
    return <p className="text-center text-2xl">Error: {error}</p>;
  }
  return (
    <div className="my-8 border shadow rounded bg-white p-4 w-3/4 mx-auto cursor-pointer">
      <h2 className="text-2xl font-bold">{note?.text}</h2>
      <p className="text-gray-500 text-right">
        Created: {!!note && new Date(note.createdAt).toDateString()}
      </p>
    </div>
  );
};

export default NotePage;
