import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const SignUp = () => {
          const [email, setEmail] = useState('');
          const [password, setPassword] = useState('');
          const [
                    createUserWithEmailAndPassword,
                    user,
                    loading,
                    error,
          ] = useCreateUserWithEmailAndPassword(auth);

          if (error) {
                    return (
                              <div>
                                        <p>Error: {error.message}</p>
                              </div>
                    );
          }
          if (loading) {
                    return <p>Loading...</p>;
          }
          if (user) {
                    return (
                              <div>
                                        <p>Registered User: {user.user.email}</p>
                              </div>
                    );
          }
          return (
                    <div className="login-container">
                              <form className="login-form">
                                        <h1 className="form-title">Please Register</h1>
                                        <input
                                                  type="text"
                                                  placeholder="Your Name"
                                                  className="form-input"
                                        />
                                        <input
                                                  type="email"
                                                  placeholder="Email"
                                                  className="form-input"
                                                  onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <input
                                                  type="password"
                                                  placeholder="Password"
                                                  className="form-input"
                                                  onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <button onClick={() => createUserWithEmailAndPassword(email, password)} type="submit" className="form-submit">
                                                  Register
                                        </button>
                                        <div className="form-or">or</div>
                                        <button type="button" className="form-google">
                                                  Continue with Google
                                        </button>
                                        <button type="button" className="form-facebook">
                                                  Continue with Facebook
                                        </button>

                              </form>
                    </div>
          );
};

export default SignUp;