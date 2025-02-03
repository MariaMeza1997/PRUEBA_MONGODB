import { connectBD } from "@/libs/mongodb";
import Taks from "@/models/taks";
import { NextResponse } from "next/server";
const express = require("express");
const mongoose = require ("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const parseId= (id) =>{
   
    //console.log(new mongoose.Types.ObjectId("679fe3e82218f6de47591995"))
   return  new mongoose.Types.ObjectId(id)

}


export async function DELETE(request){
   
   
   console.log(request.body.id)
    //const data = await  request.json()
    const id = parseId(request.params.id)

   await  connectBD()
    

    const taksAll = await Taks.findByIdAndDelete({ _id: id})
    return NextResponse.json(taksAll)
    

}

