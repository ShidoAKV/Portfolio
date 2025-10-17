import express from 'express';
import { AssistanceResponse } from '../controller/Assistance.js';

const Assistancerouter=express.Router();

Assistancerouter.post('/send',AssistanceResponse);

export {Assistancerouter};