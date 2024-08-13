import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

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
    date: {type: Date},
    createdAt: {type:Date, default: Date.now()},
    updatedAt:{type:Date, default: Date.now()}
});
statementSchema.plugin(toJSON);

export const StatementModel = model('statement', statementSchema);