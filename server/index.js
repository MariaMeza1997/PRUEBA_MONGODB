const express = require("express");
const mongoose = require ("mongoose");
const app = express();


mongoose.connect("mongodb+srv://marimezamartinez03:Mcmm03041997.@cluster0.ve9ts.mongodb.net/tareas");	

/*Models*/
const userShema = new mongoose.Schema({
    responsable:String,
    status:String,
    fechaEntrega:Date, 
    actividad: String
})

const userModel = mongoose.model("tareas", userShema);

/*Add*/


function GET (){

}


function POST (){

    const tarea1 = new userModel({
        responsable:"Jose Montes",
        status:"Pendiente",
        fechaEntrega:"1/01/2025", 
        actividad: "Pruebas locales"
    })
    
    tarea1.save();
}


app.listen("3001", () => {
    console.log("Servidor conectado");
})


