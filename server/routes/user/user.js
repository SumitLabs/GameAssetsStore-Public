import express from 'express';
import { getAllUser } from '../../controller/user.js'
const router=express.Router();

router.get("/users",getAllUser);


export default router;