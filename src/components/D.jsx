import React, { useContext, useEffect } from 'react'
import { Namecontext } from '../App';

export default function D() {
    const{name,setName}=useContext(Namecontext);
    useEffect(()=>{
        setTimeout(()=>{
            setName("sssssaasasaaa")
        },1000);
    })
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}
