import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full text-center py-4 text-sm text-gray-500 border-t">
      © {new Date().getFullYear()} Echozy. All rights reserved.
    </footer>
  );
};

export default Footer;
