import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Input from './Input';
import CheckBox from './CheckBox';
import TextArea from './TextArea'
import {useState} from 'react'
function App() {
  const [text, setText] = useState('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro est fugit corporis laborum eos quos! Vel, voluptas error laborum iure aliquam quae, ratione, alias optio accusantium eum sint corporis porro?')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Input defoultValue={'Hello'} extraValue={text}/>
        <p>
          Edit <code>src/App.js</code> and hello.
        </p>
        <Hello />
        <CheckBox />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {
            
           ( ()=>{
              return <span>Hello</span>
            })()
          }
        </a>
        <TextArea setText={(event)=>setText(event)}>{text}</TextArea>
      </header>
    </div>
  );
}

export default App;

