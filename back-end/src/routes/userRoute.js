import express from 'express';
import { register } from '../services/userServices.js';

const router = express.Router();

router.post('/register', async (request, response) => {
    const { firstName, lastName, email, password } = request.body;
    const { statusCode,message } = await register({ firstName, lastName, email, password });

    response.status(statusCode).send(message);
});

export default router;