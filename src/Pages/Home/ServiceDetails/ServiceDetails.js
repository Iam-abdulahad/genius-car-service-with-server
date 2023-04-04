import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {

          const { serviceId } = useParams();
          const [service, setService] = useState({});

          useEffect( () =>{
                    const url = `http://localhost:5000/service/${serviceId}`
                    fetch(url)
                    .then(res => res.json())
                    .then(data => setService(data))
          } ,[])

          return (
                    <div>
                              <h3>This is service detail for: {service.name}</h3>
                              <Link to="/checkout">
                                        <button className='btn btn-primary'>Proceed Checkout</button>
                              </Link>
                    </div>
          );
};

export default ServiceDetails;