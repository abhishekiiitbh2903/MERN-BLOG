import express from 'express';
const router = express.Router();
import { signout,deleteUser,test,updateUser,getUsers } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
// router.get('/test',(req,res)=>{
//     res.json({msg:"hello World"})
// });
router.get('/test',test);
router.put('/update/:userId', verifyToken,updateUser);
router.delete('/delete/:userId', verifyToken,deleteUser);
router.post('/signout', signout);
router.get('/getusers', verifyToken, getUsers);
export default router