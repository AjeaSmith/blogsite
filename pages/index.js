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
    </Head>
    <Nav />
    <Articles />
    {/* <style jsx>{`
      body {
        font-size: 20px;
        color: #212529;
        font-family: Lora, "Times New Roman", serif;
      }
      p {
        line-height: 1.5;
        margin: 30px 0;
      }
      p a {
        text-decoration: underline;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: 800;
        font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
      }
      a {
        color: #212529;
        transition: all 0.2s;
      }
      a:focus,
      a:hover {
        color: #0085a1;
      }
      blockquote {
        font-style: italic;
        color: #868e96;
      }
      .section-heading {
        font-size: 36px;
        font-weight: 700;
        margin-top: 60px;
      }
      .caption {
        font-size: 14px;
        font-style: italic;
        display: block;
        margin: 0;
        padding: 10px;
        text-align: center;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
      }
      ::-moz-selection {
        color: #fff;
        background: #0085a1;
        text-shadow: none;
      }
      ::selection {
        color: #fff;
        background: #0085a1;
        text-shadow: none;
      }
      img::-moz-selection {
        color: #fff;
        background: 0 0;
      }
      img::selection {
        color: #fff;
        background: 0 0;
      }
      img::-moz-selection {
        color: #fff;
        background: 0 0;
      }
      #mainNav {
        position: absolute;
        border-bottom: 1px solid #e9ecef;
        background-color: #fff;
        font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
      }
      #mainNav .navbar-brand {
        font-weight: 800;
        color: #343a40;
      }
      #mainNav .navbar-toggler {
        font-size: 12px;
        font-weight: 800;
        padding: 13px;
        text-transform: uppercase;
        color: #343a40;
      }
      #mainNav .navbar-nav > li.nav-item > a {
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
      @media only screen and (min-width: 992px) {
        #mainNav {
          border-bottom: 1px solid transparent;
          background: 0 0;
        }
        #mainNav .navbar-brand {
          padding: 10px 20px;
          color: #fff;
        }
        #mainNav .navbar-brand:focus,
        #mainNav .navbar-brand:hover {
          color: rgba(255, 255, 255, 0.8);
        }
        #mainNav .navbar-nav > li.nav-item > a {
          padding: 10px 20px;
          color: #fff;
        }
        #mainNav .navbar-nav > li.nav-item > a:focus,
        #mainNav .navbar-nav > li.nav-item > a:hover {
          color: rgba(255, 255, 255, 0.8);
        }
      }
      @media only screen and (min-width: 992px) {
        #mainNav {
          transition: background-color 0.2s;
          transform: translate3d(0, 0, 0);
          -webkit-backface-visibility: hidden;
        }
        #mainNav.is-fixed {
          position: fixed;
          top: -67px;
          transition: transform 0.2s;
          border-bottom: 1px solid #fff;
          background-color: rgba(255, 255, 255, 0.9);
        }
        #mainNav.is-fixed .navbar-brand {
          color: #212529;
        }
        #mainNav.is-fixed .navbar-brand:focus,
        #mainNav.is-fixed .navbar-brand:hover {
          color: #0085a1;
        }
        #mainNav.is-fixed .navbar-nav > li.nav-item > a {
          color: #212529;
        }
        #mainNav.is-fixed .navbar-nav > li.nav-item > a:focus,
        #mainNav.is-fixed .navbar-nav > li.nav-item > a:hover {
          color: #0085a1;
        }
        #mainNav.is-visible {
          transform: translate3d(0, 100%, 0);
        }
      }
      header.masthead {
        margin-bottom: 50px;
        background: no-repeat center center;
        background-color: #868e96;
        background-attachment: scroll;
        position: relative;
        background-size: cover;
      }
      header.masthead .overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: #212529;
        opacity: 0.5;
      }
      header.masthead .page-heading,
      header.masthead .post-heading,
      header.masthead .site-heading {
        padding: 200px 0 150px;
        color: #fff;
      }
      @media only screen and (min-width: 768px) {
        header.masthead .page-heading,
        header.masthead .post-heading,
        header.masthead .site-heading {
          padding: 200px 0;
        }
      }
      header.masthead .page-heading,
      header.masthead .site-heading {
        text-align: center;
      }
      header.masthead .page-heading h1,
      header.masthead .site-heading h1 {
        font-size: 50px;
        margin-top: 0;
      }
      header.masthead .page-heading .subheading,
      header.masthead .site-heading .subheading {
        font-size: 24px;
        font-weight: 300;
        line-height: 1.1;
        display: block;
        margin: 10px 0 0;
        font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
      }
      @media only screen and (min-width: 768px) {
        header.masthead .page-heading h1,
        header.masthead .site-heading h1 {
          font-size: 80px;
        }
      }
      header.masthead .post-heading h1 {
        font-size: 35px;
      }
      header.masthead .post-heading .meta,
      header.masthead .post-heading .subheading {
        line-height: 1.1;
        display: block;
      }
      header.masthead .post-heading .subheading {
        font-size: 24px;
        font-weight: 600;
        margin: 10px 0 30px;
        font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
      }
      header.masthead .post-heading .meta {
        font-size: 20px;
        font-weight: 300;
        font-style: italic;
        font-family: Lora, "Times New Roman", serif;
      }
      header.masthead .post-heading .meta a {
        color: #fff;
      }
      @media only screen and (min-width: 768px) {
        header.masthead .post-heading h1 {
          font-size: 55px;
        }
        header.masthead .post-heading .subheading {
          font-size: 30px;
        }
      }
      .post-preview > a {
        color: #212529;
      }
      .post-preview > a:focus,
      .post-preview > a:hover {
        text-decoration: none;
        color: #0085a1;
      }
      .post-preview > a > .post-title {
        font-size: 30px;
        margin-top: 30px;
        margin-bottom: 10px;
      }
      .post-preview > a > .post-subtitle {
        font-weight: 300;
        margin: 0 0 10px;
      }
      .post-preview > .post-meta {
        font-size: 18px;
        font-style: italic;
        margin-top: 0;
        color: #868e96;
      }
      .post-preview > .post-meta > a {
        text-decoration: none;
        color: #212529;
      }
      .post-preview > .post-meta > a:focus,
      .post-preview > .post-meta > a:hover {
        text-decoration: underline;
        color: #0085a1;
      }
      @media only screen and (min-width: 768px) {
        .post-preview > a > .post-title {
          font-size: 36px;
        }
      }
      .floating-label-form-group {
        font-size: 14px;
        position: relative;
        margin-bottom: 0;
        padding-bottom: 0.5em;
        border-bottom: 1px solid #dee2e6;
      }
      .floating-label-form-group input,
      .floating-label-form-group textarea {
        font-size: 1.5em;
        position: relative;
        z-index: 1;
        padding: 0;
        resize: none;
        border: none;
        border-radius: 0;
        background: 0 0;
        box-shadow: none !important;
        font-family: Lora, "Times New Roman", serif;
      }
      .floating-label-form-group input::-webkit-input-placeholder,
      .floating-label-form-group textarea::-webkit-input-placeholder {
        color: #868e96;
        font-family: Lora, "Times New Roman", serif;
      }
      .floating-label-form-group label {
        font-size: 0.85em;
        line-height: 1.764705882em;
        position: relative;
        z-index: 0;
        top: 2em;
        display: block;
        margin: 0;
        transition: top 0.3s ease, opacity 0.3s ease;
        vertical-align: middle;
        vertical-align: baseline;
        opacity: 0;
      }
      .floating-label-form-group .help-block {
        margin: 15px 0;
      }
      .floating-label-form-group-with-value label {
        top: 0;
        opacity: 1;
      }
      .floating-label-form-group-with-focus label {
        color: #0085a1;
      }
      form .form-group:first-child .floating-label-form-group {
        border-top: 1px solid #dee2e6;
      }
      footer {
        padding: 50px 0 65px;
      }
      footer .list-inline {
        margin: 0;
        padding: 0;
      }
      footer .copyright {
        font-size: 14px;
        margin-bottom: 0;
        text-align: center;
      }
      .btn {
        font-size: 14px;
        font-weight: 800;
        padding: 15px 25px;
        letter-spacing: 1px;
        text-transform: uppercase;
        border-radius: 0;
        font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
      }
      .btn-primary {
        background-color: #0085a1;
        border-color: #0085a1;
      }
      .btn-primary:active,
      .btn-primary:focus,
      .btn-primary:hover {
        color: #fff;
        background-color: #00657b !important;
        border-color: #00657b !important;
      }
      .btn-lg {
        font-size: 16px;
        padding: 25px 35px;
      }
    `}</style> */}
  </React.Fragment>
);

export default Home;
