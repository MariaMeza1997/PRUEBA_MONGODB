

const express = require("express");
const mongoose = require ("mongoose");
const app = express();


const connectBD  = async () => {
    try{
        await mongoose.connect("mongodb+srv://marimezamartinez03:Mcmm03041997.@cluster0.ve9ts.mongodb.net/tareas")	
        console.log("Conectado al servidor")
    }catch(err){
        console.log(err)
    }

    app.listen("3001", () => {
        console.log("Servidor conectado");
    })
    
    
}
export default connectBD

