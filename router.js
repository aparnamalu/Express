import { Router } from "express";
import { Home,getDonars,getDonar } from "./requestHandler.js";

const router=Router();
router.route("/adddonar").post(Home)
router.route("/getdonars").get(getDonars)
router.route("/getdonar/:id").get(getDonar)

export default router;