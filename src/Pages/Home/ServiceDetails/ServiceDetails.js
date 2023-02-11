import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {

          const { serviceId } = useParams();
          return (
                    <div>
                              <h3>This is service detail for: {serviceId}</h3>
                              <Link to="/checkout">
                                        <button className='btn btn-primary'>Proceed Checkout</button>
                              </Link>
                    </div>
          );
};

export default ServiceDetails;