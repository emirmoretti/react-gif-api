import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Samurai x"]);
  /*
  const handleAdd = () => {
    //setCategories([...categories, 'HunterXHunter']); // no se maneja con el .push los array sino
    setCategories((cats) => [...cats, "HunterXhunter"]); // con el operador spread
  };
  */
  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
