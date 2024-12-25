import React from 'react';
import Aboutus from '../components/Aboutus/Aboutus';
import Contactus from '../components/Aboutus/Contactus';
import Footer from '../components/Common/Footer';

const About = () => {
  return (
    <React.Fragment>
        <Aboutus></Aboutus>
        <Contactus></Contactus>
        <Footer></Footer>
    </React.Fragment>
  )
}

export default About
