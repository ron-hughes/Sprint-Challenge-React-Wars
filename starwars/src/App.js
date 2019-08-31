import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import People from './components/people';


const Button = styled.button`
padding: 10px;
color: white
background: black;
border: 1px solid #ffffff;
`;
const img = 'http://loodibee.com/wp-content/uploads/Star-Wars-transparent-logo.png';

function App() {
  const [count, setCount] = useState(1);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
    .then(res => {
      setPeople(res.data.results);
      console.log(res.data)
    });
  }, []);
  // pagination - stretch
  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page=${count}`)
    .then(res => {
      setPeople(res.data.results);
    });
  }, [count]);



  return (
    <div className="App">

<div>
  
  <img src={img} width="400px" height="270px" /> 

</div>

    <People people={people} />

      <br /> <br />
      

      <Button onClick={() =>  setCount(count - 1)}>Previous </Button>
      
      <Button onClick={() => setCount(count + 1)}>Next</Button>
      
    </div>
  );
}


export default App;
