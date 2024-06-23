import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req){
    await mongoose.connect(process.env.DATA);
    const schema=new mongoose.Schema({
        time:{
            type:String,
            required:true
        }
    })
    const product=mongoose.models.amongusgamesss || mongoose.model("amongusgamesss",schema);
    try{
        const payload=await req.json();
        const datasend=new product(payload);
        const result=await datasend.save();
        return NextResponse.json({result,ok:true});
    }catch(error){
        return NextResponse.json({error:"some error come"})
    }
}