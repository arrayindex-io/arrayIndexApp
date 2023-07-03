// import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {
  render (){
    return (


  <div className="perspective effect-rotate-left">
    <div className="container"><div className="outer-nav--return" />
      <div id="viewport" className="l-viewport">
        <div className="l-wrapper">
          <header className="header">
            <a className="header--logo" href="#0">
              <img src="assets/img/logo.png" alt="ArrayIndex" />
              <p>arrayIndex</p>
            </a>
            <a className="header--logo" href="#0">
              <img src="assets/img/arrayindex-logo.png" alt="ArrayIndex" style={{"opacity":"0.2","filter":"alpha(opacity=20)"}} />
            </a>
            <button className="header--cta cta">Hire Us</button>
            <div className="header--nav-toggle">
              <span />
            </div>
          </header>
          <nav className="l-side-nav">
            <ul className="side-nav">
              <li className="is-active"><span>Home</span></li>
              <li><span>Works</span></li>
              <li><span>About</span></li>
              <li><span>Contact</span></li>
              <li><span>Hire us</span></li>
            </ul>
          </nav>
          <ul className="l-main-content main-content">
            <li className="l-section section section--is-active">
              <div className="intro">
                <div className="intro--banner">
                  <h1>Your next<br />interactive<br />experience</h1>
                  <button className="cta">Hire Us
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style={{"enable-background":"new 0 0 150 118"}} xmlSpace="preserve">
                      <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                        <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z" />
                      </g>
                    </svg>
                    <span className="btn-background" />
                  </button>
                  <img src="assets/img/introduction-visual.png" alt="Welcome" />
                </div>
                <div className="intro--options">
                  <a href="#0">
                    <h3>Microservices</h3>
                    <p>Microservices, API Gateways, Pivotal Cloud Foundry (PCF), AWS, Azure, GCP, SpringBoot, WebFlux ,Docker, Kubernetes, Kafka, Grafana, Graphite, AWS, Galera Cluster, MariaDB ....</p>
                  </a>
                  <a href="#0">
                    <h3>Cloud Migration</h3>
                    <p>Migrating large databases, Create a security strategy, Copy over data, Move business intelligence, Switch production from on-premises to cloud......</p>
                  </a>
                  <a href="#0">
                    <h3>Strategic consulting</h3>
                    <p>Every successful project has to start with a crisp strategy and measurable objectives. Targeted investments guarantee added value for your platform. In order to maximize the return on investment (ROI)</p>
                  </a>
                </div>
              </div>
            </li>
            <li className="l-section section">
              <div className="work">
                <h2>Selected work</h2>
                <div className="work--lockup">
                  <ul className="slider">
                    <li className="slider--item slider--item-left">
                      <a href="#0">
                        <div className="slider--item-image">
                          <img src="assets/img/work-victory.jpg" alt="Victory" />
                        </div>
                        <p className="slider--item-title">Victory</p>
                        <p className="slider--item-description">Embody your project’s mission and objectives, ensure the production team reaches its peak potential, mobilize all stakeholders involved and guide their actions with a global vision.</p>
                      </a>
                    </li>
                    <li className="slider--item slider--item-center">
                      <a href="#0">
                        <div className="slider--item-image">
                          <img src="assets/img/service-mesh.jpg" alt="Service Mesh" />
                        </div>
                        <p className="slider--item-title">Service Mesh</p>
                        <p className="slider--item-description">How the Linkerd service mesh can help businesses avoid catastrophic app failure</p>
                      </a>
                    </li>
                    <li className="slider--item slider--item-right">
                      <a href="#0">
                        <div className="slider--item-image">
                          <img src="assets/img/work-alex-nowak.jpg" alt="Alex Nowak" />
                        </div>
                        <p className="slider--item-title">Technical expertise</p>
                        <p className="slider--item-description">Our certified developers and inspired leadership will ensure a positive experience while respecting industry best practices. </p>
                      </a>
                    </li>
                  </ul>
                  <div className="slider--prev">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style={{"enable-background":"new 0 0 150 118"}} xmlSpace="preserve">
                      <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                        <path d="M561,1169C525,1155,10,640,3,612c-3-13,1-36,8-52c8-15,134-145,281-289C527,41,562,10,590,10c22,0,41,9,61,29
              c55,55,49,64-163,278L296,510h575c564,0,576,0,597,20c46,43,37,109-18,137c-19,10-159,13-590,13l-565,1l182,180
              c101,99,187,188,193,199c16,30,12,57-12,84C631,1174,595,1183,561,1169z" />
                      </g>
                    </svg>
                  </div>
                  <div className="slider--next">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style={{"enable-background":"new 0 0 150 118"}} xmlSpace="preserve">
                      <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                        <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </li>
            <li className="l-section section">
              <div className="about">
                <div className="about--banner">
                  <h2>We<br />believe in<br />passionate<br />people</h2>
                  <a href="#0">Career
                    <span>
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style={{"enable-background":"new 0 0 150 118"}} xmlSpace="preserve">
                        <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                          <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z" />
                        </g>
                      </svg>
                    </span>
                  </a>
                  <img src="assets/img/about-visual.png" alt="About Us" />
                </div>
                <div className="about--options">
                  <a href="#0">
                    <h3>Winners</h3>
                  </a>
                  <a href="#0">
                    <h3>Philosophy</h3>
                  </a>
                  <a href="#0">
                    <h3>History</h3>
                  </a>
                </div>
              </div>
            </li>
            <li className="l-section section">
              <div className="contact">
                <div className="contact--lockup">
                  <div className="modal">
                    <div className="modal--information">
                      <p>3191 Sorrento Cresent Burlignton L7M 0N2 Ontario , Canada</p>
                      <a href="mailto:anurag@arrayindex.com">anurag@arrayindex.com</a>
                      <a href="tel:+16476092313">+1 (647) 609-2313</a>
                    </div>
                    <ul className="modal--options">
                      <li><a href="https://www.facebook.com/arrayindexio">Facebook</a></li>
                      <li><a href="https://www.linkedin.com/company/arrayindex-canada-inc/">Linkedin</a></li>
                      <li><a href="mailto:anurag@arrayindex.com">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="l-section section">
              <div className="hire">
                <h2>You want us to do</h2>
                {/* checkout formspree.io for easy form setup */}
                <form className="work-request">
                  <div className="work-request--options">
                    <span className="options-a">
                      <input id="opt-1" type="checkbox" defaultValue="app design" />
                      <label htmlFor="opt-1">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 111" style={{"enable-background":"new 0 0 150 111"}} xmlSpace="preserve">
                          <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                            <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z" />
                          </g>
                        </svg>
                        App Design
                      </label>
                      <input id="opt-2" type="checkbox" defaultValue="graphic design" />
                      <label htmlFor="opt-2">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 111" style={{"enable-background":"new 0 0 150 111"}} xmlSpace="preserve">
                          <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                            <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z" />
                          </g>
                        </svg>
                        Consulting
                      </label>
                      <input id="opt-3" type="checkbox" defaultValue="motion design" />
                      <label htmlFor="opt-3">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 111" style={{"enable-background":"new 0 0 150 111"}} xmlSpace="preserve">
                          <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                            <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z" />
                          </g>
                        </svg>
                        Freelance
                      </label>
                    </span>
                    <span className="options-b">
                      <input id="opt-4" type="checkbox" defaultValue="ux design" />
                      <label htmlFor="opt-4">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 111" style={{"enable-background":"new 0 0 150 111"}} xmlSpace="preserve">
                          <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                            <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z" />
                          </g>
                        </svg>
                        Architecture Design
                      </label>
                      <input id="opt-5" type="checkbox" defaultValue="webdesign" />
                      <label htmlFor="opt-5">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 111" style={{"enable-background":"new 0 0 150 111"}} xmlSpace="preserve">
                          <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                            <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z" />
                          </g>
                        </svg>
                        Code Review
                      </label>
                      <input id="opt-6" type="checkbox" defaultValue="marketing" />
                      <label htmlFor="opt-6">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 111" style={{"enable-background":"new 0 0 150 111"}} xmlSpace="preserve">
                          <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                            <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z" />
                          </g>
                        </svg>
                        Ad hoc Development
                      </label>
                    </span>
                  </div>
                  <div className="work-request--information">
                    <div className="information-name">
                      <input id="name" type="text" spellCheck="false" />
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="information-email">
                      <input id="email" type="email" spellCheck="false" />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <input type="submit" defaultValue="Send Request" />
                </form>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <ul className="outer-nav">
      <li className="is-active">Home</li>
      <li>Works</li>
      <li>About</li>
      <li>Contact</li>
      <li>Hire us</li>
    </ul>
  </div>  


      


    );
  }
}

export default App;
