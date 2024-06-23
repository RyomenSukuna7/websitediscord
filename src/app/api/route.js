import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req){
    await mongoose.connect("mongodb+srv://nishantadvani724:kickkick7@cluster0.t00iki9.mongodb.net/gaming?retryWrites=true&w=majority&appName=Cluster0");
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