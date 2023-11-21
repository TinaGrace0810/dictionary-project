import React from "react";
import "./Photo.css";

export default function Photos(props) {
  if (props.photo) {
    return (
      <section className="Photo">
        <div className="row">
          {props.photo.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={photo.src.photographer}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
