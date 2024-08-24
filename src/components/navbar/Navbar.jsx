import "./navbar.scss";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <a href="/">
          <img src="/logo.png" alt="" />
        </a>
        <div className="socials">
          <a href="/">
            <img src="/skype-icon.svg" alt="" />
          </a>
          <a href="/">
            <img src="/snapchat-icon.svg" alt="" />
          </a>
          <a href="/">
            <img src="/telegram-icon.svg" alt="" />
          </a>
          <a href="/">
            <img src="/tumblr-icon.svg" alt="" />
          </a>
          <a href="/">
            <img src="/twitter-icon.svg" alt="" />
          </a>
          <a href="/">
            <img src="/whatsapp-icon.svg" alt="" />
          </a>
          <a href="/">
            <img src="/github-icon.svg" alt="" />
          </a>
          <a href="/">
            <img src="/facebook-icon.svg" alt="" />
          </a>
          <a href="/">
            <img src="/facebook-messenger-icon.svg" alt="" />
          </a>
          <a href="/">
            <img src="/behance-icon.svg" alt="" />
          </a>
        </div>
      </div>
      <div className="right">
        <div className="menuIcon">
          <img
            src="/hamburger-menu.svg"
            alt=""
            className={open && "active"}
            onClick={() => {
              setOpen((prevVal) => !prevVal);
            }}
          />
        </div>
        <div className={`menu ${open && "open"}`}>
          <a href="/">HOME</a>
          <a href="/">ABOUT</a>
          <a href="/">SERVICES</a>
          <a href="/">PORTFOLIO</a>
          <a href="/">BLOGS</a>
          <a href="/">CONTACT</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
