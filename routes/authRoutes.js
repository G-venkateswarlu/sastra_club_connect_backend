import express from 'express';
import{
    registerStudent,
    loginStudent,
    registerClub,
    loginClub,
    logoutUser
   } from '../Controllers/authController.js';
   import jwt from 'jsonwebtoken'
    import upload from "../Middlewares/multer.js";
    const router = express.Router();
    import Club from '../models/club.js';
// Student & Admin
import Student from '../models/student.js';
router.post('/student/register',upload.single("profilepic"),registerStudent);
router.post('/student/login', loginStudent);

// Club

router.post('/club/login', loginClub);
router.post("/club/register", upload.single("photo"), registerClub);
router.get("/logout", logoutUser); 
export default router;