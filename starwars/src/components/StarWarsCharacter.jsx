import React from 'react';
import './StarWars.css';

export default function StarWarsCharacter ({name, height, mass, gender, birthYear,}) {

  return (
    <div className="starWarsCharacter">
    <h3>{name}</h3>
   
    <div>Birth Year: {birthYear}</div>
    <div>Height: {height}</div>
    <div>Mass: {mass}</div>
    <div>Gender: {gender}</div>
    </div>
  )
}