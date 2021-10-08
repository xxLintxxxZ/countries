import React, { useState, useEffect } from 'react';
import Country from './CountryFact';
import Button from '@mui/material/Button';


export default function Form(props) {

  const [countryData, setcountryData] = useState([]);
  const [countryTitle, setcountryTitle] = useState("australia");


  // fetch("https://restcountries.com/v3.1/name/" + countryTitle)
  // .then((res) => res.json())
  // .then((countryData) => {
  //   console.log(countryData);
  //   setcountryData(countryData);
  
  useEffect(() => {

    fetch("https://restcountries.com/v3.1/name/" + countryTitle)
    .then((res) => res.json())
    .then((countryData) => {
    console.log(countryData);
    setcountryData(countryData)
      });
    
  }, [countryTitle]);

  const handleSubmit = (e) => {
    console.log('Form - handleSubmit - countryTitle', countryTitle);
    e.preventDefault();
    props.handleSubmit(countryTitle);
    setcountryTitle('');
  };

  const handleChange = (e) => {
    console.log('handleChange clicked');
    const title = e.target.value;
    setcountryTitle(title);
  };


 //onSubmit={handleSubmit}
 //<button value= "<- Find Random Country Flag & Capital" />


  return (
    <>
    <div>
      <form >
        <br/> <br/>
       <div/> 
        Key in the country directly in the input box below to 
         display a country's flag and capital <br/><br/>

        <label htmlFor="countryTitle">Country: </label>
        <input
          id="countryTitle"
          type="text"
          value={countryTitle}
          onChange={handleChange}
        />
       <Button variant ="contained">{countryTitle}</Button>
        <Country name = {countryData?.[0]?.name.common} capital = {countryData?.[0]?.capital} img = {countryData?.[0]?.flags.png}/>
       
      </form>
      </div>
    </>
  );
}

