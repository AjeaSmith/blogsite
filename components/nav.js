import React, { Component } from "react";
import Link from "next/link";
export default class nav extends Component {
  render() {
    return (
      <React.Fragment>
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
        <style jsx>{`
        ul{
          margin-bottom: 0;
        }
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
          position: fixed;
          width: 100%;
          background: #fff;
          border-bottom: none;
        }
        #mainNav a {
          color: #313639;
          border-bottom: none;
        }
      `}</style>
      </React.Fragment>
    );
  }
}
