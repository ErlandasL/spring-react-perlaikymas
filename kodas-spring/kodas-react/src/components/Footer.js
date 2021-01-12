import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer mt-5">
        <span className="text-muted">
          All Rights Reserved 2020 @ErlandasLisauskas
        </span>
        <span className="align-items-start">
          <h4>
            {" "}
            Contact Dev:
            <a
              href="https://www.linkedin.com/in/erlandas-lisauskas-896bb91b7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin mr-3">Linkedin</i>
            </a>
          </h4>
        </span>
      </div>
    );
  }
}

export default Footer;
