import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import axios from "axios";
import CardRepositories from "../CardRepositories";

function Home() {
  const [data, setData] = useState([]);
  const [nextData, setNextData] = useState([]);
  const [err, setErr] = useState({ status: false, message: "" });
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("name");
  const [loading, setLoading] = useState("false");
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.github.com/users/nevalenaginda/repos?sort=${sort}&direction=${order}&page=${page}&per_page=12`
      )
      .then((res) => {
        setData(res.data);
        setErr({ status: false, message: "" });
        axios
          .get(
            `https://api.github.com/users/nevalenaginda/repos?sort=${sort}&direction=${order}&page=${
              page + 1
            }&per_page=12`
          )
          .then((resNext) => {
            console.log(resNext.data);
            setNextData(resNext.data);
            setLoading(false);
          })
          .catch((err) => {
            setErr({ status: true, message: err.response.data.message });
            setData([]);
            setLoading(false);
          });
      })
      .catch((err) => {
        setErr({ status: true, message: err.response.data.message });
        setData([]);
        setLoading(false);
      });
  }, [sort, order, page]);
  return (
    <div className="min-vh-100">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <div className={style.logo}>My Github</div>
          <form className="d-flex mb-2 d-none">
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
        {data.length > 0 && (
          <h1 className="mt-5 text-center mb-4">
            List github repositories of user {data[0].owner.login}
          </h1>
        )}
        <div className="dropdown d-inline  me-auto mx-3">
          <button
            className="btn btn-dark dropdown-toggle shadow-none mt-3"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li onClick={() => setSort("updated_at")}>
              <div style={{ width: "25px" }} className="d-inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  name="updated_at"
                  className={`bi bi-check ms-2 mb-1 ${
                    sort === "updated_at" ? "d-inline" : "d-none"
                  }`}
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </div>
              <div className="dropdown-item d-inline">Last Updated</div>
            </li>
            <hr className="p-0 m-0" />

            <li onClick={() => setSort("name")}>
              <div style={{ width: "25px" }} className="d-inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className={`bi bi-check ms-2 mb-1 ${
                    sort === "name" ? "d-inline" : "d-none"
                  }`}
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </div>
              <div className="dropdown-item d-inline">Name</div>
            </li>
            <hr className="p-0 m-0" />
            <li
              onClick={() => {
                setSort("stargazers_count");
              }}
            >
              <div style={{ width: "25px" }} className="d-inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className={`bi bi-check ms-2 mb-1 ${
                    sort === "stargazers_count" ? "d-inline" : "d-none"
                  }`}
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </div>
              <div className="dropdown-item d-inline">Stars</div>
            </li>
          </ul>
        </div>
        <button
          className="btn bg-dark shadow-none text-white ms-2 mt-3"
          onClick={() => (order === "asc" ? setOrder("desc") : setOrder("asc"))}
        >
          {order === "asc" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
              />
            </svg>
          )}
        </button>

        {loading ? (
          <div
            className="row mt-5 d-flex justify-content-center align-items-center"
            style={{ height: "70vh" }}
          >
            <div
              className="spinner-grow"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : !err.status ? (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-1 mt-5">
            {data.map((itm, id) => {
              return <CardRepositories itm={itm} />;
            })}
          </div>
        ) : (
          <div className="row d-flex justify-content-center align-items-middle mt-5">
            <h5 className="text-center">Error: {err.message}</h5>
          </div>
        )}
      </div>
      <div className="row d-flex justify-content-center align-items-end bg-light">
        <div
          className="btn-group mx-auto mt-3"
          role="group"
          aria-label="Basic example"
          style={{ width: "150px" }}
        >
          <button
            type="button"
            className="btn btn-dark shadow"
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-dark shadow"
            onClick={() => setPage(page + 1)}
            disabled={nextData.length < 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
