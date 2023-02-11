import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
          const [currentYear] = useState(new Date().getFullYear());

          return (
                    <footer>
                              <div className="container-fluid">
                                        <div className="row">
                                                  <div className="col-12 col-md-4">
                                                            <h3>About Us</h3>
                                                            <p>We are a team of experienced mechanics providing top-notch car servicing and repairs. Contact us to schedule an appointment today!</p>
                                                  </div>
                                                  <div className="col-12 col-md-4">
                                                            <h3>Contact Information</h3>
                                                            <p>Address: 123 Main St, Anytown USA</p>
                                                            <p>Phone: (123) 456-7890</p>
                                                            <p>Email: info@carservice.com</p>
                                                  </div>
                                                  <div className="col-12 col-md-4">
                                                            <h3>Follow Us</h3>
                                                            <ul className="list-inline social-links">
                                                                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                                      <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                            </ul>
                                                  </div>
                                        </div>
                                        <div className="row">
                                                  <div className="col-12">
                                                            <p className="copyright-text">Copyright &copy; {currentYear} Car Service</p>
                                                  </div>
                                        </div>
                              </div>
                    </footer>
          );
};

export default Footer;