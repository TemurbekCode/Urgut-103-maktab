import "./Gallery.css"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { GraduationCap, Laptop, Users, BookOpen, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from 'react-i18next'


function Gallery() {
    const [open, setOpen] = useState(false);
    const { t, i18n } = useTranslation();

    return (
        <div className="galleryContainer">
            <h1 className="gallery">{t("gallery")}</h1>
            <p className="view-gallery">
                <Link to="gallery" className="view-gallery">{t("view")}</Link>
            </p>

            <div className="carousel-container">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    spaceBetween={1}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    <SwiperSlide>
                        <div className="rom rom1">
                            <h2 className="tital">text</h2>
                            <p className="text-card">text</p>
                            <Link to="gallery" className="btn-gallery
                            "><button className="btn-gallery
                            ">{t("rm")}</button></Link>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="rom rom1">
                            <h2 className="tital">text</h2>
                            <p className="text-card">text</p>
                            <Link to="gallery" className="btn-gallery
                            "><button className="btn-gallery
                            ">{t("rm")}</button></Link>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="rom rom1">
                            <h2 className="tital">text</h2>
                            <p className="text-card">text</p>
                            <Link to="gallery" className="btn-gallery
                            "><button className="btn-gallery
                            ">{t("rm")}</button></Link>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="rom rom1">
                            <h2 className="tital">text</h2>
                            <p className="text-card">text</p>
                            <Link to="gallery" className="btn-gallery
                            "><button className="btn-gallery
                            ">{t("rm")}</button></Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Gallery;