import express from "express";

import {table} from "../controllers/table.js";

const router = express.Router();

router.post('/',table);

export default router;