import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    //   <footer className='ml-[2%] mt-[20%] flex justify-between'>
    <footer className="flex justify-between">
      <div>&copy; {currentYear}. Cryptag All rights reserved.</div>
      <img alt="" src="/top.svg" />
    </footer>
  );
};

export default Footer;
