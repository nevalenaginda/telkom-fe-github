import React from "react";
import style from "./style.module.css";
function CardRepositories({ itm }) {
  return (
    <div className="col" key={itm.id}>
      <div className={`card shadow mx-3 my-3 ${style.zoomOut}`}>
        <div className={`card-body `}>
          <div className={`row ${style.content}`}>
            <h5 className="col-12 text-truncate">{itm.name}</h5>
            {itm.language && (
              <p className={`card-text`}>Language : {itm.language}</p>
            )}
          </div>
          <a
            href={itm.html_url}
            className="btn btn-dark"
            target="_blank"
            rel="noreferrer"
          >
            Visit Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardRepositories;
