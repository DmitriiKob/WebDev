import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Input from './Input';
import CheckBox from './CheckBox';
import TextArea from './TextArea'
import {useState, useEffect} from 'react'
import Form from './Form';
import Radio from './Radio';
function App() {
  const [text, setText] = useState('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro est fugit corporis laborum eos quos! Vel, voluptas error laborum iure aliquam quae, ratione, alias optio accusantium eum sint corporis porro?')
  console.log(1)
  useEffect(()=>{
    console.log('inside useEffect')
  }, [text])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Form />
       <Radio />
       <input type={'text'} onChange={event=>setText(event.target.value)} />
      </header>
    {console.log(2)}
    </div>
  );
}

export default App;

