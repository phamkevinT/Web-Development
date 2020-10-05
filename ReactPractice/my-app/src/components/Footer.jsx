import React from "react";

const dateYear = new Date().getFullYear();

function Footer() {
    return <footer>
        <p>Copyright © {dateYear}</p>
    </footer>
} 

export default Footer;
