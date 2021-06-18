import React from "react";

function Footer() {
  return (
    <footer className="bg-dark mt-5">
      <div
        className="container d-flex justify-content-center  align-items-center"
        style={{
          height: "100px",
        }}
      >
        <a
          className="text-white"
          style={{
            fontSize: "20px",
            fontWeight: "600",
            textDecoration: "none",
          }}
          href="https:github.com/nevalenaginda"
          target="_blank"
          rel="noreferrer"
        >
          © Nevalen Aginda Prasetyo 2021{" "}
        </a>{" "}
      </div>{" "}
    </footer>
  );
}

export default Footer;
