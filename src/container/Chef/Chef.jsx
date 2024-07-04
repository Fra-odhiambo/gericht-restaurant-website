import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Chef's Message: Our Beliefs.</p>
        </div>
        <p className="p__opensans"> 

At Gericht, we believe in the power of food to bring people together. Our culinary philosophy is rooted in using the freshest ingredients, innovative techniques, and a touch of love in every dish. We are dedicated to providing a dining experience that delights the senses and creates lasting memories.. </p>
      </div>

      <div className="app__chef-sign">
        <p>Francis Angudha</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;