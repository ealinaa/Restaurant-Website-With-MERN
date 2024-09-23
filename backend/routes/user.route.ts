import express, { Router } from 'express'
import { checkAuth, signup } from '../controllers/user.controller';
import { isAuthenticated } from '../middlewares/isAuthenticated';

const router = express.Router()

router.route('/check-auth').get(isAuthenticated,checkAuth)
router.route("/signup").post(signup);


export default Router