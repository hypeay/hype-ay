'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Head from 'next/head';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/8.png',
    category: 'Corporate',
    name: 'Corporate Dance Events',
    description:
      'Dynamic workshops and performances designed to engage and energize corporate teams and audiences.',
     link: '/work/8-full.jpg',
  },
  {
    image: '/work/10.png',
    category: 'Training',
    name: 'Dance Classes',
    description:
      'Comprehensive classes for all levels, teaching a variety of dance styles with expert instructors.',
     link: '/work/10-full.jpg',
  },
  {
    image: '/work/7.png',
    category: 'Personal',
    name: 'Wedding Dance',
    description:
      'Custom choreography for couples to create magical and unforgettable first dance moments.',
     link: '/work/7-full.jpg',
  },
  {
    image: '/work/11.png',
    category: 'Corporate',
    name: 'Team-Building Workshops',
    description:
      'Interactive dance activities fostering collaboration, creativity, and team spirit at work.',
     link: '/work/11-full.jpg',
  },
  {
    image: '/work/12.png',
    category: 'Corporate',
    name: 'Event Dance Shows',
    description:
      'Captivating performances tailored to elevate any corporate event or conference with energy.',
     link: '/work/12-full.jpg',
  },
  {
    image: '/work/9.png',
    category: 'Corporate',
    name: 'Product Launch Performances',
    description:
      'Unique dance showcases that add excitement and enhance visibility during product launches.',
     link: '/work/9-full.jpg',
  },
  {
    image: '/work/5.png',
    category: 'Personal',
    name: 'Hen Party Dance Routines',
    description:
      'Fun, energetic group routines crafted to bring life and laughter to hen party celebrations.',
     link: '/work/5-full.jpg',
  },
  {
    image: '/work/7.png',
    category: 'Personal',
    name: 'Bridesmaids Choreography',
    description:
      'Creative group choreography for bridesmaids to make your wedding day even more special.',
     link: '/work/7-full.jpg',
  },
  {
    image: '/work/6.png',
    category: 'Personal',
    name: 'DJ Services',
    description:
      'Professional services to set the perfect mood for weddings, parties, and private events.',
     link: '/work/6-full.jpg',
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
      case 'Personal':
        return 'bg-secondary';
      case 'Training':
        return 'bg-quartary';
      default:
        return 'bg-primary';
    }
  };

  return (
    <Tabs defaultValue={category} className="mb-24 xl:mb-48">
      <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
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