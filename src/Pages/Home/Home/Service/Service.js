import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {

          const navigate = useNavigate();

          const navigateToServiceDetail = id =>{
                    navigate(`/service/${service.id}`)
          }
          return (
                    <div className='service'>
                              <img src={service.img} alt="" />
                              <h2>{service.name}</h2>
                              <h4>${service.price}</h4>
                              <p><small>{service.description}</small></p>
                              <Button onClick={ () =>{navigateToServiceDetail(service.id)}} variant="primary">Details</Button>
                    </div>
          );
};

export default Service;