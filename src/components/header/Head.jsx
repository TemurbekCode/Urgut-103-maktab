import "./Head.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Header() {
  const { t } = useTranslation();

  return (
    <section className="header">
      <div className="header-container">

        <div className="header-left">
          <h1 className="title">{t("urgut")}</h1>
          <h2 className="subtitle">{t("learn")}</h2>
          <p className="description">{t("learning")}</p>

          <Link to="/contact" className="header-btn">
            {t("us")}
          </Link>
        </div>

        <div className="header-right">
          <img src="/class.jpg" alt="classroom" />
        </div>

      </div>
    </section>
  );
}

export default Header;