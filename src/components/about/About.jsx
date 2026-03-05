import "./About.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function About() {
  const { t } = useTranslation();

  return (
    <section className="about">
      <div className="about-container">

        <h2 className="about-title">{t("aboutsec")}</h2>
        <p className="about-text">{t("quality")}</p>

        <div className="about-cards">

          <Link to="/about-school" className="about-card">
            <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
              <path d="m21.45 8.61-9-4.5a1 1 0 0 0-.89 0l-9 4.5a1 1 0 0 0 0 1.78l9 4.5a1 1 0 0 0 .89 0l9-4.5a1 1 0 0 0 0-1.78Z" />
            </svg>
            <span>{t("qualityed")}</span>
          </Link>

          <Link to="/school-managers" className="about-card">
            <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3h18v14H3z" />
            </svg>
            <span>{t("modern")}</span>
          </Link>

          <Link to="/teachers" className="about-card">
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faChalkboardUser} />
            <span>{t("exper")}</span>
          </Link>

        </div>

      </div>
    </section>
  );
}

export default About;