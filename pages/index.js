import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Articles from "../components/articles";

const Home = () => (
  <React.Fragment>
    <Head>
      <title>Blog Site</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <link rel="stylesheet" href="../static/css/clean-blog.min.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
        rel="stylesheet"
        type="text/css"
      />
      <link href="../static/js/bootstrap.js" />
    </Head>
    <Nav />
    <Articles />
  </React.Fragment>
);

export default Home;
