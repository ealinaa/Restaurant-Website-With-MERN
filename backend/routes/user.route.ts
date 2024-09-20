import express, { Router } from 'express'
import { signup } from '../user.controller';

const router = express.Router()
router.route("/signup").post(signup);

export default Router