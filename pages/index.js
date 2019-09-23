import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Nav />

    <div className="hero">hello world</div>

    <style jsx>{``}</style>
  </div>
);

export default Home;
