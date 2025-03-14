import { Request, Response } from "express";
import Note from "./model";

class Controller {
  getNotes = async (req: Request, res: Response): Promise<Response | void> => {
    try {
      const notes = (await Note.find()) ?? [];
      return res.status(200).json(notes);
    } catch (error) {
      return res.status(500).json(`Error getting notes: ${error}`);
    }
  };

  getNotesById = async (
    req: Request,
    res: Response
  ): Promise<Response | void> => {
    try {
      const { id } = req.params;
      const note = await Note.findById(id);
      console.log(note);
      return res.status(200).json(note);
    } catch (error) {
      return res.status(500).json(`Error getting note: ${error}`);
    }
  };

  createNote = async (
    req: Request,
    res: Response
  ): Promise<Response | void> => {
    try {
      const { text } = req.body;
      const note = new Note({ text });
      await note.save();
      const allNotes = await Note.find();
      return res.status(201).json(allNotes);
    } catch (error) {
      return res.status(500).json(`Error creating note: ${error}`);
    }
  };
}

export default new Controller();
