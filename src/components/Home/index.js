import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import axios from "axios";
import CardRepositories from "../CardRepositories";

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
    <div className="bg-light">
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
      <div className="container min-vh-100">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-1 mt-5">
          {data &&
            data.map((itm, id) => {
              return <CardRepositories itm={itm} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
