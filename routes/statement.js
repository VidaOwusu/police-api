import {Router} from "express";
import { StatementModel } from "../models/statement_model.js";
import { addStatement, deleteStatement, getAStatement, getStatement, updateAStatement } from "../controllers/statement_controller.js";

//Create a router
const statementRouter = Router();

//Define routes
statementRouter.post('/statement', addStatement);

statementRouter.get('/', getStatement);

statementRouter.get('/:id', getAStatement);

statementRouter.patch('/:id', updateAStatement);

statementRouter.delete('/:id', deleteStatement);






//Export router
export default statementRouter;