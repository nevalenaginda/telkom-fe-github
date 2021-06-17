import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import axios from "axios";

function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/nevalenaginda/repos")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <div className={style.logo}>My Github</div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="container">
        <div className="row bg-danger mx-auto mt-5">
          {data &&
            data.map((itm, id) => {
              return (
                <div
                  className="card mx-3 my-3"
                  style={{ width: "450px", border: "3px solid black" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{itm.name}</h5>
                    <p className="card-text">{itm.language}</p>
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
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
