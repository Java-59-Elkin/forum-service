import express from 'express';
import accountController from "../controllers/account.controller.js";
import validate from "../middleware/vaidation.middleware.js";

const router = express.Router();

router.post('/register', accountController.registerUser);
router.delete('/user/:login', accountController.deleteUser);
router.patch('/user/:login', accountController.updateUser);
router.patch('/user/:login/role/:role', accountController.addRole);
router.delete('/user/:login/role/:role', accountController.deleteRole);
router.get('/user/:login', accountController.getUser);

export default router;