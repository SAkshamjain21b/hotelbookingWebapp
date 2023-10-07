import express from 'express';

import {auths} from '../controllers/user.js';

const router = express.Router();

router.post('/',auths);

export default router;
