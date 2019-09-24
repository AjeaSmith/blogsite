import React, { Component } from "react";
import Head from "next/head";
import Nav from "../components/nav";
export default class home extends Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <link rel="stylesheet" href="../static/css/bootstrap.min.css" />
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
        </Head>
        <Nav />
        <br></br>
        <div className="container login-container">
          <div className="row">
            <div className="col-md-6 login-form-1">
              <h3>Login</h3>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email *"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Your Password *"
                  />
                </div>
                <div className="form-group">
                  <input type="submit" className="btnSubmit" value="Login" />
                </div>
                <div className="form-group">
                  <a href="#" className="ForgetPwd">
                    Forget Password?
                  </a>
                </div>
              </form>
            </div>
            <div className="col-md-6 login-form-2">
              <h3>Register</h3>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name *"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Username *"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Your Password *"
                  />
                </div>
                <div className="form-group">
                  <input type="submit" className="btnSubmit" />
                </div>
                <div className="form-group">
                  <a href="#" className="ForgetPwd">
                    Forget Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <style jsx>{`
          .login-container {
            margin-top: 5%;
            margin-bottom: 5%;
          }
          .login-form-1 {
            padding: 5%;
            box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2),
              0 9px 26px 0 rgba(0, 0, 0, 0.19);
          }
          .login-form-1 h3 {
            text-align: center;
            color: #333;
          }
          .login-form-2 {
            padding: 5%;
            background: #0062cc;
            box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2),
              0 9px 26px 0 rgba(0, 0, 0, 0.19);
          }
          .login-form-2 h3 {
            text-align: center;
            color: #fff;
          }
          .login-container form {
            padding: 10%;
          }
          .btnSubmit {
            width: 50%;
            border-radius: 1rem;
            padding: 1.5%;
            border: none;
            cursor: pointer;
          }
          .login-form-1 .btnSubmit {
            font-weight: 600;
            color: #fff;
            background-color: #0062cc;
          }
          .login-form-2 .btnSubmit {
            font-weight: 600;
            color: #0062cc;
            background-color: #fff;
          }
          .login-form-2 .ForgetPwd {
            color: #fff;
            font-weight: 600;
            text-decoration: none;
          }
          .login-form-1 .ForgetPwd {
            color: #0062cc;
            font-weight: 600;
            text-decoration: none;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
