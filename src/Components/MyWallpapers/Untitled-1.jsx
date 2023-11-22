// CarpetaImgs.js
import React from "react";
import { importAll } from "require-context.macro";

const images = importAll(require.context("./img", false, /\.jpg$/));

export const ImageGallery = () => {
  return (
    <div>
      {Object.keys(images).map((imageKey, index) => (
        <img
          key={index}
          src={images[imageKey].default}
          alt={`Imagen ${index}`}
        />
      ))}
    </div>
  );
};
