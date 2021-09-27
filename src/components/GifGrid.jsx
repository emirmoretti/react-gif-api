import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data:images, loading } = useFetchGifs(category); //Renombrando a la data 

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{category}</h3>
      {loading && <p className='animate__animated animate__flash'>Loading...</p>}
      <div className="card-grid">
        {images.map((images) => (
          <GifGridItem key={images.id} {...images} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
