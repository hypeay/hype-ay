'use client';

import Image from 'next/image';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const teamData = [
  {
    avatar: '/team/avatar-1.png',
    name: 'Giovanna Reategui',
    job: 'CEO & Lead Dancer',
    description:
      'As the CEO and lead dancer, Giovanna combines her passion for dance with exceptional leadership to ensure every performance is unforgettable.',
  },
  {
    avatar: '/team/avatar-2.png',
    name: 'Morgana Abreu',
    job: 'Business Partner & Dancer',
    description:
      'Morgana excels as a Business Partner, ensuring smooth operations, while captivating audiences with her graceful moves and stage presence.',
  },
  {
    avatar: '/team/avatar-3.png',
    name: 'Lucas Guedes',
    job: 'DJ & Dancer',
    description:
      'Lucas is a skilled DJ and dancer, seamlessly blending music and movement to create electrifying performances and unforgettable experiences.',
  },
  {
    avatar: '/team/avatar-4.png',
    name: 'Renan Silva',
    job: 'Dancer',
    description:
      'Renan is a versatile dancer whose dynamic energy and creativity make every performance stand out.',
  },
  {
    avatar: '/team/avatar-5.png',
    name: 'Tay Castro',
    job: 'Dancer',
    description:
      'Tay specializes in captivating audiences with her expressive movements and passionate performances.',
  },
  {
    avatar: '/team/avatar-6.png',
    name: 'Cassio Martins',
    job: 'Photographer & Videographer',
    description:
      'Cassio captures the essence of every event with stunning photography and dynamic videography.',
  },
  {
    avatar: '/team/avatar-7.png',
    name: 'Vitoria Balbinot',
    job: 'Makeup Artist',
    description:
      'Vitoria enhances the beauty of every performer with her exceptional makeup artistry, ensuring a flawless look for any event.',
  },
];

const Team = () => {
  return (
    <section className='mb-12 xl:mb-32'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 text-center mx-auto'>Our Team</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination, Autoplay]} // Added Autoplay module
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000, // Slide duration in milliseconds (3 seconds)
            disableOnInteraction: false, // Keeps autoplay active after user interaction
          }}
          className='h-[350px]'
        >
          {teamData.map((person, index) => {
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
                        alt={`${person.name}'s avatar`}
                        priority
                      />
                      {/* name */}
                      <div className='flex flex-col'>
                        <CardTitle>{person.name}</CardTitle>
                        <p className='text-sm text-muted-foreground'>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className='text-lg text-muted-foreground'>
                    {person.description}
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

export default Team;
