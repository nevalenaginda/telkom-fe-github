import React from "react";
import style from "./style.module.css";
function CardRepositories({ itm }) {
  return (
    <div className="col">
      <div className={`card shadow mx-3 my-3 ${style.zoomOut}`}>
        <div className={`card-body `}>
          <div class={`row ${style.content}`}>
            <h5 className="col-12 text-truncate">{itm.name}</h5>
            <p className={`card-text`}>{itm.language}</p>
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
