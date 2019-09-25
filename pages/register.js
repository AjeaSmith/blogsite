import React, { Component } from "react";
import Nav from "../components/nav";
import Head from "next/head";
export default class home extends Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <link rel="stylesheet" href="../static/css/styles.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700?display=swap"
            rel="stylesheet"
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
      </React.Fragment>
    );
  }
}
