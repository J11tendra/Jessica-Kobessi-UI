import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-heading">
          <h3>Jessica.</h3>
          <p>
            Subscribe to newsletter to get some updates related with branding,
            designs and more.
          </p>
        </div>
        <div className="link-container">
          <div className="col-1">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">SERVICES</a>
          </div>
          <div className="col-2">
            <a href="#">PORTFOLIO</a>
            <a href="#">BLOGS</a>
            <a href="#">CONTACT</a>
          </div>
        </div>
        <div className="email-container">
          <p>
            Just feel free to contact if you wanna collaborate with me, or
            simply have a conversation.
          </p>
          <a href="#">contact@jessica.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
