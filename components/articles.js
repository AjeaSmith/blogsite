import React, { Component } from "react";
import Link from "next/link";
class articles extends Component {
  render() {
    return (
      <React.Fragment>
        <article>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="post-preview">
                  <Link href="/register">
                    <a href="#">
                      <h2 className="post-title">A post title</h2>
                      <h3 className="post-subtitle">
                        Never in all their history have men been able truly to
                        conceive of the world as one: a single sphere, a globe,
                        having the qualities of a globe, a round earth in which.
                      </h3>
                    </a>
                  </Link>
                  <p className="post-meta">
                    Posted by <a href="#">author name</a> on September 24, 2019
                  </p>
                </div>
                <div className="post-preview">
                  <a href="#">
                    <h2 className="post-title">A post title</h2>
                    <h3 className="post-subtitle">
                      an equal earth which all men occupy as equals. The
                      airman's earth, if free men make it, will be truly round:
                      a globe in practice, not in theory.
                    </h3>
                  </a>
                  <p className="post-meta">
                    Posted by <a href="#">author name</a> on September 24, 2019
                  </p>
                </div>
                <p>
                  Placeholder text by
                  <a href="http://spaceipsum.com/">Space Ipsum</a>. Photographs
                  by
                  <a href="https://www.flickr.com/photos/nasacommons/">
                    NASA on The Commons
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </article>
      </React.Fragment>
    );
  }
}
export default articles;
