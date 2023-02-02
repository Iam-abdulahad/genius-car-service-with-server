import React from 'react';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
          return (
                    <div>
                              <h1 className="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">This is Home!</h1>
                              <Services></Services>
                              <Experts></Experts>
                    </div>
          );
};

export default Home;