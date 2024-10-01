'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Fragment } from 'react';

const ProjectCarousel = ({ slides }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span style="width: 24px; height: 24px; background-color: #55A9BB" class="${className}">${
        index + 1
      }</span>`;
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
        <Fragment key={`slide-frame-${index}`}>
          <SwiperSlide key={`slide-large-${index}`} className='!hidden lg:!block'>
            <div
              className="flex"
              style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'}}
            >
              <p className="w-1/2 p-10 flex items-center">
                {slide.text}
              </p>
              <img
                className="w-1/2 h-[400px] object-cover p-10"
                src={slide.image}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide key={`slide-small-${index}`} className='!block lg:!hidden'>
            <div
              className="flex pb-8 justify-center"
              style={{ flexDirection: index % 2 === 0 ? 'column' : 'column-reverse'}}
            >
              <p className="lg:w-1/2 p-2 lg:p-10 flex items-center justify-center">
                {slide.text}
              </p>
              <img
                className="h-[200px] lg:h-[400px] object-cover object-center p-3 lg:p-10"
                src={slide.image}
                alt=""
              />
            </div>
          </SwiperSlide>
        </Fragment>
      ))}
    </Swiper>
  );
};

export default ProjectCarousel;
