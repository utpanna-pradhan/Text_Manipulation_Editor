import React from 'react';
import './TextForm.css';
import { useState } from 'react';

function TextForm(props) {
 
   let [count, setCount] = useState(0);
   let [count1, setCount1] = useState(0);
   let countChar = 0,
   countCons = 0;
    const [text,setText] = useState("");
  
  //uppercase
    const upperclick=()=>{
        console.log("uppercase button clicked  :" +text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case!" ,"success");
    }

  //lowercase
    const lowerclick =() =>{
      let newText2 =text.toLowerCase();
      setText(newText2);
      props.showAlert("Converted to lower case!" ,"success");
    }
   



//capitalize
const handleCapitalize = () => {
     let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
     setText(newText);
     props.showAlert("Converted to capitalize !" ,"success");
}

//vowel
const handleVoClick = () => {
            for (count = 0; count <= text.length; count++) {
                  if (text.charAt(count).match(/[aeiouAEIOU]/)) {
                  countChar++;
                  setCount (countChar);}
    }
     props.showAlert("count vowel" ,"success");
    
  }

 //consonent
  const handleCoClick = () => {
    for (count1 = 0; count1 <= text.length; count1++) {
      if (text.charAt(count1).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)) {
        countCons++;
        setCount1(countCons);
      }
       props.showAlert("count consonant!" ,"success");
    }}

     const clearclick =() =>{
      let newText3 ="  ";
      setText(newText3);
      props.showAlert("clear text" ,"success");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML ==="Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }
    const copy =()=>{
      var text =document.getElementById('myBox')
      text.select();
      navigator.clipboard.writeText(text.value);
       props.showAlert("Copied to clipboard!" ,"success");
    }
    const extraSpace =() =>{
      var newText =text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("Extra spaces has been removed!" ,"success");
    }

    const handleonchange=(event)=>{
        console.log("clicked");
        setText(event.target.value)
    }
  return (
    <div className="container" 
        style={{color: props.mode==='light'?'black':'white'}}>
    <h1>{props.title}</h1>
    
    <div className="mb-3">
        
        <textarea className="form-control" id="myBox" rows="8" onChange={handleonchange} value={text} 
          style={{backgroundColor: props.mode==='light'?'white':'#4e7ab1',
                  color: props.mode==='light'?'black':'white',
                  fontSize:'20px', fontWeight:'400',
                  border:'2px solid black' 
                  }}
                ></textarea>
        
    </div>
    <button className='btn btn-primary mx-2' onClick={upperclick}>Convert to upper case</button>
    <button className='btn btn-primary mx-2' onClick={lowerclick}>Convert to lower case</button>
   <button className='btn btn-primary mx-2' onClick={handleCapitalize}>Convert to capitalize</button>
   <button className='btn btn-primary mx-2' onClick={extraSpace}>Remove extra space</button>
   <button className='btn btn-primary mx-2' onClick={copy}>Copy</button>
   <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2" id="toggle">Speak</button>
   <button className='btn btn-primary mx-2' onClick={clearclick}>Clear</button>
   
   <br></br>
  <button className="btn btn-primary mx-2 my-2" onClick={handleVoClick}>Number of Vowels</button>
  <button className="btn btn-primary mx-2 my-2" onClick={handleCoClick}>Number of Consonants </button>
  <p>{count} No. of Vowels</p><p>{count1} No. of Consonants</p>
  



   
    




    <div className="container">
      <h3>From the above textarea ,there are: </h3>
      <p>
        {/*with white spaces---> */}
            {/*{text.split(' ').length - null} */}
       {/*without white spaces */}
       {text.trim().split(/\s+/).filter(text =>text !== '').length} number of word's </p>
       <p> {text.length} number of character's </p>
      <p>{text.split(/[.!?]/).length -1} number of sentence's</p>
       <p>
        It takes  { 0.008 * text.split(' ').length } time  to read these {text.split(' ').length} words.
       </p>
       <h3>Preview of textarea</h3>
       <p>{text.length>0 ? text : "Enter something inside the textarea to preview"}</p>
    </div>
    
    </div>
  )
}

export default TextForm