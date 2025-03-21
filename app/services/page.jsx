'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Head from 'next/head';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  // Corporate
  {
    image: '/work/8.png',
    category: 'Corporate',
    name: 'Corporate Dance Events/Shows',
    description:
      'Dynamic workshops and performances designed to engage and energize corporate teams and audiences.',
    link: '/work/8-full.jpg',
  },
  {
    image: '/work/11.png',
    category: 'Corporate',
    name: 'Corporate Dance Class and Workshops',
    description:
      'Interactive dance classes and workshops tailored to corporate needs, boosting team spirit and creativity.',
    link: '/work/11-full.jpg',
  },
  {
    image: '/work/10.png',
    category: 'Corporate',
    name: 'Stretching and Flexibility Class',
    description:
      'Stretching sessions designed to improve flexibility, reduce stress, and enhance workplace wellness.',
    link: '/work/10-full.jpg',
  },
  {
    image: '/work/6.png',
    category: 'Corporate',
    name: 'DJ Services',
    description:
      'Professional DJ services to provide the perfect soundtrack for corporate events and celebrations.',
    link: '/work/6-full.jpg',
  },
  {
    image: '/work/5.png',
    category: 'Corporate',
    name: 'Decoration',
    description:
      'Customized decoration services to enhance the ambiance and aesthetics of corporate events.',
    link: '/work/5-full.jpg',
  },
  {
    image: '/work/7.png',
    category: 'Corporate',
    name: 'Makeup/Brow Artist for Special Events',
    description:
      'Professional makeup and brow artist services tailored for corporate events and special occasions.',
    link: '/work/7-full.jpg',
  },

  // Non-Corporate
  {
    image: '/work/10.png',
    category: 'Non-Corporate',
    name: 'Dance Classes/Stretching Classes',
    description:
      'Comprehensive dance and stretching classes for all levels, improving fitness, flexibility, and confidence.',
    link: '/work/10-full.jpg',
  },
  {
    image: '/work/5.png',
    category: 'Non-Corporate',
    name: 'Hen Party Classes',
    description:
      'Fun and energetic dance classes to add laughter and excitement to hen party celebrations.',
    link: '/work/5-full.jpg',
  },
  {
    image: '/work/7.png',
    category: 'Non-Corporate',
    name: 'Bridesmaids Choreos',
    description:
      'Creative group choreography for bridesmaids to make your wedding day extra special.',
    link: '/work/7-full.jpg',
  },
  {
    image: '/work/6.png',
    category: 'Non-Corporate',
    name: 'Wedding First Dance',
    description:
      'Custom choreography for couples to create magical and unforgettable first dance moments.',
    link: '/work/6-full.jpg',
  },
  {
    image: '/work/6.png',
    category: 'Non-Corporate',
    name: 'DJ Services',
    description:
      'Professional DJ services to set the perfect mood for weddings, parties, and private events.',
    link: '/work/6-full.jpg',
  },
  {
    image: '/work/5.png',
    category: 'Non-Corporate',
    name: 'Decoration',
    description:
      'Personalized decoration services to create beautiful and memorable event settings.',
    link: '/work/5-full.jpg',
  },
  {
    image: '/work/7.png',
    category: 'Non-Corporate',
    name: 'Makeup/Brow Artist for Special Events',
    description:
      'Expert makeup and brow services to help you look your best for weddings, parties, and other special occasions.',
    link: '/work/7-full.jpg',
  },
];

const uniqueCategories = ['all services', ...new Set(projectData.map((item) => item.category))];

// Componente para Filtragem
const FilteredProjects = () => {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all services';
  const [category, setCategory] = useState(initialCategory);

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  const filteredProjects = projectData.filter((project) =>
    category === 'all services' ? project : project.category === category
  );

  const getCategoryClass = (category) => {
    switch (category) {
      case 'Corporate':
        return 'bg-primary';
      case 'Non-Corporate':
        return 'bg-secondary';
      case 'Training':
        return 'bg-quartary';
      default:
        return 'bg-primary';
    }
  };

  return (
    <Tabs defaultValue={category} className="mb-24 xl:mb-48">
      <TabsList className="w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
        {uniqueCategories.map((cat, index) => (
          <TabsTrigger
            key={index}
            onClick={() => setCategory(cat)}
            value={cat}
            className="capitalize w-[162px] md:w-auto"
          >
            {cat}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project, index) => {
          const bgClass = getCategoryClass(project.category);
          return (
            <TabsContent value={category} key={index}>
              <ProjectCard project={project} bgClass={bgClass} />
            </TabsContent>
          );
        })}
      </div>
    </Tabs>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Our Services - Hype-ay</title>
        <meta name="description" content="Explore the wide range of services offered..." />
      </Head>
      <section className="min-h-screen pt-12">
        <div className="container mx-auto">
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">Our services</h2>
          {/* Suspense Boundary */}
          <Suspense fallback={<div>Loading...</div>}>
            <FilteredProjects />
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default Projects;