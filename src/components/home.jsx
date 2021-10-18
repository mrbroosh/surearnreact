import React, { Component } from 'react'
import Header from './header'
import Footers from './footers';

class Home extends Component {
  render() {
    return (
      <div id="main">
        <Header />
        {/* <!-- ======= Hero Section ======= --> */}
        <section id="hero" className="d-flex align-items-center">
          <div
            className="container text-center position-relative"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="widget-next-match">
                    <div className="widget-title">
                      <h3>Premier League - Free tip</h3>
                    </div>
                    <div className="widget-body mb-3">
                      <div className="widget-vs">
                        <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
                          <div className="team-1 text-center">
                            <h3>Chelsea</h3>
                          </div>
                          <div>
                            <span className="vs">
                              <span>
                                vs <br /> 17:45 GMT
                              </span>
                            </span>
                          </div>
                          <div className="team-2 text-center">
                            <h3>Man City</h3>
                          </div>
                        </div>
                        <strong className="text-primary">
                          Prediction: Chelsea win
                        </strong>{" "}
                        <br />
                        <strong className="text-primary">Odds: 2.8</strong>
                      </div>
                      <br />
                      <div className="widget-vs">
                        <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
                          <div className="team-1 text-center">
                            <h3>- -</h3>
                          </div>
                          <div>
                            <span className="vs">
                              <span>
                                vs
                                <br />
                                09
                                <sup>
                                  <small>th</small>
                                </sup>{" "}
                                Oct
                                <br />
                                17:45 GMT
                              </span>
                            </span>
                          </div>
                          <div className="team-2 text-center">
                            <h3>- - </h3>
                          </div>
                        </div>
                        <strong className="text-primary">
                          Prediction: -- win or Draw
                        </strong>{" "}
                        <br />
                        <strong className="text-primary">Odds: 3.5</strong>
                        <br />
                        <strong className="text-primary">Unlock Match tips</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h1>Your sure earning tips</h1>
                  <a href="#about" className="btn-get-started scrollto">
                    Subscribe
                  </a>
                  <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2861291900816377"
                    crossorigin="anonymous"
                  ></script>
                  {/* <!-- adunit1 --> */}
                  <ins
                    className="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-client="ca-pub-2861291900816377"
                    data-ad-slot="8249363484"
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                  ></ins>
                  <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                  </script>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Hero --> */}

        {/* <!-- ======= Footer ======= --> */}
        <Footers />
      </div>
    );
  }
}

export default Home
