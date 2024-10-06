import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from '../components/login/SignInForm';
import SignInSlider from '../components/login/SignInSlider';

const SignInPage = () => {
  return (
    <section className="sign-in-page">
      <div id="container-inside">
        <div id="circle-small"></div>
        <div id="circle-medium"></div>
        <div id="circle-large"></div>
        <div id="circle-xlarge"></div>
        <div id="circle-xxlarge"></div>
      </div>
      <div className="container p-0">
        <div className="row no-gutters">
          <div className="col-md-6 text-center pt-5">
            <SignInSlider />
          </div>
          <div className="col-md-6 bg-white pt-5 pt-5 pb-lg-0 pb-5">
            <div className="sign-in-from">
              <h1 className="mb-0">Sign in</h1>
              <p>Enter your email address and password to access admin panel.</p>
              <SignInForm />
              <div className="sign-info">
                <span className="dark-color d-inline-block line-height-2">
                  Don't have an account? <Link to="/signup">Sign up</Link>
                </span>
                <ul className="iq-social-media">
                  <li><a href="#"><i className="ri-facebook-box-line"></i></a></li>
                  <li><a href="#"><i className="ri-twitter-line"></i></a></li>
                  <li><a href="#"><i className="ri-instagram-line"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;