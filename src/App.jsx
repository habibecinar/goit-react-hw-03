import { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm';


function App() {
  const [contacts, setContacts] = useState([]);
  const handleAddContact = (newContact) => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };
  console.log(contacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox />
      <ContactList />
    </div>
  );
}
export default App;
