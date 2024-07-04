import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Welcome to Gericht! Located in the heart of Nairobi, Gericht offers an exceptional dining experience with a blend of exquisite flavors and a cozy atmosphere. Our passionate chefs and dedicated team ensure every visit is memorable. Join us for a culinary journey like no other..</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">**Our History**

Gericht was founded in 2020 in Nairobi, Kenya. From our humble beginnings, we have strived to create a unique dining experience that combines local flavors with international cuisine. Our commitment to quality and passion for food has made us a beloved destination for both locals and visitors.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;