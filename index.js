import express from "express";
import statementRouter from "./routes/statement.js";
import 'dotenv/config';
import { dbConnection } from "./config/db.js";



const Statementapp = express();
Statementapp.use(express.json()); //this is the middleware that is used
dbConnection();

Statementapp.use(statementRouter);




//Listen for incoming requests
Statementapp.listen(7000, () => {
    console.log('Statement App listening on port 7000');
});