import React from "react";
import Head from "next/head";

const Nav = () => {
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
};
export default Nav;
