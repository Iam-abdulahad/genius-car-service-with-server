import { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';
import './Login.css'

const Login = () => {
          const [email, setEmail] = useState('');
          const [password, setPassword] = useState('');
          const [
                    signInWithEmailAndPassword,
                    user,
                    loading,
                    error,
          ] = useSignInWithEmailAndPassword(auth);

          const [signInWithGoogle] = useSignInWithGoogle(auth);

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
                                        <div className="form-or">Or Continue with</div>
                                        <button onClick={()=>signInWithGoogle()} type="button" className="form-google">
                                                  Google
                                        </button>
                                        <button type="button" className="form-facebook">
                                                  Facebook
                                        </button>
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