import React from "react";
import Head from "next/head";
import Articles from "../components/articles";
import Nav from "../components/nav";

const Home = () => (
  <React.Fragment>
    <Head>
      <title>Blog Site</title>
      <link rel="stylesheet" href="../static/css/bootstrap.min.css" />
      <link rel="stylesheet" href="../static/css/clean-blog.min.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700?&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Nav />
    <header
      className="masthead"
      style={{ backgroundImage: "url('../static/post-bg.jpg')" }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <h1>Share your stories</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <Articles />
  </React.Fragment>
);

export default Home;
