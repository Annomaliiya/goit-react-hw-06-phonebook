

import { useState, useEffect, useRef } from "react";
import { nanoid } from 'nanoid';

import Section from './components/Section';
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter"


const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },

];

const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("")
  const isFirstRender = useRef(true);


  const filterInputId = nanoid();

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      const contacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(contacts);
      if (parsedContacts) {
        setContacts(parsedContacts);
      }
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
    , [contacts]);


  const changeContact = (name, number) => {
    if (contacts.find((contact) => {
      return contact.name.toLowerCase() === name.toLowerCase();
    })) {
      alert(name + " is already in contacts.");
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name,
      number: number
    };
    setContacts(prevState => {
      return ([...prevState, newContact]
      );
    })
  };

  const handleContactChange = (event) => {
    const { name, value } = event.currentTarget;

    setContacts({ [name]: value });
  };


  const handleFilterChange = (event) => {
    const { value } = event.currentTarget;

    setFilter(value);
  };


  const deleteContact = (contactId) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId)
    );
  };

  const getFiltered = () => {
    if (!filter) {
      return contacts;
    }
    const normalizeFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(({ name }) => {
      const normalizeName = name.toLowerCase();
      const result = normalizeName.includes(normalizeFilter);
      return result;
    })

    return filteredContacts;
  }
  const filteredContacts = getFiltered();
  return (
    <>
      <Section title="Phonebook">
        <ContactForm handleChange={handleContactChange} changeContact={changeContact} />
      </Section>
      <Section title='Contacts'>
        <Filter filter={filter} handleChange={handleFilterChange} filterInputId={filterInputId} />
        <ContactList contacts={filteredContacts} deleteFunction={deleteContact}
        />

      </Section>
    </>
  );
}

export default App;
