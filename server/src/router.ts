import controller from "./controller";

const { Router } = require("express");

const router = new Router();

router.get("/getNotes", controller.getNotes);
router.post("/createNote", controller.createNote);
router.get("/getNote/:id", controller.getNotesById);

export default router;
