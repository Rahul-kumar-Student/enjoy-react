import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
       // console.log("upercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
       // setText("You have clicked on handleUpclick");
    }
    const handleLowClick=()=>{
        console.log("Lower case was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success");
    }
    const handleClearClick=()=>{
      console.log("text was clear");
      let newText=" ";
      setText(newText);
      props.showAlert("text cleared","success");
  }
    const handleOnChange=(event)=>{
      console.log("on change");
      setText(event.target.value);
  }

  //Credit: A
  const handleCopy=()=>{
    console.log("i am copy");
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard","success");
  }

  //Credit : coding wallah

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("removed extra spaces","success");
  }
    const [text, setText]= useState('Enter text here');
    //text="new text";//wrong way to change the state
    //setText("new text");//correct way to change the state
  return (
    <>
  <div className="conatainer"  style={{color:props.mode ==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control"value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode ==='dark'?'grey':'white', color: props.mode === 'dark'?'white':'#042743'}}></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy the text</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
  </div>
  <div className="conatiner my-3"  style={{color:props.mode ==='dark'?'white':'#042743'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length}characters</p>
    <p>{0.008*text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview it here"}</p>
    
  </div>
  </>
  )
}
