import React from 'react'

const Contacts = (props) => {
    
  return (
    <tr>
        <td><img src={props.contact.pictureUrl} alt={props.contact.name} height='200px'/></td>
        <td>{props.contact.name}</td>
        <td>{props.contact.popularity}</td>
        <td>{props.contact.wonOscar && "🏆"}</td>
        <td>{props.contact.wonEmmy && "🏆"}</td>
        <td><button onClick={() => {props.deleteContact(props.contact)}}>Delete</button></td>
    </tr>
  )
}

export default Contacts