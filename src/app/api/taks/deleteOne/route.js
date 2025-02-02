import { connectBD } from "@/libs/mongodb";
import Taks from "@/models/taks";
import { NextResponse } from "next/server";
const mongoose = require ("mongoose");

const parseId= (id) =>{
    return new mongoose.Types.ObjectId(id)
}

export async function DELETE(request){
    const { idDoc } = request;
    const data = await request.json()


   await  connectBD()
    

    const taksAll = await Taks.findByIdAndDelete({ _id: parseId(data)})
    return NextResponse.json(data)
    

}

