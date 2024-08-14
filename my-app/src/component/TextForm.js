import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("upercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
       // setText("You have clicked on handleUpclick");
    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const [text, setText]= useState('Enter text here');
    //text="new text";//wrong way to change the state
    //setText("new text");//correct way to change the state
  return (
  <div>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control"value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
  </div>
  )
}
