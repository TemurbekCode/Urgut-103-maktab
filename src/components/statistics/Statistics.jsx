import "./Statistics.css";
import { useTranslation } from "react-i18next";

function Statistics() {
  const { t } = useTranslation();

  const stats = [
    { number: "920+", label: t("students") },
    { number: "70+", label: t("teachers") },
    { number: "100+", label: t("rooms") },
    { number: "70%", label: t("success") },
  ];

  return (
    <section className="statistics">
      <div className="statistics-container">
        <h2 className="statistics-title">{t("statistics")}</h2>

        <div className="statistics-grid">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <h3 className="stat-number">{item.number}</h3>
              <p className="stat-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;