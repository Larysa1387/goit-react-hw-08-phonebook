import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getContacts, getLoader } from "redux/contacts/contacts-selectors";
import * as contactsOperations from "redux/contacts/contacts-operations";
import PropTypes from "prop-types";
import shortid from "shortid";
import s from "./ContactForm.module.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getContacts);
  const loader = useSelector(getLoader);
  const dispatch = useDispatch();

  const contactInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleFormSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already exists in contacts`);
      return;
    }
    dispatch(contactsOperations.fetchAddContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className={s.ContactForm}>
      <div className={s.align}>
        <label htmlFor={contactInputId} className={s.inputLabel}>
          Name
          <input
            className={s.formInput}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            autoComplete="off"
            id={contactInputId}
            placeholder="Enter name"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor={numberInputId} className={s.inputLabel}>
          Number
          <input
            className={s.formInput}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            id={numberInputId}
            placeholder="+380..."
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button className={s.btnSubmit} type="submit" disabled={!name}>
        Add contact
      </button>
      {loader && <h2>Loading...</h2>}
    </form>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired)),
  // onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
