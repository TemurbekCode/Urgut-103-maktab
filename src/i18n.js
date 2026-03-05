import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          home: "Home",
          about: "About School",
          teachers: "All Teachers",
          contact: "Contact Us",
          eschool: "eSchool",
          public: "Public School",
          management: "School Administration",
          news: "News",
          gallery: "Gallery",
          system: "System",
          staff: "Staff",
          curriculum: "Curriculum",
          documents: "Documents",
          urgut: "103-SCHOOL Samarkand - Urgut",
          learn: "Learn in Comfort with Advanced Technology",
          learning: "Modern education, experienced teachers, and a comfortable learning environment",
          us: "Apply Now",
          quality: "We are a general secondary school that provides quality education based on modern technologies.",
          aboutsec: "About School No. 103",
          qualityed: "Quality Education",
          modern: "Modern Technology",
          exper: "Experienced Teachers",
          sysadv: "System / Advantages",
          boards: "Smart Boards",
          gradebook: "Digital Gradebook",
          grade: "Online Assesment",
          sys: "e-School System",
          rm: "Read more",
          gallery: "Gallery",
          view: "View all",
          statistics: "Statistics",
          students: "Students",
          teachers: "Teachers",
          rooms: "Rooms",
          success: "Success",
          welcome: "Welcome to School No. 103!",
          modernedu: "Modern education with comfort and innovation.",
          contactinfo: "Contact Information",
          phone: "Phone:",
          adress: "Adress:",
          apply: "Apply to School No. 103",
          request: "Leave a request and we will respond",
          subrequest: "Submit a request",
          more: "More",

        }
      },
      uz: {
        translation: {
          home: "Bosh sahifa",
          about: "Maktab haqida",
          teachers: "O'qiturvchilar",
          contact: "Bog'lanish",
          eschool: "eMaktab",
          public: "Umumta'lim Maktab",
          management: "Maktab mamuryati",
          news: "Yangiliklar",
          gallery: "Galereya",
          system: "Tizim",
          staff: "Xodimlar",
          curriculum: "O'quv dasturi",
          documents: "Hujjatlar",
          urgut: "103-MAKTAB Samarqand - Urgut",
          learn: "Ilg'or texnologiyalar bilan qulay sharoitda o'rganing",
          learning: "Zamonaviy ta'lim, tajribali o'qituvchilar va qulay o'quv muhiti",
          us: "Murojaat qiling",
          quality: "Biz zamonaviy texnologiyalar asosida sifatli ta'lim beradigan umumta'lim maktabimiz.",
          aboutsec: "103-sonli umumta'lim maktabi haqida",
          qualityed: "Sifatli ta'lim",
          modern: "Zamonaviy texnologiya",
          exper: "Tajribali o'qituvchilar",
          sysadv: "Tizim / Afzalliklar",
          boards: "Interaktiv doskalar",
          gradebook: "Raqamli kundalik",
          grade: "Onlayn baholash",
          sys: "Elektron Maktab Tizimi",
          rm: "Batafsil",
          gallery: "Galereya",
          view: "Ko'rish",
          statistics: "Statistika",
          students: "O'quvchilar",
          teachers: "O'qituvchilar",
          rooms: "Sinfxonalar",
          success: "Yutuqlar",
          welcome: "103-sonli umumta'lim maktabiga xush kelibsiz!",
          modernedu: "Zamonaviy ta'lim — qulaylik va innovatsiyalar bilan.",
          contactinfo: "Bog'lanish ma'lumotlari",
          phone: "Telefon:",
          adress: "Manzil:",
          apply: "Maktabga ariza topshirish",
          request: "Ariza qoldiring va biz siz bilan tez orada bog'lanamiz.",
          subrequest: "Ariza yuborish",
          more: "Batafsil",
        }
      }

    }
  })

export default i18n
