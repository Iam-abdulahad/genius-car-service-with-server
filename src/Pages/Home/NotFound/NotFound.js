import React from 'react';

const NotFound = () => {
          return (
                    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
                              <img src="https://i.imgur.com/L5wU4oJ.png" alt="404 cartoon" />
                              <h1 style={{ fontSize: '50px', marginTop: '20px' }}>Oops!</h1>
                              <h2 style={{ fontSize: '30px', marginTop: '20px' }}>404 Error: Page Not Found</h2>
                              <p style={{ fontSize: '20px', marginTop: '20px' }}>
                                        It looks like you stumbled upon a page that doesn't exist. Don't worry, our team of certified accountants are already on it.
                              </p>
                              <a href="/" style={{ fontSize: '20px', marginTop: '20px' }}>
                                        Click here to go back to the home page
                              </a>
                    </div>
          );
};

export default NotFound;