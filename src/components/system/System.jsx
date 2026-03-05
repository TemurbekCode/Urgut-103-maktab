import "./System.css";
import { GraduationCap, Laptop, Users, Monitor, BookOpen, IdCard } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function System() {
    const { t } = useTranslation();

    const systemData = [
        { icon: <GraduationCap size={40} />, title: t("sys") },
        { icon: <Laptop size={40} />, title: t("grade") },
        { icon: <Users size={40} />, title: t("gradebook") },
        { icon: <Monitor size={40} />, title: t("boards") },
        { icon: <BookOpen size={40} />, title: t("curriculum") },
        { icon: <IdCard size={40} />, title: t("staff") },
    ];

    return (
        <section className="system">
            <div className="system-container">
                <h2 className="system-title">{t("sysadv")}</h2>

                <div className="system-grid">
                    {systemData.map((item, index) => (
                        <div className="system-card" key={index}>
                            <div className="system-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>

                            <Link to="/system">
                                <button>
                                    {t("more")}
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default System;