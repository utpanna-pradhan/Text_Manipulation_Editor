
import React from 'react'
import { useState } from 'react';
import './About.css';

function About() {
    let myStyle2={
       borderRadius:'18px'
    }
    const [myStyle  , setMyStyle]= useState({
        color:'black',
        backgroundColor:'white'})

    const[btnText,setBtnText]=useState("Enable dark mode")

    const toggle =() =>{
        if(myStyle.color === 'black'){
            setMyStyle({
            color:'white',
            backgroundColor:'black',
            border:'1px solid white',
            borderRadius:'28px'
        })
            setBtnText("Enable light mode")
        }
    else{
        setMyStyle({
            color:'black',
            backgroundColor:'white',
            border:'1px solid black',
            borderRadius:'28px'
    })
            setBtnText("Enable dark mode")
    }
    }
  return (
    <>
    <div className="container" style={myStyle}>
        <h1>About TetxtUtils</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item my-3" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
               <strong> Description</strong> 
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    It is a text editor.It helps to manipulate your text by clicking the buttons.
                    </div>
                </div>
            </div>
         <div className="accordion-item my-3" style={myStyle}>
            <h2 className="accordion-header" >
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
               <strong> Function of Buttons</strong>
            </button>
            </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        
                        <strong>toUpperCase</strong>
                        The toUpperCase() method in JavaScript can be used to convert a string into uppercase characters. This method converts every lowercase character to uppercase and does not alter any other character.
                        <br></br> <strong>toLowerCase</strong>The toLowerCase() method converts a string to lowercase letters. The toLowerCase() method does not change the original string.
                        <br></br> <strong>Capitalize</strong>To capitalize the first character of a string.
                         <br></br> <strong>Remove extra space</strong>It will remove all the extra spaces from our text.
                        <br></br> <strong>Copy</strong>It will copy our selected text in to our clipboard and the we can paste it anywhere.
                         <br></br> <strong>Speak</strong>It will speak our text.
                        <br></br> <strong>Clear</strong>It will clear our text area.
                        

                    </div>
                </div>
        </div>
            <div className="accordion-item my-3" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
               <strong>Extra functionalities </strong> 
                </button>
                </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                             <br></br> <strong>Number of vowel's-</strong>It will count the number of vowel's available in our text.
                          <br></br> <strong>Number of consonant's-</strong>It will count the number of consonant,s available in our text.

                            <p>It can count number of <strong>Words ,</strong>
                            number of <strong>Characters ,</strong> number of <strong>Sentences</strong>
                            <br></br>
                            It can also calculate the time required to <strong>read the text</strong>, and also provide a preview of our text-editor

                            </p>
                        </div>
                    </div>
            </div>
        </div>
        <button type="button" class="btn btn-primary my-3" onClick={toggle} style={myStyle2} >{btnText}</button>
    </div>
    
    </>
  )
}

export default About