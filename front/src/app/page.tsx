import AddNote from "@/components/AddNote";
import NoteList from "@/components/NoteList";
import { NoteProvider } from "@/context/NoteContext";
import React from "react";

const Home: React.FC = () => {
  return (
    <NoteProvider>
      <div className="p-8 min-h-screen bg-gray-100">
        <h1 className="mb-6  text-center text-3xl font-bold">My Notes:</h1>
        <AddNote />
        <NoteList />
      </div>
    </NoteProvider>
  );
};

export default Home;
