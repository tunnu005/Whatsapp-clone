import express from 'express'
import { addUser,getUsers } from '../controller/user-controller.js';
import { newConversation } from '../controller/conversation-controller.js';
import { getconversation } from '../controller/conversation-controller.js';
import { getMasseges, newMessage } from '../controller/mesaage-controller.js';
import { uploudFile } from '../controller/image-controller.js';
import upload from '../utils/upload.js'
import {getImage} from '../controller/image-controller.js'



const Router=express.Router();

Router.post('/add',addUser)
Router.get('/users',getUsers)

Router.post('/conversation/add',newConversation);
Router.post('/conversation/get',getconversation);
Router.post('/message/add',newMessage)
Router.get('/message/get/:id',getMasseges)
Router.post('/file/upload',upload.single("file"),uploudFile)
Router.get('/file/:filename',getImage)





export default Router;