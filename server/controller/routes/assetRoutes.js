import express from 'express';
const router=express.Router();

router.get("/assets", (req, res) => {
  res.status(200).json({
    message:"All Assets"
  })
});

export default router;