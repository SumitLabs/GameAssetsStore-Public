import express from 'express';
import { getAllAsset } from '../../controller/asset.js';
const router=express.Router();


router.get("/assets",getAllAsset);


export default router;