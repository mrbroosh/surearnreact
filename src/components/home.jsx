import React from "react";
import Header from "./header";
import Footers from "./footers";
import Popup from "./Popup";
import Weekendpopup from "./weekendpopup";
import Specialpopup from "./specialpopup";
import { useState } from "react";

function Home() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [weekendbuttonPopup, setWeeekendButtonPopup] = useState(false);
  const [specialbuttonPopup, setSpecialButtonPopup] = useState(false);

  return (
    <>
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
              <div className="col-lg-3">
                <div className="widget-next-match">
                  <div className="widget-title">
                    <h6>Free tip</h6>
                  </div>
                  <div className="widget-body mb-3">
                    <div className="widget-vs">
                      <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
                        <div className="team-1 text-center">
                          <h3></h3>
                        </div>
                        <div>
                          <span className="vs">
                            <span>vs</span>
                          </span>
                        </div>
                        <div className="team-2 text-center">
                          <h3></h3>
                        </div>
                      </div>
                      <strong className="text-primary">
                        Prediction:
                      </strong>{" "}
                      <br />
                      <strong className="text-primary">Odds:</strong>
                    </div>
                    {/* <br />

                      <br />
                      <strong className="text-primary">
                        Unlock Match tips
                      </strong> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="widget-next-match">
                  <div className="widget-title">
                    <h6>Daily Tip</h6>
                  </div>
                  <div className="widget-body mb-3">
                    <div className="widget-vs">
                      {/* <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
                        <div className="team-1 text-center">
                          <h3>---</h3>
                        </div>
                        <div>
                          <span className="vs">
                            <span>
                              22<sup>nd</sup> Oct.
                            </span>
                          </span>
                        </div>
                        <div className="team-2 text-center">
                          <h3>---</h3>
                        </div>
                      </div> */}
                      {/* <strong className="text-primary">
                          Prediction: draw
                        </strong>{" "} */}
                      <div className="team-1 text-center">
                        <h3>Date: 20/10/2021</h3>
                        <h3></h3>
                      </div>
                      <br />
                      <h1 className="text-primary">Odds: 3.5</h1>
                    </div>
                    <br />
                    <button
                      className="btn-get-started scrollto"
                      onClick={() => setButtonPopup(true)}
                    >
                      Buy Daily Tip
                    </button>
                  </div>
                  <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h1 className="text-success">
                      <u>Daily Tip</u>
                    </h1>

                    <p> Go to "Safaricom- Buy Goods & Services"</p>
                    <p>
                      Enter Till No.{" "}
                      <span style={{ color: "red" }}>9139603</span>
                    </p>
                    <table
                    >
                      <tr>
                        <th>Daily package</th>
                        <th>Weekly package</th>
                        <th>Monthly package</th>
                      </tr>
                      <tr>
                        <td>
                          {" "}
                          <p>
                            Amount:{" "}
                            <span style={{ color: "blue" }}>Ksh. 100.</span>{" "}
                          </p>
                        </td>
                        <td>
                          <p>
                            Amount:{" "}
                            <span style={{ color: "blue" }}>Ksh. 600.</span>{" "}
                          </p>
                        </td>
                        <td>
                          <p>
                            Amount:{" "}
                            <span style={{ color: "blue" }}>Ksh. 1800.</span>{" "}
                          </p>
                        </td>
                      </tr>
                    </table>

                    <p><br/></p>

                    <p> Enter your PIN Number then click "OK"</p>
                    <p>
                      {" "}
                      You will receive match tips via sms on your mobile phone
                    </p>
                  </Popup>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="widget-next-match">
                  <div className="widget-title">
                    <h6>Weekend Tip</h6>
                  </div>
                  <div className="widget-body mb-3">
                    <div className="widget-vs">
                      <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
                        {/* <div className="team-1 text-center">
                          <h3>---</h3>
                        </div>
                        {/* <div>
                          <span className="vs">
                            <span>
                              VS
                            </span>
                          </span>
                        </div> */}
                        {/* <div className="team-2 text-center">
                          <h3>---</h3>
                        </div>  */}
                      </div>
                      {/* <strong className="text-primary">
                          Prediction: draw
                        </strong>{" "} */}
                      <div className="team-1 text-center">
                        <h3>Date: 20/10/2021</h3>
                        <h3></h3>
                      </div>
                      <br />
                      <h1 className="text-primary">Odds: 48</h1>
                    </div>
                    <br />
                    <button
                      className="btn-get-started scrollto"
                      onClick={() => setWeeekendButtonPopup(true)}
                    >
                      Buy Weekend Tip
                    </button>
                  </div>
                  <Weekendpopup
                    trigger={weekendbuttonPopup}
                    setTrigger={setWeeekendButtonPopup}
                  >
                    <h1 className="text-success">
                      <u>Weekend Tip</u>
                    </h1>
                    <p style={{ borderBottom: "1px solid grey" }}>
                      {" "}
                      Go to "Safaricom- Buy Goods & Services"
                    </p>
                    <p style={{ borderBottom: "1px solid grey" }}>
                      Enter Till No.{" "}
                      <span style={{ color: "red" }}>9139603</span>
                    </p>
                    <p style={{ borderBottom: "1px solid grey" }}>
                      Enter amount:{" "}
                      <span style={{ color: "red" }}>Ksh. 500.</span> click "OK"
                    </p>
                    <p style={{ borderBottom: "1px solid grey" }}>
                      {" "}
                      Enter your PIN Number then click "OK"
                    </p>
                    <p style={{ borderBottom: "1px solid grey" }}>
                      {" "}
                      You will receive match tips via sms on your mobile phone
                    </p>
                  </Weekendpopup>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="widget-next-match">
                  <div className="widget-title">
                    <h6>Weekend Tip</h6>
                  </div>
                  <div className="widget-body mb-3">
                    <div className="widget-vs">
                      {/* <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
                        <div className="team-1 text-center">
                          <h3>---</h3>
                        </div>
                        <div>
                          <span className="vs">
                            <span>
                              22<sup>nd</sup> Oct.
                            </span>
                          </span>
                        </div>
                        <div className="team-2 text-center">
                          <h3>---</h3>
                        </div>
                      </div> */}
                      {/* <strong className="text-primary">
                          Prediction: draw
                        </strong>{" "} */}
                      <div className="team-1 text-center">
                        <h3>Date: 20/10/2021</h3>
                        <h3></h3>
                      </div>
                      <br />
                      <h1 className="text-primary">Odds: 80</h1>
                    </div>
                    <br />
                    <button
                      className="btn-get-started scrollto"
                      onClick={() => setSpecialButtonPopup(true)}
                    >
                      Buy Special Tip
                    </button>
                  </div>
                  <Specialpopup
                    trigger={specialbuttonPopup}
                    setTrigger={setSpecialButtonPopup}
                  >
                    <h1 className="text-success">
                      <u>Special Tip</u>
                    </h1>
                    <p style={{ borderBottom: "1px solid grey" }}>
                      {" "}
                      Go to "Safaricom- Buy Goods & Services"
                    </p>
                    <p style={{ borderBottom: "1px solid grey" }}>
                      Enter Till No.{" "}
                      <span style={{ color: "red" }}>9139603</span>
                    </p>
                    <p style={{ borderBottom: "1px solid grey" }}>
                      Enter amount:{" "}
                      <span style={{ color: "red" }}>Ksh. 1200.</span> click
                      "OK"
                    </p>
                    <p style={{ borderBottom: "1px solid grey" }}>
                      {" "}
                      Enter your PIN Number then click "OK"
                    </p>
                    <p style={{ borderBottom: "1px solid grey" }}>
                      {" "}
                      You will receive match tips via sms on your mobile phone
                    </p>
                  </Specialpopup>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />

          <div className="col-lg-6">
            {/* <h1>Your sure earning tips</h1>
                  <a href="#about" className="btn-get-started scrollto">
                    Subscribe
                  </a> */}
            {/* <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2861291900816377"
                    crossorigin="anonymous"
                  ></script> */}
            {/* <!-- adunit1 --> */}
            {/* <ins
                    className="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-client="ca-pub-2861291900816377"
                    data-ad-slot="8249363484"
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                  ></ins>
                  <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                  </script> */}
          </div>
        </div>
      </section>
      {/* <!-- End Hero --> */}

      {/* <!-- ======= Footer ======= --> */}
      <Footers />
    </>
  );
}

export default Home;
