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
          <h1 className="text-light"><a href="index.html"><span>Sureearntips</span></a></h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
           


            {/* <!-- <li><a className="nav-link scrollto" href="#team">Scores</a></li> --> */}
            <li className="dropdown"><a href="#"><span>Match tips</span> <i className="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">Daily tip</a></li>
                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Weekend fixed tip</a></li>
                <li><a href="#">Special fixed tip</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            <li><a className="getstarted scrollto" href="#about">Login</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        {/* <!-- .navbar --> */}

      </div>
      {/* <!-- End Header Container --> */}
    </div>
  </header>
  {/* <!-- End Header --> */}



 

        
      </>
    )
  }
}

export default Header
