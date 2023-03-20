"use client";

import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

Swiper.displayName = "Swiper";

export default () => {
  return (
    <section className="hero mt-2 ">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          speed={200}
          autoHeight={true}
          loop
          autoplay={true}
          pagination={{ clickable: true }}
          className="rounded-xl"
        >
          <SwiperSlide>
            <div className="w-full h-[423px]">
              <Image
                width={216}
                height={423}
                src="/images/cehgelol08kcldtp1uhg.jpg"
                alt="Rasm"
                sizes="(max-width: 1250px) 100%, (max-height: 1250px) 100%"
                className="w-full h-[423px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[423px]">
              <Image
                width={216}
                height={200}
                sizes="(max-width: 1250px) 100%, (max-height: 1250px) 100%"
                src="/images/ceo2ml8v1htd23ak68s0.jpg"
                alt="Rasm"
                className="w-full h-[423px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[423px]">
              <Image
                width={216}
                height={200}
                sizes="(max-width: 1250px) 100%, (max-height: 1250px) 100%"
                src="/images/cfg80nidjr2oefduj5lg.jpg"
                alt="Rasm"
                className="w-full h-[423px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[423px]">
              <Image
                width={216}
                height={200}
                sizes="(max-width: 1250px) 100%, (max-height: 1250px) 100%"
                src="/images/cfg82msvutv7dbm92910.jpg"
                alt="Rasm"
                className="w-full h-[423px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[423px]">
              <Image
                width={216}
                height={200}
                sizes="(max-width: 1250px) 100%, (max-height: 1250px) 100%"
                src="/images/cfg85ukvutv7dbm929g0.jpg"
                alt="Rasm"
                className="w-full h-[423px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[423px]">
              <Image
                width={216}
                height={200}
                sizes="(max-width: 1250px) 100%, (max-height: 1250px) 100%"
                src="/images/cfg888idjr2oefduj6n0.jpg"
                alt="Rasm"
                className="w-full h-[423px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[423px]">
              <Image
                width={216}
                height={200}
                sizes="(max-width: 1250px) 100%, (max-height: 1250px) 100%"
                src="/images/cfg8522djr2oefduj63g.jpg"
                alt="Rasm"
                className="w-full h-[423px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[423px]">
              <Image
                width={216}
                height={200}
                sizes="(max-width: 1250px) 100%, (max-height: 1250px) 100%"
                src="/images/cfg844540v9uauhi0mi0.jpg"
                alt="Rasm"
                className="w-full h-[423px]"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
