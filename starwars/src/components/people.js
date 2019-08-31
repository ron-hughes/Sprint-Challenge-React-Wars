import React from 'react';
import styled from 'styled-components';
import "./StarWars.css"

const divs = 'divs';

function People (props) {
    
const PeopleDiv = styled.div`
  padding: 20px;
  display: inline-block;
  width: 20%;
  border-radius: 30px;
  box-shadow: 1px 18px 70px 4px rgba(0,0,0,0.62);
-webkit-box-shadow: 1px 18px 70px 4px rgba(0,0,0,0.62);
-moz-box-shadow: 1px 18px 70px 4px rgba(0,0,0,0.62);
  margin: 20px 40px auto;
  &:nth-child(even) {
    background: white;
    border: 1px solid #000000;
  }
  &:nth-child(odd) {
    background: black;
    color: white;
    border: 1px solid #ffffff;
  }`;

    return (
    props.people.map((e, index) => (
    <PeopleDiv key={index}>
        
    <div className={divs}> Name </div>: {e.name} <br />       
    <div className={divs}>Hair Color </div>: {e.hair_color} <br />
    <div className={divs}>Birth Year:</div> {e.birth_year}

    
    </PeopleDiv>
  ))

    )

}
    

export default People