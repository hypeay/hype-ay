"use client";

import Image from "next/image";
import AnimatedText from "./AnimatedText";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avatar-8.png",
    name: "Aitana - Linkedin",
    review:
      "I recently hired the services of Hype-Ay for a corporate dance workshop, as well as flex and relaxed classes, and I must say, the experience was absolutely incredible! The energy and environment created during the sessions were truly unbeatable. Giovanna has a remarkable ability to transform the atmosphere, making you forget about any stress or bad day. Her enthusiasm and positive vibes are contagious, and you can’t help but smile while dancing. It was an uplifting experience for our team, and I highly recommend their services to anyone looking to add some fun and energy to their day!",
  },
  {
    avatar: "/reviews/avatar-9.png",
    name: "Nathalia - Accenture",
    review:
      "I’ve worked with Hype-Ay for several events at Accenture, and they’ve blown me away every time! The dancers bring incredible energy, the DJ is fantastic, and they’re always super professional and on time. But what really stands out is how they always go above and beyond, every time I think I know what to expect, they surprise me with something even better. From creative costumes to unforgettable performances, they truly make every event special. Highly recommend them for anyone looking to take their event to the next level.",
  },
  {
    avatar: "/reviews/avatar-7.png",
    name: "Bruna  - Microsoft",
    review:
      "Hype-Ay delivered an outstanding performance at our Brazilian Carnival-themed corporate event at Microsoft, showcasing the rich diversity of Brazilian dance with energy, passion, and authenticity. From samba to frevo and Afro-Brazilian traditions, they captivated the audience, turning the event into an immersive cultural experience. Their professionalism, charisma, and ability to engage seamlessly with the crowd made a lasting impression. I highly recommend them to anyone looking to bring the true spirit of Brazil to their event!",
  },
  {
    avatar: "/reviews/avatar-1.png",
    name: "Rafael Cruz",
    review:
      "Hype-ay made our wedding day unforgettable! The choreographed dance was perfect, and the team was so professional and friendly. Recommended!",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Naue Tunes",
    review:
      "The energy and passion Hype-ay brings to every performance are unmatched. Our corporate event was a huge success thanks to their incredible talent!",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Dannielly Elias",
    review:
      "I had so much fun at their dance classes! The instructors are amazing, and the atmosphere is so welcoming. Can’t wait for the next session!",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Anna Raquel",
    review:
      "From start to finish, Hype-ay went above and beyond for our hen party. The personalized choreography was a hit, and everyone had a blast!",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Joziane LC",
    review:
      "We hired Hype-ay for a corporate team-building event, and it exceeded all expectations. The activities were fun, engaging, and brought everyone together!",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Maria Cecilia Laistner",
    review:
      "Hype-ay turned our special event into a magical evening. The DJ kept the energy alive all night, and the dance performances were stunning!",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:my-28">
      <div className="container mx-auto ">
        <AnimatedText
          text="Our Reviews"
          textStyles=" section-title mb-12 text-center mx-auto"
        />
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 7000, // ⬅️ tempo mais confortável
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // ⬅️ pausa quando o mouse entra
          }}
          className="h-[560px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[400px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* name */}
                      <div className="flex flex-col">
                        <CardTitle>
                          {person.name.split(" - ")[0]}{" "}
                          {person.name.includes(" - ") && (
                            <span className="text-md text-secondary font-medium">
                              – {person.name.split(" - ")[1]}
                            </span>
                          )}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground italic relative pl-4">
                    <span className="absolute text-primary left-0 text-2xl -top-2 ">
                      “
                    </span>
                    {person.review}
                    <span className="text-2xl text-muted">”</span>
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
