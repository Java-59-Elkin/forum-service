import express from 'express';
import accountController from "../controllers/account.controller.js";
import validate from "../middleware/vaidation.middleware.js";

const router = express.Router();

router.post('/register', accountController.registerUser);


export default router;