import React from 'react';
import Calendar from '../Calendar/Calendar';
import Counter from '../Counter/Counter';
import Recorder from '../Recorder/Recorder';
import UseCounterValueComponent from '../UseCounterValueComponent/UseCounterValueComponent';
import './App.css';
import Users from '../Users/Users';
import Events from '../Events/Events';
import ExampleOne from '../React-Hook-Forms/ExampleOne';

/* function App() {
  return (
    <div style={{padding: "50px"}} >
     <Recorder/>
     <Calendar/> 
     </div>
  );
} */



/* function App() {
  return (
    <div style={{padding: "50px"}} >
     <Counter/>
     <hr/>
     <UseCounterValueComponent/>
     <br/>
     <hr/>
     <h1> USERS COMPONENT</h1>
     <div style={{display: "flex"}}>
        <div style={{width: "50%"}}>  <Users/> </div>
        <div style={{marginLeft: "20px"}}> <Events/> </div>
     </div>
    </div>
  );
} */


//React-hook-forms example
function App() {
  return (
    <div style={{padding: "50px"}} >
      <ExampleOne/>
    </div>
  );
}
export default App;
