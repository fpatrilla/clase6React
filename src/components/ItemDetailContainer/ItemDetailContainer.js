import React, { useState, useEffect } from 'react';
import ItemList from '../Item/ItemList';



export default function ItemDetailContainer(props) {
    const [character, setCharacter] = useState([{}]);

	// console.log('DATA:', character);

	
	useEffect(() => {
		
		fetch('https://rickandmortyapi.com/api/character/2')
			.then((response) => response.json())
			.then((json) => setCharacter(json));
	}, []);

  return (
    <div>
        
    
    <ItemList character={character}/>
    </div>
  )
}
