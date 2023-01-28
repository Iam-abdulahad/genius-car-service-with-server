import React from 'react';

const Service = ({ service }) => {
          return (
                    <div>
                              <img src={service.img} alt="" />
                              <h2>{service.name}</h2>
                              <h4>${service.price}</h4>
                              <p><small>{service.description}</small></p>
                    </div>
          );
};

export default Service;