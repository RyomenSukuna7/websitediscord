"use client"
import { Button} from "@mui/material";
import Image from "next/image";
import { ChangeEvent, FormEvent, Suspense, useState } from "react";
import Particalss from "./particals";
import Loading from "./loading";
export default function Home() {
  const [time,setData]=useState<string>(" ")
  const changing=(e:ChangeEvent<HTMLInputElement>)=>{
      setData(e.target.value);
  }

  const sendTime=async (e:FormEvent<HTMLButtonElement>)=>{
    e.preventDefault();

    let response=await fetch("http://localhost:3000/api",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({time})
    });
    setData(" ");
    response=await response.json();
    if(response.ok){
      alert("Your data send successfully")
    }else{
      alert("your data is not send"); 
    }

  }
  return (
    <>
    <Suspense fallback={<Loading/>}>
      <Particalss/>
        <div id="main" style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
          <Image src="/game.jpg"  alt="Image is not loaded" layout="fill" objectFit="contain"/>
          <form style={{position:"relative",top:"46vh"}}>
            <input type="number" placeholder="Enter the time" style={{height:"3vh",paddingLeft:"5vw"}} onChange={changing} value={time}></input>
            <Button  style={{color:"white"}} variant="contained" onClick={sendTime}>Set time </Button>
          </form>
        </div>
    </Suspense>

    </>
  );
}
