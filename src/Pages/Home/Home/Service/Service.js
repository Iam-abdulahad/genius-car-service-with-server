import React from 'react';
import './Service.css';

const Service = ({ service }) => {
          return (
                    <div className='service'>
                              <img src={service.img} alt="" />
                              <h2>{service.name}</h2>
                              <h4>${service.price}</h4>
                              <p><small>{service.description}</small></p>
                    </div>
          );
};

export default Service;