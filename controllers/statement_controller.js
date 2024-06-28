import { StatementModel } from "../models/statement_model.js";

//function to store data in the database
 export const addStatement = async (req, res) => {
  try {
    console.log("request", req.body);
    const addData = await StatementModel.create(req.body) // create(req.body) is used to enter data//
    res.status(200).send(addData)
    // res.send("statement added");

    
  } catch (error) {
   console.log(error) 
  }
}

//Function to display all the statements in the database
export const getStatement = async (req, res)=>{
  try {
    console.log("request", req.body);
    const getData = await StatementModel.find(); // find() is used to get data from the database//
    res.json(getData)
  } catch (error) {
    console.log(error);
  }
}

//Function to display a particular statement from the database
export const getAStatement = async (req, res)=>{
  try {
    console.log("request", req.body);
    const oneStatement = await StatementModel.findById(req.params.id)
    res.json(oneStatement)
  } catch (error) {
    console.log(error);
  }
}

//Function to update a particular statement
export const updateAStatement = async (req, res)=>{
  try {
    const status = req.body.caseStatus;
    console.log("request", status);
    const updatedStatement = await StatementModel.findByIdAndUpdate(req.params.id, {caseStatus: status});
    res.status(200).send(updatedStatement)
  } catch (error) {
    console.log(error);
  }
}

//Function to delete a particular statement from the database
export const deleteStatement = async (req, res)=>{
  try {
    console.log("request", req.body);
    const deletedStatement = await StatementModel.findByIdAndDelete(req.params.id); // findByIdAndDelete() is used to get and delete a particular data from the database//
    res.status(200).send("A statement has been deleted");
  } catch (error) {
    console.log(error)
  }
}


