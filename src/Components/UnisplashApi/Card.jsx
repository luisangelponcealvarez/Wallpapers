import React from "react";

const Card = ({ data }) => {
  // console.log(data);

  return (
    <div className="card-wallpaper">
      <div className="face front">
        <img
          className="card-img-top card-image"
          src={data.urls.full}
          alt={data.alt_description}
        />
        <h5>{data.slug}</h5>
      </div>

      <div className="face back">
        <h6>Nombre de la persona: {data.user.name}</h6>
        <p>Likes: {data.likes}</p>
        <div className="link">
          <a
            href={data.links.download}
            target="_blank"
            className="btn btn-outline-secondary
              m-2"
          >
            Download
          </a>

          <a
            href={data.urls.full}
            target="_blank"
            className="btn btn-outline-secondary"
          >
            Ver Wallpaper
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
