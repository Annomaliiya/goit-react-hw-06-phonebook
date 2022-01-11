import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";
import { getContacts } from "../../redux/contacts/contacts-selectors";

import PropTypes from "prop-types";
import s from "./ContactForm.module.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    name === "name" ? setName(value) : setNumber(value);
  };

  function reset() {
    setName("");
    setNumber("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const contact = {
      name: e.currentTarget.name.value,
      number: e.currentTarget.number.value,
    };
    if (contacts.find((el) => el.name === contact.name)) {
      alert(`${contact.name} is already in contacts!`);
    } else {
      dispatch(actions.addContact(contact));
    }
    reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className={s.label}>
        Name:
        <input
          type="text"
          name="name"
          className={s.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        ></input>
      </label>
      <label className={s.label}>
        Phone:
        <input
          type="tel"
          name="number"
          className={s.input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        ></input>
      </label>
      <button type="submit" className={s.btnAdd}>
        ADD CONTACT
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
// import PropTypes from 'prop-types';

// import { useState } from "react";
// import { nanoid } from 'nanoid';
// import styles from "./ContactForm.module.css"

// const ContactForm = ({ changeContact }) => {
//     const [name, setName] = useState("");
//     const [number, setNumber] = useState("");

// const handleNameChange = (event) => {
//     const {  value } = event.currentTarget;

//     setName( value );
//   };

//   const handleNumberChange = (event) => {
//     const { value } = event.currentTarget;

//     setNumber(value);
//   };
// const nameInputId = nanoid();
// const numberInputId = nanoid();

// const addContact = (event) => {
//         event.preventDefault();

//         changeContact(name, number);

//     setName( "");
//     setNumber("");
//   };

// return (<>
//             <form onSubmit={addContact}>
//                 <label className={styles.label} htmlFor={nameInputId}>Name
//                     <input className={styles.input}
//                         type="text"
//                         name="name"
//                         value={name}
//                         onChange={handleNameChange}
//                         id={nameInputId}
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         required
//                     /></label>
//                 <label className={styles.label} htmlFor={numberInputId}>Number
//                     <input className={styles.input}
//                         type="tel"
//                         value={number}
//                         onChange={handleNumberChange}
//                         id={numberInputId}
//                         name="number"
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         required
//                     /></label>
//                 <button className={styles.btnAdd} type="submit">Add contact</button>
//             </form>
//         </>);
//     };

// export default ContactForm;

// ContactForm.propTypes = {
//     changeContact: PropTypes.func.isRequired
// }
