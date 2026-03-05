import "./Nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdown, setDropdown] = useState(null);
    const { t, i18n } = useTranslation();

    const toggleDropdown = (name) => {
        setDropdown(dropdown === name ? null : name);
    };

    const closeAll = () => {
        setMenuOpen(false);
        setDropdown(null);
    };

    return (
        <nav className="nav">
            <div className="nav-container">

                <Link to="/" onClick={closeAll}>
                    <img className="logo" src="/logo.png" alt="logo" />
                </Link>

                <div className={`nav-links ${menuOpen ? "active" : ""}`}>

                    <Link to="/" className="nav-link" onClick={closeAll}>
                        {t("home")}
                    </Link>

                    <div className="nav-item">
                        <span onClick={() => toggleDropdown("about")} className="nav-link">
                            {t("about")} ▾
                        </span>

                        {dropdown === "about" && (
                            <div className="dropdown">
                                <Link to="/about-school" className="dropdown-link" onClick={closeAll}>{t("public")}</Link>
                                <Link to="/school-managers" className="dropdown-link" onClick={closeAll}>{t("management")}</Link>
                                <Link to="/teachers" className="dropdown-link" onClick={closeAll}>{t("teachers")}</Link>
                                <Link to="/news" className="dropdown-link" onClick={closeAll}>{t("news")}</Link>
                            </div>
                        )}
                    </div>

                    <Link to="/system" className="nav-link" onClick={closeAll}>
                        {t("system")}
                    </Link>
                    <Link to="/gallery" className="nav-link" onClick={closeAll}>
                        {t("gallery")}
                    </Link>

                    <Link to="/contact" className="nav-link" onClick={closeAll}>
                        {t("contact")}
                    </Link>

                    <a
                        href="https://emaktab.uz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link"
                    >
                        {t("eschool")}
                    </a>
                </div>

                <div className="nav-right">
                    <button onClick={() => i18n.changeLanguage("en")}>EN</button>
                    <button onClick={() => i18n.changeLanguage("uz")}>UZ</button>
                </div>

                <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>

            </div>
        </nav>
    );
}

export default Nav;