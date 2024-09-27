'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const ProjectCarousel = ({slides}) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span style="width: 24px; height: 24px; background-color: #55A9BB" class="${className}">${index + 1}</span>`;
    },
  };

  return (
    <Swiper
      className=" bg-[#000000] text-white rounded-md shadow-md"
      pagination={pagination}
      modules={[Pagination]}
      slidesPerView={1}
    >
      {slides.map((slide, index) => (
        <SwiperSlide>
          <div className="flex" style={{flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'}}>
            <p className='w-1/2 p-10 flex items-center' >{slide.text}</p>
            <img className='w-1/2 h-[400px] object-cover p-10' src={slide.image} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectCarousel;
