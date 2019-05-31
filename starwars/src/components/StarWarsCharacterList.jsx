import React from 'react';
import StarWarsCharacter from './StarWarsCharacter';


const StarWarsCharacterList = ({starwarsChars}) => (
    <div className="characterList">
      {starwarsChars.map(character =>
            <StarWarsCharacter name={character.name} key={character.created} birthYear={character.birth_year} height={character.height} mass={character.mass} gender={character.gender} />
          )}
    </div>
)

export default StarWarsCharacterList;