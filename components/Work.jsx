"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from "./AnimatedText";
import WorkItem from "./WorkItem";
import { Button } from "./ui/button";
import * as Dialog from "@radix-ui/react-dialog";

// sample data for projects with various categories
const data = [
  {
    category: "Corporate",
    img: "/work/14.jpeg",
    title: "Microsoft Carnival 2025",
    description:
      "A vibrant carnival organized by Microsoft to celebrate team spirit and innovation.",
    gallery: [
      "/work/1.png",
      "/work/2.png",
      "/work/3.png",
      "/work/4.png",
      "/work/1.png",
    ],
  },
  {
    category: "Corporate",
    img: "/work/13.jpeg",
    title: "Linkedin Carnival 2025",
    description:
      "A vibrant carnival organized by Linkedin to celebrate team spirit and innovation.",
    gallery: [
      "/work/1.png",
      "/work/2.png",
      "/work/3.png",
      "/work/4.png",
      "/work/1.png",
    ],
  },
  {
    category: "Corporate",
    img: "/work/1.png",
    title: "Microsoft Carnival 2024",
    description:
      "A vibrant carnival organized by Microsoft to celebrate team spirit and innovation.",
    gallery: [
      "/work/1.png",
      "/work/2.png",
      "/work/3.png",
      "/work/4.png",
      "/work/1.png",
    ],
  },
  {
    href: "",
    category: "Corporate",
    img: "/work/2.png",
    title: "San Juan Party Accenture 2024",
  },
  {
    href: "",
    category: "Corporate",
    img: "/work/3.png",
    title: "Christmas Party at Accenture 2024",
  },
  {
    href: "",
    category: "Corporate",
    img: "/work/11.png",
    title: "Corporate Dance Classes at LinkedIn",
  },
  // Non-Corporate Events com placeholders
  {
    category: "Non-Corporate",
    img: "https://via.placeholder.com/400x250?text=Cork+Carnaval+2025",
    title: "Cork Carnaval 2025",
    description:
      "A colorful street celebration filled with music, dance, and culture in the heart of Cork.",
    gallery: [
      "https://via.placeholder.com/200x150?text=Cork+1",
      "https://via.placeholder.com/200x150?text=Cork+2",
      "https://via.placeholder.com/200x150?text=Cork+3",
    ],
  },
  {
    category: "Non-Corporate",
    img: "https://via.placeholder.com/400x250?text=Carnaval+Real+2025",
    title: "Carnaval Real Event 2025",
    description:
      "An unforgettable night of samba, sparkle, and celebration at the Carnaval Real!",
    gallery: [
      "https://via.placeholder.com/200x150?text=Real+1",
      "https://via.placeholder.com/200x150?text=Real+2",
    ],
  },
  {
    category: "Non-Corporate",
    img: "https://via.placeholder.com/400x250?text=International+Show+2023",
    title: "International Show 2023",
    description:
      "A showcase of global talent and diverse performances, celebrating cultures from around the world.",
    gallery: [
      "https://via.placeholder.com/200x150?text=Show+1",
      "https://via.placeholder.com/200x150?text=Show+2",
      "https://via.placeholder.com/200x150?text=Show+3",
    ],
  },
  {
    category: "Non-Corporate",
    img: "https://via.placeholder.com/400x250?text=SOHO+-+Club+Dancer",
    title: "SOHO - Club Dancer",
    description:
      "An electrifying night of music and dance at SOHO, featuring top DJs and performances.",
    gallery: [
      "https://via.placeholder.com/200x150?text=SOHO+1",
      "https://via.placeholder.com/200x150?text=SOHO+2",
    ],
  },
];

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

const Work = () => {
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  const tabData = [
    { category: "All Services" },
    ...uniqueCategories.map((category) => ({ category })),
  ];

  const [tabValue, setTabValue] = useState("All Services");
  const [visibleItems, setVIsibleItems] = useState(8);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filterWork =
    tabValue === "All Services"
      ? data.filter((item) => item.category !== "All Services")
      : data.filter((item) => item.category === tabValue);

  const loadMoreItems = () => {
    setVIsibleItems((prev) => prev + 2);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <section className="pt-24 min-h-[1000px]" id="work">
      <div className="container mx-auto">
        <Tabs defaultValue="All Services" className="w-full flex flex-col mb-8">
          <div className="flex flex-col items-center text-center">
            <AnimatedText
              text="Our Latest Events"
              textStyles="h2 section-title mb-4 tracking-normal"
            />
            <p className="subtitle max-w-[800px]">
              We believe every event tells a story. From dazzling performances
              to unforgettable celebrations, we bring passion and artistry to
              life. Here’s a glimpse into some of the magical moments we’ve had
              the honor of creating.
            </p>
          </div>
          <TabsList className="flex justify-center w-full h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {tabData.map(({ category }) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setTabValue(category)}
                className="capitalize w-[162px] md:w-auto"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* Render Content for Selected Tab */}
          <TabsContent value={tabValue} className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
              <AnimatePresence>
                {filterWork.slice(0, visibleItems).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <WorkItem
                      {...item}
                      className={getCategoryClass(item.category)}
                      onClick={() => handleEventClick(item)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {/* Load More Button */}
            {visibleItems < filterWork.length && (
              <div className="flex justify-center mt-12">
                <Button onClick={loadMoreItems} className="btn btn-accent">
                  Load more
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Radix Modal */}
      {selectedEvent && (
        <Dialog.Root open={!!selectedEvent} onOpenChange={closeEventDetails}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
            <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-6">
              <div className="bg-white dark:bg-secondary rounded-lg shadow-xl p-6 max-w-3xl w-full">
                <Dialog.Title className="text-2xl font-bold mb-4">
                  {selectedEvent.title}
                </Dialog.Title>
                <Dialog.Description className="mb-4">
                  {selectedEvent.description}
                </Dialog.Description>
                <div className="grid grid-cols-2 gap-4">
                  {selectedEvent.gallery.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${selectedEvent.title} image ${index + 1}`}
                      className="rounded-lg"
                    />
                  ))}
                </div>
                <Dialog.Close asChild>
                  <button className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg">
                    Close
                  </button>
                </Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </section>
  );
};

export default Work;
