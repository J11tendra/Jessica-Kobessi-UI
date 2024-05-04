import "./navbar.scss";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <a href="/">
          <img src="public/logo.png" alt="" />
        </a>
        <div className="socials">
          <a href="/">
            <img src="public/skype-icon.svg" alt="" />
          </a>
          <a href="/">
            <img src="public/snapchat-icon.svg" alt="" />
          </a>
          <a href="/">
            <img src="public/telegram-icon.svg" alt="" />
          </a>
          <a href="/">
            <img src="public/tumblr-icon.svg" alt="" />
          </a>
          <a href="/">
            <img src="public/twitter-icon.svg" alt="" />
          </a>
          <a href="/">
            <img src="public/whatsapp-icon.svg" alt="" />
          </a>
          <a href="/">
            <img src="public/github-icon.svg" alt="" />
          </a>
          <a href="/">
            <img src="public/facebook-icon.svg" alt="" />
          </a>
          <a href="/">
            <img src="public/facebook-messenger-icon.svg" alt="" />
          </a>
          <a href="/">
            <img src="public/behance-icon.svg" alt="" />
          </a>
        </div>
      </div>
      <div className="right">
        <div className="menuIcon">
          <img
            src="public/hamburger-menu.svg"
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
