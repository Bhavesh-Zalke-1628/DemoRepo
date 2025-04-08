import express from 'express'


const app = express();

import { Router } from 'express';

const router = Router();

router.get("/", (req, res) => {
    res.send("hello")
})

app.listen(3000, () => {
    console.log("Server is runnig")
})