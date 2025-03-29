"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ServiceCard from "@/components/ServiceCard";
import * as Dialog from "@radix-ui/react-dialog";
import KeenSlider from "@/components/KeenSlider"; // se ainda não estiver
import { X } from "lucide-react";

const projectData = [
  // Corporate
  {
    img: "/work/8.jpg",
    category: "Corporate",
    title: "Corporate Dance Events/Shows",
    description:
      "Dynamic workshops and performances designed to engage and energize corporate teams and audiences.",
    gallery: ["/work/8.jpg"],
  },
  {
    img: "/work/11.png",
    category: "Corporate",
    title: "Corporate Dance Class and Workshops",
    description:
      "Interactive dance classes and workshops tailored to corporate needs, boosting team spirit and creativity.",
    gallery: ["/work/11.jpg"],
  },
  {
    img: "/work/10.jpg",
    category: "Corporate",
    title: "Stretching and Flexibility Class",
    description:
      "Stretching sessions designed to improve flexibility, reduce stress, and enhance workplace wellness.",
    gallery: ["/work/10.jpg"],
  },
  {
    img: "/work/6.jpg",
    category: "Corporate",
    title: "DJ Services",
    description:
      "Professional DJ services to provide the perfect soundtrack for corporate events and celebrations.",
    gallery: ["/work/6.jpg"],
  },
  {
    img: "/work/5.jpg",
    category: "Corporate",
    title: "Decoration",
    description:
      "Customized decoration services to enhance the ambiance and aesthetics of corporate events.",
    gallery: ["/work/5.jpg"],
  },
  {
    img: "/work/7.jpg",
    category: "Corporate",
    title: "Makeup/Brow Artist for Special Events",
    description:
      "Professional makeup and brow artist services tailored for corporate events and special occasions.",
    gallery: ["/work/7.jpg"],
  },

  // Non-Corporate
  {
    img: "/work/10.jpg",
    category: "Non-Corporate",
    title: "Dance Classes/Stretching Classes",
    description:
      "Comprehensive dance and stretching classes for all levels, improving fitness, flexibility, and confidence.",
    gallery: ["/work/10.jpg"],
  },
  {
    img: "/work/5.jpg",
    category: "Non-Corporate",
    title: "Hen Party Classes",
    description:
      "Fun and energetic dance classes to add laughter and excitement to hen party celebrations.",
    gallery: ["/work/5.jpg"],
  },
  {
    img: "/work/7.jpg",
    category: "Non-Corporate",
    title: "Bridesmaids Choreos",
    description:
      "Creative group choreography for bridesmaids to make your wedding day extra special.",
    gallery: ["/work/7.jpg"],
  },
  {
    img: "/services/wedding (1).jpg",
    category: "Non-Corporate",
    title: "Wedding First Dance",
    description:
      "Custom choreography for couples to create magical and unforgettable first dance moments.",
    gallery: ["/work/6.jpg"],
  },
  {
    img: "/work/6.jpg",
    category: "Non-Corporate",
    title: "DJ Services",
    description:
      "Professional DJ services to set the perfect mood for weddings, parties, and private events.",
    gallery: ["/work/6.jpg"],
  },
  {
    img: "/work/5.jpg",
    category: "Non-Corporate",
    title: "Decoration",
    description:
      "Personalized decoration services to create beautiful and memorable event settings.",
    gallery: ["/work/5.jpg"],
  },
  {
    img: "/services/makeup.jpg",
    category: "Non-Corporate",
    title: "Makeup/Brow Artist for Special Events",
    description:
      "Expert makeup and brow services to help you look your best for weddings, parties, and other special occasions.",
    gallery: ["/work/7.jpg"],
  },
];

const uniqueCategories = [
  "all services",
  ...new Set(projectData.map((item) => item.category)),
];

// Componente para Filtragem
const FilteredProjects = () => {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all services";
  const [category, setCategory] = useState(initialCategory);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  const handleOpenProject = (project) => setSelectedProject(project);
  const closeProjectModal = () => setSelectedProject(null);

  const filteredProjects = projectData.filter((project) =>
    category === "all services" ? project : project.category === category
  );

  const getCategoryClass = (category) => {
    switch (category) {
      case "Corporate":
        return "bg-primary";
      case "Non-Corporate":
        return "bg-secondary";
      case "Training":
        return "bg-quartary";
      default:
        return "bg-primary";
    }
  };

  return (
    <>
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

        {uniqueCategories.map((cat) => (
          <TabsContent
            key={cat}
            value={cat}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          >
            {filteredProjects
              .filter(
                (project) => cat === "all services" || project.category === cat
              )
              .map((project, index) => (
                <ServiceCard
                  key={index}
                  project={project}
                  bgClass={getCategoryClass(project.category)}
                  onClick={() => handleOpenProject(project)}
                />
              ))}
          </TabsContent>
        ))}
      </Tabs>

      {/* Modal */}
      {selectedProject && (
        <Dialog.Root open={!!selectedProject} onOpenChange={closeProjectModal}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
            <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-6">
              <div className="bg-white dark:bg-secondary rounded-lg shadow-xl p-6 max-w-3xl w-full">
                <Dialog.Title className="text-2xl font-bold mb-4 text-center">
                  {selectedProject.title}
                </Dialog.Title>
                <Dialog.Description className="mb-4 text-center">
                  {selectedProject.description}
                </Dialog.Description>

                <KeenSlider images={selectedProject.gallery} />

                <div className="flex justify-center mt-6">
                  <Dialog.Close asChild>
                    <button className="px-6 py-2 bg-primary text-white rounded-lg flex items-center gap-2">
                      Close <X size={18} />
                    </button>
                  </Dialog.Close>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Our Services - Hype-ay</title>
        <meta
          name="description"
          content="Explore the wide range of services offered..."
        />
      </Head>
      <section className="min-h-screen pt-12">
        <div className="container mx-auto">
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            Our services
          </h2>
          <Suspense fallback={<div>Loading...</div>}>
            <FilteredProjects />
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default Projects;
