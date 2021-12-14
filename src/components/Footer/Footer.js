import React from 'react';
import { drzewka } from '../../media';

import { Wrapper } from './CSS-Footer.js';

const Footer = () => {
  return (
    <Wrapper background={drzewka} className="footer">
      <p>Website created for educational purposes.</p>
    </Wrapper>
  );
};

export default Footer;
