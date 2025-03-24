"use client";

import { useState, useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const KeenSlider = ({ mediaItems }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const thumbContainerRef = useRef(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 10,
    },
  });

  const goToSlide = (index) => {
    instanceRef.current?.moveToIdx(index);
  };

  const isVideo = (src) => src.endsWith(".mp4");

  // Scroll thumbnails into view
  useEffect(() => {
    const container = thumbContainerRef.current;
    const thumbnail = container?.children[currentSlide];
    if (container && thumbnail) {
      thumbnail.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentSlide]);

  return (
    <div className="w-full overflow-y-hidden">
      {/* Carousel */}
      <div className="relative">
        <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
          {mediaItems.map((src, i) => (
            <div
              key={i}
              className="keen-slider__slide flex justify-center items-center"
            >
              {isVideo(src) ? (
                <video
                  controls
                  className="rounded-lg max-h-[400px] w-full object-contain"
                >
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={src}
                  alt={`Media ${i + 1}`}
                  className="rounded-lg object-contain max-h-[400px] w-full"
                />
              )}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-primary text-white rounded-full shadow-md hover:brightness-110 z-10"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-primary text-white rounded-full shadow-md hover:brightness-110 z-10"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Thumbnails (carousel if > 6) */}
      <div
        ref={thumbContainerRef}
        className={`mt-4 flex gap-3 px-4 ${
          mediaItems.length > 6
            ? "overflow-x-auto scrollbar-hide"
            : "justify-center"
        }`}
      >
        {mediaItems.map((src, i) => (
          <div
            key={i}
            onClick={() => goToSlide(i)}
            className={`cursor-pointer border-2 rounded-md transition-all ${
              currentSlide === i
                ? "border-blue-500 scale-105"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            {isVideo(src) ? (
              <video
                className="h-16 w-24 object-cover rounded-md"
                muted
                preload="metadata"
              >
                <source src={src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={src}
                alt={`Thumb ${i + 1}`}
                className="h-16 w-24 object-cover rounded-md"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeenSlider;
