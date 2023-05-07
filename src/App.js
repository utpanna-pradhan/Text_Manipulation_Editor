import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import './App.css';
import { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";


function App() {
  //for alert msg
  const [alert,setAlert] = useState('null');

  const showAlert = (message, type) =>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);

  }


  const [ mode,setMode ] = useState('light');
  const toggleMode =() =>{
    if(mode ==='light')
      {setMode('dark');
      document.body.style.backgroundColor='#052144';
      document.title ="TextUtils_DarkMode"
      showAlert("Dark blue mode has been sucessfully enanbled" ,"success");
      }
      
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.title ="TextUtils_LightMode"
      showAlert("Light mode has been sucessfully enanbled",  "success");
        }
      
    
  }

  return (
    <div className="App">
    
      <Router>
        <Navbar title="" about="about_Textutils" mode={mode}  toggleMode={toggleMode}   />
        <Alert alert= {alert} />
            <Routes>
        {/* <div className="container">*/}
                <Route exact path='/' element={<TextForm showAlert={showAlert} title="Write down your text inside the textarea" mode={mode} />}>
                    
                </Route>
              {/*  </div>*/}
                <Route exact path='/about' element={<About />}>
                      
                </Route>
             </Routes>
      </Router>
       
        
      
    </div>
  );
}

export default App;
