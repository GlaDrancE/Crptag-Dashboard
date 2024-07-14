import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    //   <footer className='ml-[2%] mt-[20%] flex justify-between'>
    <footer className="flex justify-between mt-4">
      <div className="flex items-center">
        <p className="footer-copyright mr-1">&copy;</p>
        {currentYear}. Cryptag All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
