
import './App.css';
import Navbar from './component/Navbar';
 import TextForm from './component/TextForm';
 import React ,{useState} from 'react';
//import About from './component/About';
function App() {
  const[mode,setMode]=useState('light'); //whether dark mode is enable or not
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <div className="container my-3">
          <TextForm heading="Enter the text to analyze below" mode={mode}/> 
         {/*<About/> */}
        </div>
    </>
   );
}

export default App;
 