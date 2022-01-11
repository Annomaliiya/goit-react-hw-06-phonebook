import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";
import { getFilter } from "../../redux/contacts/contacts-selectors";
import s from "./Filter.module.css";

function Filter() {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFilter = (e) => dispatch(actions.filterContacts(e.target.value));

  return (
    <label className={s.label}>
      Filter{" "}
      <input
        type="text"
        className={s.input}
        name="filter"
        value={filterValue}
        onChange={changeFilter}
      />
    </label>
  );
}

export default Filter;

// import PropTypes from 'prop-types';
// import styles from './Filter.module.css';

// const Filter = ({ filter, handleChange,filterInputId }) => {

//   return (
//       <>
//         <label className={styles.label} htmlFor={filterInputId}>Find contacts by name
//           <input className={styles.input}
//             type="text"
//             name="filter"
//             value={filter}
//             onChange={handleChange}
//             id={filterInputId}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           /></label>
//       </>)
// }
// export default Filter;

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   handleChange:PropTypes.func.isRequired
// }
