'use client';

import Image from 'next/image';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';


import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


import { Pagination, Autoplay } from 'swiper/modules';

const reviewsData = [
  {
    avatar: '/reviews/avatar-1.png',
    name: 'Rafael Cruz',
    review:
      'Hype-ay made our wedding day unforgettable! The choreographed dance was perfect, and the team was so professional and friendly. Recommended!',
  },
  {
    avatar: '/reviews/avatar-2.png',
    name: 'Naue Tunes',
    review:
      'The energy and passion Hype-ay brings to every performance are unmatched. Our corporate event was a huge success thanks to their incredible talent!',
  },
  {
    avatar: '/reviews/avatar-3.png',
    name: 'Dannielly Elias',
    review:
      'I had so much fun at their dance classes! The instructors are amazing, and the atmosphere is so welcoming. Can’t wait for the next session!',
  },
  {
    avatar: '/reviews/avatar-4.png',
    name: 'Anna Raquel',
    review:
      'From start to finish, Hype-ay went above and beyond for our hen party. The personalized choreography was a hit, and everyone had a blast!',
  },
  {
    avatar: '/reviews/avatar-5.png',
    name: 'Joziane LC',
    review:
      'We hired Hype-ay for a corporate team-building event, and it exceeded all expectations. The activities were fun, engaging, and brought everyone together!',
  },
  {
    avatar: '/reviews/avatar-6.png',
    name: 'Maria Cecilia Laistner',
    review:
      'Hype-ay turned our special event into a magical evening. The DJ kept the energy alive all night, and the dance performances were stunning!',
  },
];

const Reviews = () => {
  return (
    <section className='mb-12 xl:mb-32'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
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
            delay: 3000, 
            disableOnInteraction: false,
          }}
          className='h-[350px]'
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                  <CardHeader className='p-0 mb-10'>
                    <div className='flex items-center gap-x-4'>
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=''
                        priority
                      />
                      {/* name */}
                      <div className='flex flex-col'>
                        <CardTitle>{person.name}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className='text-lg text-muted-foreground'>
                    {person.review}
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
