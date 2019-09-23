import React from "react";
import Link from "next/link";
import Head from "next/head";

const Nav = props => {
  console.log(props);
  const openMenu = () => {
    console.log("opened");
  };
  return (
    <React.Fragment>
      <Head>
        <title>Blog Site</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="../static/css/clean-blog.min.css" />
      </Head>
      <nav className="navbar fixed-top" id="mainNav">
        <div className="container flexbox-container">
          <Link href="/">
            <a className="navbar-brand">My Blog</a>
          </Link>
          <ul className="flexbox">
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
      <style jsx>{`
        .flexbox {
          align-items: center;
          display: flex;
          list-style: none;
        }
        .flexbox li a {
          font-szie: 0.4em;
          color: #fff;
        }
        .flexbox-container {
          align-items: center
          display: flex;
        }
        .flexbox-container ul{
          font-size: 0.8em;
          font-weight: bold;
        }
        #mainNav {
          background: transparent;
          border-bottom: none;
        }
        #mainNav a {
          color: #fff;
          border-bottom: none;
        }
      `}</style>
    </React.Fragment>
  );
};
export default Nav;
