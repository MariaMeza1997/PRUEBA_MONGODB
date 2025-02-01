import { connectBD } from "@/libs/mongodb";
import Taks from "@/models/taks";
import { NextResponse } from "next/server";



 export async function GET(){

    await  connectBD()

    const taksAll = await Taks.find()
    return NextResponse.json(taksAll)

}


export async function DELETE(){

    await  connectBD()

    const taksAll = await Taks.deleteMany({})
    return NextResponse.json(taksAll)

}


export  async function POST(request){

    await  connectBD()
    const data = await request.json()

    const taksAll = await Taks.create(data)
    return NextResponse.json(taksAll)

}
