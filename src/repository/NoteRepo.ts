import { Note } from "../models/Note";

interface INoteRepo {
  save(note: Note): Promise<void>;
  getAll(): Promise<Note[]>;
}

export class NoteRepo implements INoteRepo {
  async save(note: Note): Promise<void> {
    try {
      await Note.create({
        name: note.name,
        description: note.description,
      });
    } catch (error) {
     console.log(error)
      throw new Error("Failed to save note!");
    }
  }
  async getAll(): Promise<Note[]> {
    try {
      return await Note.findAll();
    } catch (error) {
      throw new Error("Failed to fetch all data!");
    }
  }
}
