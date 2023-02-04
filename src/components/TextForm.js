import React ,{useState} from 'react'


export default function TextForm(props) {

const [text,setText]= useState('enter text here');
    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();

        setText(newText);
    }


    const handleLoClick=()=>{
        console.log("Uppercase was clicked"+text);
        let newText = text.toLowerCase();

        setText(newText);
    }








    const handleOnChange=()=>{
        console.log("On change");
    }
  return (
      <>
    <div>
    <h1>{props.heading}</h1>
<div class="mb-3">
 
  <textarea class="form-control"  value={-{text}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to lowercase</button>
   
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ".length)} 3423 words {text.length} and 454546783 characters</p>
        <p>{0.008*text.split(" ".length)}Minus read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}


