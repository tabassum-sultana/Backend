import express from'express';
import {getBooks,getBookbyid} from '../controllers/bookcontroller.js';

const router=express.router();

router.get('/',getBooks);

router.get('/:id',getBookbyid);
export default router; 