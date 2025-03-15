import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { SiGooglemaps } from "react-icons/si";
const Footer = () => {
  return (
    <div className="footer">
      <div className="main-footer">
        <div className="logo-footer">
          <img
            src="Excellent-logo.png"
            alt="image not found"
            className="footer-logo-image"
          />
          <h3 className="footer-heading">Excellent Public School</h3>
          <p className="footer-believe">Believe in yourself</p>
        </div>
        <div className="social-footer">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-footer-icons">
            <a
              href="https://www.facebook.com/share/15obCt1j1M/?mibextid=wwXIfr"
              target="_blank"
              className="anchorColor"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/excellent_public_school_itarsi?igsh=MXh3MmIxODA3enh0Yw=="
              target="_blank"
              className="anchorColor"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919827279238"
              target="_blank"
              className="anchorColor"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://maps.app.goo.gl/W4UYZECM4mKuSrmW8"
              target="_blank"
              className="anchorColor"
            >
              <SiGooglemaps />
            </a>
          </div>
        </div>
        <div className="contact-footer">
          <h3 className="footer-heading">Contact Us</h3>
          <div className="calldiv">
            <IoCall />
            <span>
              <a href="tel:8085223022" className="mobile-no">
                8085223022
              </a>
            </span>
          </div>
          <div className="calldiv">
            <IoCall />
            <span>
              <a href="tel:9827279238" className="mobile-no">
                9827279238
              </a>
            </span>
          </div>
          <div className="calldiv">
            <BiLogoGmail />
            <span>
              <a href="mailto:epsitarsi@gmail.com" className="mobile-no">
                epsitarsi@gmail.com
              </a>
            </span>
          </div>
          <div className="calldiv">
            <FaWhatsapp />
            <span>
              <a href="https://wa.me/919827279238" className="mobile-no">
                whatsapp
              </a>
            </span>
          </div>
        </div>
        <div className="quicklinks-footer">
          <h3 className="footer-heading">Quick Links</h3>
          <div className="quicklink">
            <a href="/about" className="mobile-no">
              Home
            </a>
            <a href="/about" className="mobile-no">
              About
            </a>
            <a href="/admission" className="mobile-no">
              Admission
            </a>
            <a href="facility" className="mobile-no">
              Gallery
            </a>
            <a href="/contact" className="mobile-no">
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="copyright-footer">
        © 2025 Excellent Public School. All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
