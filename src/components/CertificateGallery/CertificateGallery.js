import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CertificateGallery.css';
import { Navigation, Pagination, A11y } from 'swiper/modules';

const CertificateGallery = ({ images }) => {
  return (
    <div className="certificate-gallery">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={`/Course Certificates/${image}`} alt={`Certificate ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CertificateGallery;
