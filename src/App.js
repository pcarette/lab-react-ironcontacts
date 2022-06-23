// src/App.js
import "./App.css";
import contacts from "./contacts.json";
import Contacts from "./components/Contacts.jsx";
import { useState } from "react";

const displayedContacts = contacts.slice(0, 5);

function App() {
  const [contactList, setContactList] = useState(displayedContacts);

  function addRandomContact() {
    const currentIds = contactList.map(element => element.id)

    const unusedContacts = contacts.filter(
      (contact) => !currentIds.includes(contact.id)
    );
    const randomIndex = Math.floor(Math.random() * unusedContacts.length);
    console.log(unusedContacts)
    setContactList([...contactList, unusedContacts[randomIndex]]);
  }
  if (contactList.length === 0) {
    return (
      <div className='App'>
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add New Random Contact</button>
      <button onClick={()=>{sortBy('name')}}>Sort By Name</button>
      <button onClick={()=>{sortBy("popularity")}}>Sort By Popularity</button>
      <div> No contacts </div>
      </div>
    );
  }

  function sortBy(x) {
    if (x === `popularity`) {
      setContactList([...contactList.sort((a, b) => b[x] - a[x])]);
    } else {
      setContactList([
        ...contactList.sort((a, b) =>
          a[x].localeCompare(b[x], "en", { sensitivity: "base" })
        )
      ]);
    }
  }

  function deleteContact(contact) {
    setContactList(contactList.filter(c => c !== contact));
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add New Random Contact</button>
      <button onClick={()=>{sortBy('name')}}>Sort By Name</button>
      <button onClick={()=>{sortBy("popularity")}}>Sort By Popularity</button>
      <table>
        <tr>
          <td>Picture</td>
          <td>Name</td>
          <td>Popularity</td>
          <td>Won Oscar</td>
          <td>Won Emmy</td>
          <td>Actions</td>
        </tr>
        {contactList.map((element, index) => {
          console.log(element);
          return <Contacts key={index} contact={element} deleteContact={deleteContact} />;
        })}
      </table>
    </div>
  );
}
export default App;
