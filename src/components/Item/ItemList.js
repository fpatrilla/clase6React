import React from 'react'
import Item from './Item'


export default function ItemList(props) {
  
  return (
    <div>
    <h1>Personajes</h1>
   <Item character={props.character}/>
    
  </div>
  )
}
