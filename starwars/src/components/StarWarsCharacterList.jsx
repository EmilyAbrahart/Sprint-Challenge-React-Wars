import React from 'react';
import StarWarsCharacter from './StarWarsCharacter';


const StarWarsCharacterList = ({starwarsChars}) => (
    <div className="characterList">
      {starwarsChars.map(character =>
            <StarWarsCharacter name={character.name} key={character.created}/>
          )}
    </div>
)

export default StarWarsCharacterList;