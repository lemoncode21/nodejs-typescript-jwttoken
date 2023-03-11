import { Request, Response } from "express";
import { Note } from "../models/Note";
import { NoteRepo } from "../repository/NoteRepo";

class NoteController {
  async create(req: Request, res: Response) {
    try {
      const { name, description } = req.body;

      const new_note = new Note();
      new_note.name = name;
      new_note.description = description;
      await new NoteRepo().save(new_note);

      return res.status(200).json({
        status: "Ok!",
        message: "Successfully created note!",
      });
    } catch (error) {
     console.log(error)
      return res.status(500).json({
        status: "Internal server error!",
        message: "Internal server error!",
      });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const resp_data = await new NoteRepo().getAll();

      return res.status(200).json({
        status: "Ok!",
        message: "Successfully fetch all note data!",
        result: resp_data,
      });
    } catch (error) {
      return res.status(500).json({
        status: "Internal server error!",
        message: "Internal server error!",
      });
    }
  }
}


export default new NoteController()