import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
          const [currentYear] = useState(new Date().getFullYear());

          return (
                    <div className='footer'>
                              <h2>Copyright &copy; {currentYear} | Genius Car House | Hablu Developer</h2>
                    </div>
          );
};

export default Footer;