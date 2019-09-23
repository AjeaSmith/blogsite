import React from "react";
import Link from "next/link";
import Head from "next/head";

const Nav = () => (
  <React.Fragment>
    <Head>
      <title>Blog Site</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <link rel="stylesheet" href="../static/css/clean-blog.min.css" />
    </Head>
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand" href="index.html">
          My Blog
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/register">
                <a className="nav-link">Login / Register</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <header
      className="masthead"
      style={{ backgroundImage: "url('../static/post-bg.jpg')" }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <h1>Awesome Blog</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  </React.Fragment>
);
export default Nav;
