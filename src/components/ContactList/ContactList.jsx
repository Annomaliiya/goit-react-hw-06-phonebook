import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";
import {
  getContacts,
  getFilter,
} from "../../redux/contacts/contacts-selectors";

import s from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
  const dispatch = useDispatch();
  const deleteContact = (id) => dispatch(actions.deleteContact(id));

  return (
    <ul className={s.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button className={s.btnDelete} onClick={() => deleteContact(id)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
export default ContactList;
