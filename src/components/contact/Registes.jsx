import "./Register.css";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_a8d852d";
const TEMPLATE_ID = "template_bqk9d0f";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // .env ga ko‘chirish tavsiya qilinadi

function Register() {
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        alert("Message sent successfully ✔️");
        e.target.reset();
      })
      .catch(() => {
        alert("Something went wrong ❌");
      });
  };

  return (
    <section className="register">
      <div className="register-container">

        {/* LEFT */}
        <div className="register-left">
          <h2>{t("welcome")}</h2>
          <p>{t("contactinfo")}</p>

          <div className="contact-box">
            <div>
              <strong>Email:</strong>
              <p>example@gmail.com</p>
            </div>

            <div>
              <strong>{t("phone")}:</strong>
              <p>+998 90 000 00 00</p>
            </div>

            <div>
              <strong>{t("adress")}:</strong>
              <p>Urgut, Samarkand</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="register-form" onSubmit={sendEmail}>
          <h3>{t("apply")}</h3>

          <input type="text" name="from_name" placeholder="Full Name" required />
          <input type="tel" name="from_phone" placeholder="Telephone" required />
          <input type="email" name="from_email" placeholder="Email" required />
          <textarea name="message" placeholder="Your Message" rows="4" />

          <button type="submit">{t("subrequest")}</button>
        </form>

      </div>
    </section>
  );
}

export default Register;