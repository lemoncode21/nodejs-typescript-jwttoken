import NoteController from "../controller/NoteController";
import { auth } from "../middleware/AuthMiddleware";
import BaseRoutes from "./BaseRouter";

class NoteRoutes extends BaseRoutes {
  routes(): void {
    this.router.post("/", auth, NoteController.create);
    this.router.get("/", auth, NoteController.getAll);
  }
}

export default new NoteRoutes().router;
