import logo from './logo.svg';
import './App.css';
import B from './components/B';
import { createContext, useContext, useEffect, useState } from 'react';

const Namecontext=createContext();

function D()
{
  const{name,setName}=useContext(Namecontext);
  useEffect(()=>{
    setTimeout(()=>{
      setName('sathiiiiiiooo');
    },1000)
  })
  return(
    <di>
     <h1>{name}</h1>
    </di>
  )
}



function App() {
  const [name,setName]=useState("sathis");
  return (
    <div className="App">
      <Namecontext.Provider value={{name,setName}}>
       <B></B>
      </Namecontext.Provider>
  
    </div>
  );
}

export{App as default,Namecontext};
