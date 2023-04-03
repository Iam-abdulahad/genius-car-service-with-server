import { useState } from 'react';
import { useSendEmailVerification, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
          const [email, setEmail] = useState('');
          const [password, setPassword] = useState('');
          const [sendEmailVerification] = useSendEmailVerification(auth);
          const [
                    signInWithEmailAndPassword,
                    user,
                    loading,
                    error,
          ] = useSignInWithEmailAndPassword(auth);


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
                                        <p>Signed In User: {user.email}</p>
                              </div>
                    );
          }
          return (
                    <div className="login-container">
                              <form className="login-form">
                                        <h1 className="form-title">Login</h1>
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
                                        <button onClick={() => signInWithEmailAndPassword(email, password)} type="submit" className="form-submit">
                                                  Login
                                        </button>
                                        <div className="form-register">
                                                  Forget your password?{" "}
                                                  <button
                                                            onClick={async () => {
                                                                      const success = await sendEmailVerification();
                                                                      if (success) {
                                                                                alert('Sent email');
                                                                      }
                                                            }}
                                                  >
                                                            Verify email
                                                  </button>
                                        </div>
                                        <SocialLogin></SocialLogin>
                                        <div className="form-register">
                                                  Don't have an account?{" "}
                                                  <Link to="/signUp" className="form-register-link">
                                                            Please register
                                                  </Link>
                                        </div>
   
                              </form>
                    </div>
          );
};

export default Login;