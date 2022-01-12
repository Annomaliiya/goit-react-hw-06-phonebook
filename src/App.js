

import Section from './components/Section';
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter"

const App = () => {

  return (
    <>
      <Section title="Phonebook">
        <ContactForm
        />
      </Section>
      <Section title='Contacts'>
        <Filter
        />
        <ContactList
        />

      </Section>
    </>
  );
}

export default App;
