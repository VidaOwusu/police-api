import express from "express";
import statementRouter from "./routes/statement.js";
import 'dotenv/config';
import { dbConnection } from "./config/db.js";
import expressOasGenerator from "@mickeymond/express-oas-generator";
import cors from "cors";

const Statementapp = express();

expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    tags: [
      "statement",
    ],
    mongooseModels: mongoose.modelNames(),
  });
  app.use(cors({ credentials: true, origin: "*" }));
Statementapp.use(express.json()); //this is the middleware that is used
dbConnection();

Statementapp.use(statementRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect("/api-docs/"));



//Listen for incoming requests
Statementapp.listen(7000, () => {
    console.log('Statement App listening on port 7000');
});