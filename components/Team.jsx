'use client';

import React, { useState, useCallback } from "react";
import { ImStarFull, ImFire, ImMusic, ImCamera } from "react-icons/im";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaCompactDisc, FaPaintBrush, FaRunning } from "react-icons/fa";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import AnimatedText from "./AnimatedText";
import Image from "next/image";

const teamData = [
  {
    avatar: "/team/avatar-1.png",
    name: "Gio",
    job: "CEO & Lead Dancer",
    description:
      "Giovanna combines her passion for dance with exceptional leadership to ensure every performance is unforgettable.",
    icon: <ImStarFull className="text-6xl text-primary mb-4" />,
  },
  {
    avatar: "/team/avatar-2.png",
    name: "Mow",
    job: "Business Partner & Dancer",
    description:
      "Morgana ensures smooth operations, while captivating audiences with her graceful moves and stage presence.",
    icon: <ImFire className="text-6xl text-primary mb-4" />,
  },
  {
    avatar: "/team/avatar-3.png",
    name: "Guedes",
    job: "DJ & Dancer",
    description:
      "Lucas seamlessly blends music and movement to create electrifying performances and unforgettable experiences.",
    icon: <ImMusic className="text-6xl text-primary mb-4" />,
  },
  {
    avatar: "/team/avatar-4.png",
    name: "Renan",
    job: "Dancer",
    description:
      "Renan’s dynamic energy and creativity make every performance stand out.",
    icon: <FaRunning className="text-6xl text-primary mb-4" />,
  },
  {
    avatar: "/team/avatar-5.png",
    name: "Tay",
    job: "Dancer",
    description:
      "Tay captivates audiences with her expressive movements and passionate performances.",
    icon: <FaCompactDisc className="text-6xl text-primary mb-4" />,
  },
  {
    avatar: "/team/avatar-6.png",
    name: "Cassio",
    job: "Photographer & Videographer",
    description:
      "Cassio captures the essence of every event with stunning photography and dynamic videography.",
    icon: <ImCamera className="text-6xl text-primary mb-4" />,
  },
  {
    avatar: "/team/avatar-7.png",
    name: "Vitoria",
    job: "Makeup Artist",
    description:
      "Vitoria ensures every performer shines with her exceptional makeup artistry.",
    icon: <FaPaintBrush className="text-6xl text-primary mb-4" />,
  },
];

const Team = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div className="py-24 overflow-hidden">
      <div className="container mx-auto">
        {/* Section Title */}
        <AnimatedText
          text="Our Team"
          textStyles="h2 mb-[30px] xl:mb-[60px] text-center section-title mb-12"
        />
        <div className="flex flex-col text-center lg:flex-row gap-12">
          {/* Slider Info */}
          <div className=" xl:w-[600px] flex flex-col justify-center items-center xl:items-start text-center p-2 mx-auto xl:mx-0">
            {teamData[activeSlide].icon}
            <h3 className="h3 mb-2">{teamData[activeSlide].name}</h3>
            <p className="text-muted-foreground mb-1 text-sm">
              {teamData[activeSlide].job}
            </p>
            <p className=" text-center xl:text-left mb-8 max-w-[360px]">{teamData[activeSlide].description}</p>
            {/* Slider Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handlePrevious}
                className="text-2xl bg-primary w-[48px] h-[48px] text-white rounded-full flex items-center justify-center hover:bg-accent-hover transition-all duration-300"
              >
                <FiArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="text-2xl bg-primary w-[48px] h-[48px] text-white rounded-full flex items-center justify-center hover:bg-accent-hover transition-all duration-300"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>

          {/* Slider */}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            onSwiper={setSwiperRef}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full h-[250px] xl:h-[500px]"
          >
            {teamData.map((member, index) => (
              <SwiperSlide key={index} className="h-full select-none">
                <div className="w-full h-full flex items-end">
                  <div
                    className={`${
                      activeSlide === index ? "h-full" : "h-[240px]"
                    } flex items-end rounded-2xl overflow-hidden transition-all duration-500 relative w-full`}
                  >
                    <Image
                      src={member.avatar}
                      className="object-cover object-center"
                      quality={100}
                      fill
                      alt={member.name}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Team;
