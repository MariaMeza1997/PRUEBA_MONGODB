 import { NextResponse } from 'next/server';
import {connectBD} from '../../lib/index';
 import taks from '../../lib/models/taks';
 const mongoose = require ("mongoose");

 export async function GET(){

    await connectBD();

    const taksAll = await taks.find();
    return NextResponse.json(taksAll);

}

export async function POST(responsable,status){
    try{
    
        await connectBD();
        const userModel = mongoose.model("tareas", taks);

        const tarea1 = new userModel({
            responsable:responsable,
            status:status,
            fechaEntrega:"1/01/2025", 
            actividad: "Pruebas locales"
        })

        tarea1.save();

    }catch(err){
        console.log(err)
        
    }

}