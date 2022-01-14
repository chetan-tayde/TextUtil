import React,{useState} from "react";
import { About } from "./components/About";
import Navbar  from "./components/Navbar";
import TextForm from "./components/TextForm";

const App = () => {
  const [mode, setMode] = useState('light');
    const toggleMode= ()=>{
     if(mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor = 'grey';
     }else{
     setMode('light');
     document.body.style.backgroundColor = 'white';
     }
    }
  return (
    <>
    <Navbar title="YourWord" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3"><TextForm heading="Enter Your Words To Analyze "/>  
    </div>
    <About/>
    </>
  );
};

export default App

