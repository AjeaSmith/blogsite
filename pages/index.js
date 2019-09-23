import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Home = () => (
  <div>
    <Head>
      <title>Blog Site</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
    </Head>

    <Nav />
    <style jsx>{``}</style>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>
  </div>
);

export default Home;
