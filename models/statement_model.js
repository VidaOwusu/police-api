import { Schema, model } from "mongoose";

// const incidentType = ['Criminal', 'Non-criminal'];
// const civilianStatus = ['Suspect', 'Complanaint', 'Witness'];
// const caseStatus = ['Open', 'Closed'];

//Define the schema
const statementSchema = new Schema({
    // statementId: {type:String},
    incidentType: {type: String, enum:["criminal", "non-criminal"]},
    civilianStatus: {type:String, enum:["suspect", "complanaint", "witness"]},
    statement: {type: String},
    caseStatus: {type:String, enum:["open", "closed"]},
    // civilianId: {type: String},
    createdAt: {type:Date, default: Date.now()},
    updatedAt:{type:Date, default: Date.now()}
});

export const StatementModel = model('statement', statementSchema);