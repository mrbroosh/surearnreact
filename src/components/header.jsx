import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <>
        {/* <!-- ======= Header ======= --> */}
        <header id="header" className="fixed-top d-flex align-items-center">
          <div className="container">
            <div className="header-container d-flex align-items-center justify-content-between">
              <div className="logo">
                <h1 className="text-light">
                  <a href="index.html">
                    <span>Sureearntips</span>
                  </a>
                </h1>
                {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
              </div>

              <nav id="navbar" class="navbar">
                <ul>
                  <li class="dropdown">
                    <a href="#">
                      <span>Match tips</span> <i class="bi bi-chevron-down"></i>
                    </a>
                    <ul>
                      <li class="dropdown">
                        <a href="#">
                          <span>Daily Tip</span>{" "}
                          <i class="bi bi-chevron-right"></i>
                        </a>
                        <ul>
                          <li>
                            <a href="#">Daily tip ~ Ksh.100</a>
                          </li>
                          <li>
                            <a href="#">Weekly tip ~ Ksh.600 </a>
                          </li>
                          <li>
                            <a href="#">Monthly tip ~ Ksh.1800</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Weekend tip ~ Ksh.500</a>
                      </li>
                      <li>
                        <a href="#">Special fixed ~ Ksh.1200</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a class="nav-link scrollto" href="#contact"></a>
                  </li>
                  <li>
                    <a class="nav-link scrollto" href="#contact"></a>
                  </li>
                  <li>
                    <a class="nav-link scrollto" href="#contact"></a>
                  </li>
                  <li>
                    <a class="nav-link scrollto" href="#contact"></a>
                  </li>
                  <li>
                    <a class="nav-link scrollto" href="#contact"></a>
                  </li>
                  <li>
                    <a class="nav-link scrollto" href="#contact"></a>
                  </li>
                  <li>
                    <a class="nav-link scrollto" href="#contact"></a>
                  </li>
                  <li>
                    <a class="nav-link scrollto" href="#contact"></a>
                  </li>
                  {/* <li><a class="getstarted scrollto" href="#about"></a></li> */}
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
              </nav>
              {/* <!-- .navbar --> */}
            </div>
            {/* <!-- End Header Container --> */}
          </div>
        </header>
        {/* <!-- End Header --> */}
      </>
    );
  }
}

export default Header
