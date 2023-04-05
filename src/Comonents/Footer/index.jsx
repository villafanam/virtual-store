import React from 'react';

const Footer = () => {
  return (
    <footer data-testid="footer"
      style={{
        margin: 'auto',
        position: 'absolute',
        bottom: 0,
        textAlign: 'right'
      }}
    >
      &copy;2023 Code Fellows
    </footer>
  );
};

export default Footer;