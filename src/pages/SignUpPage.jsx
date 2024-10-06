import React from "react";
import SignUpForm from "../components/login/SignUpForm";
import SignInSlider from '../components/login/SignInSlider';


const SignUpPage = () => {
  return (
    <div className="wrapper">
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
            <div className="col-md-6 bg-white pt-5 pb-lg-0 pb-5">
              <SignUpForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUpPage;
