import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
          <div className="col-md-4 d-flex align-items-center">
             <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
            <a className="text-body-secondary" href="#">
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;