import React from "react";

function Footer() {

  var presentYear = new Date().getFullYear();

  return (
      <footer>
        <p>Copyright @ {presentYear}</p>
      </footer>
      );

  }

export default Footer;