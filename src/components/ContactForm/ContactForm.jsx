import PropTypes from 'prop-types';

import { useState } from "react";
import { nanoid } from 'nanoid';
import styles from "./ContactForm.module.css"

const ContactForm = ({ changeContact }) => { 
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");


const handleNameChange = (event) => {
    const {  value } = event.currentTarget;

    setName( value );
  };


  const handleNumberChange = (event) => {
    const { value } = event.currentTarget;

    setNumber(value);
  };
const nameInputId = nanoid();
const numberInputId = nanoid();
    
    
const addContact = (event) => {
        event.preventDefault();

        changeContact(name, number);
    

    setName( "");
    setNumber("");
  };

return (<>
            <form onSubmit={addContact}>
                <label className={styles.label} htmlFor={nameInputId}>Name
                    <input className={styles.input}
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        id={nameInputId}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        required
                    /></label>
                <label className={styles.label} htmlFor={numberInputId}>Number
                    <input className={styles.input}
                        type="tel"
                        value={number}
                        onChange={handleNumberChange}
                        id={numberInputId}
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        required
                    /></label>
                <button className={styles.btnAdd} type="submit">Add contact</button>
            </form>
        </>);
    };


export default ContactForm;

ContactForm.propTypes = {
    changeContact: PropTypes.func.isRequired
}