import React from 'react';
import googleLogo from '../../../../images/social-icon/google.png';
import facebookLogo from '../../../../images/social-icon/facebook.png';
import githubLogo from '../../../../images/social-icon/github.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
          const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);




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
                    <div>

                              <div className='d-flex align-items-center'>
                                        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                                        <p className='mt-2 px-2 text-primary'>OR</p>
                                        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                              </div>
                              <div className=''>
                                        <button
                                                  onClick={() => signInWithGoogle()}
                                                  className='btn btn-info d-block w-100 mx-auto my-2'>
                                                  <img style={{ width: '30px' }} src={googleLogo} alt="" />
                                                  <span className='px-2'>Google Sign In</span>
                                        </button>
                                        <button
                                                  className='btn btn-info d-block w-100 mx-auto my-2'>
                                                  <img style={{ width: '30px' }} src={facebookLogo} alt="" />
                                                  <span className='px-2'>Facebook Sign In</span>
                                        </button>
                                        <button
                                                  className='btn btn-info w-100 d-block mx-auto'>
                                                  <img style={{ width: '30px' }} src={githubLogo} alt="" />
                                                  <span className='px-2'>Github Sign In</span>
                                        </button>
                              </div>

                    </div>
          );
};

export default SocialLogin;