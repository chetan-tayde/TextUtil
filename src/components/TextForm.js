import React,{useState} from 'react'

export default function TextForm(props) {
        const handleUpClick = () =>{
            let newText = text.toUpperCase();
            setText(newText);
        }

        const handleLowClick = () =>{
            let newText1 = text.toLowerCase();
            setText(newText1);
        }
        
        const handleClear = () =>{
            let newText2 = ''
            setText(newText2);
        }

        const handleRemoveExtraSpaces = () =>{
            let newText3 = text.replace(/\s+/g,' ').trim()
            setText(newText3);
        }

        const handleOnChange = (event) =>{
            setText(event.target.value)
        }

        const [text, setText] = useState("")
    return (
        <>
        <div className="container">
         <h2>{props.heading}</h2>
         <div className="mb-3">
          <textarea class="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button type="button" className="btn btn-success mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
        <button type="button" className="btn btn-success mx-2" onClick={handleLowClick}>Convert To Lowercase</button>
        <button type="button" className="btn btn-success mx-2" onClick={handleClear}>Clear Text</button>
        <button type="button" className="btn btn-success mx-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3">
            <h4>Your Text Summary</h4>
            <p>{text.split(" ").length} Words & {text.length} Character</p>
            <p>{0.008 * text.split(" ").length} Minutes To Reads</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:"Enter Your Text First For Preview"}</p>
        </div>
        </>
    )
}
