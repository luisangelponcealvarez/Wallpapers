import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card-wallpaper">
      <div className="face front">
        <img
          className="card-img-top card-image wallpaper"
          src={data.urls.full}
          alt={data.alt_description}
        />

        <div className="user">
          <img
            className="profile-image m-2"
            src={data.user.profile_image.small}
            alt={data.alt_description}
          />
          <h5>{data.user.name}</h5>
        </div>
      </div>

      <div className="face back">
        <h6>name: {data.user.name}</h6>

        <div className="link">
          <a
            href={data.urls.full}
            target="_blank"
            className="btn btn-outline-secondary
              m-2"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
