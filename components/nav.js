import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
class nav extends Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
            rel="stylesheet"
            type="text/css"
          />
          <link rel="stylesheet" href="../static/css/bootstrap.min.css" />
          <link rel="stylesheet" href="../static/css/clean-blog.min.css" />
          <link rel="stylesheet" href="../static/css/styles.css" />
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
              <span>|</span>
              <li className="nav-item">
                <Link href="/register">
                  <a className="nav-link">Login / Register</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
export default nav;
