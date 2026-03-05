import "./Footer.css";
import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <img src="/logo.png" alt="logo" className="footer-logo" />
          <p>© 2026 School No.103</p>
          <span className="developer">
            Designed & Developed by Alisherov Temurbek
          </span>
        </div>

        <div className="footer-right">
          <div className="footer-contact">
            <Phone size={20} />
            <span>+998 90 000 00 00</span>
          </div>

          <div className="footer-contact">
            <Mail size={20} />
            <span>info@school.uz</span>
          </div>

          <div className="footer-contact">
            <MapPin size={20} />
            <span>Tashkent, Uzbekistan</span>
          </div>

          <div className="footer-socials">
            <a href="#" className="social-btn">TG</a>
            <a href="#" className="social-btn">YT</a>
            <a href="#" className="social-btn">IG</a>
            <a href="#" className="social-btn">FB</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;