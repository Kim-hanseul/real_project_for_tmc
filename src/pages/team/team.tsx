import Layout from '@components/layout';
import Breadcrumb, { BreadcrumbItem } from '@components/other/breadcrumb';
import Socials from '@components/other/socials';
import Instagram from '@components/sections/instagram';
import SubcribeBar from '@components/subcribe-bar';
import React from 'react';

const About = () => {
  const handleSubmit = (val: { email: string }) => {
    console.log(val);
  };

  return (
    <Layout title="About Team">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
            Home
          </BreadcrumbItem>
          <BreadcrumbItem>team</BreadcrumbItem>
        </Breadcrumb>
        <div className="about-us">
          <div className="row align-items-center">
            <div className="col-12 col-sm-8 col-md-6 mx-auto">
              <div className="about-us__image">
                <img src="/assets/images/pages/about/1.png" alt="About us image" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="about-us__content">
                <div className="follow">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Instagram />
    </Layout>
  );
};

export default About;
