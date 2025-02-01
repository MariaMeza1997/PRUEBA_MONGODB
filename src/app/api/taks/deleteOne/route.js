import { connectBD } from "@/libs/mongodb";
import Taks from "@/models/taks";
import { NextResponse } from "next/server";

export async function DELETE(id){

    await  connectBD()
    
    const taksAll = await Taks.findByIdAndDelete({ _id:id })
    return NextResponse.json(taksAll)

}

