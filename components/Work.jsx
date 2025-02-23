"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from "./AnimatedText";
import WorkItem from "./WorkItem";
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
];

const Work = () => {
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  const tabData = [
    { category: "all" },
    ...uniqueCategories.map((category) => ({ category })),
  ];

  const [tabValue, setTabValue] = useState("all");
  const [visibleItems, setVIsibleItems] = useState(6);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filterWork =
    tabValue === "all"
      ? data.filter((item) => item.category !== "all")
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
        <Tabs defaultValue="all" className="w-full flex flex-col mb-8">
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
                      onClick={() => handleEventClick(item)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {/* Load More Button */}
            {visibleItems < filterWork.length && (
              <div className="flex justify-center mt-12">
                <button onClick={loadMoreItems} className="btn btn-accent">
                  Load more
                </button>
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
