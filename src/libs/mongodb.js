const express = require("express");
const mongoose = require ("mongoose");
const app = express();


export async function connectBD(){
     await mongoose.connect("mongodb+srv://marimezamartinez03:Mcmm03041997.@cluster0.ve9ts.mongodb.net/tareas");	
}



/*app.listen("3000", () => {
     console.log("Servidor conectado");
 })
 */