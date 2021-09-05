import React from "react";
// import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { getFilter } from "../../redux/contacts/contacts-selectors";
import { changeFilter } from "../../redux/contacts/contacts-actions";
import s from "./Filter.module.css";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={s.inputLabel}>
      Find contact by name
      <input
        className={s.inputFilter}
        type="text"
        name="filter"
        value={filter}
        placeholder="Start to type"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default Filter;
