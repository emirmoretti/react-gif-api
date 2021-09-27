import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [input, setInput] = useState("");

  const handleInputChance = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length > 1) {
      setCategories((cats) => [input, ...cats]);
      setInput(""); //borro los valores
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Add category</h2>
      <input type="text" value={input} onChange={handleInputChance} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
