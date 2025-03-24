"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from "./AnimatedText";
import EventCard from "./EventCard";
import { Button } from "./ui/button";
import * as Dialog from "@radix-ui/react-dialog";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import KeenSlider from "./KeenSlider";
import { X } from "lucide-react";

const data = [
  {
    category: "Corporate",
    img: "/work/14.jpeg",
    title: "Microsoft Carnival 2025",
    description:
      "A vibrant carnival organized by Microsoft to celebrate team spirit and innovation.",
    gallery: [
      "/work/microsoft-2025/microsoft-2025 (1).jpg",
      "/work/microsoft-2025/microsoft-2025 (2).jpg",
      "/work/microsoft-2025/microsoft-2025 (3).jpg",
      "/work/microsoft-2025/microsoft-2025 (4).jpg",
      "/work/microsoft-2025/microsoft-2025 (5).jpg",
    ],
    video: [
      "/work/microsoft-2025/video/microsoft-2025-video (1).mp4",
      "/work/microsoft-2025/video/microsoft-2025-video (2).mp4",
      "/work/microsoft-2025/video/microsoft-2025-video (3).mp4",
    ],
  },
  {
    category: "Corporate",
    img: "/work/13.jpg",
    title: "Accenture Carnival 2025",
    description:
      "A vibrant carnival organized by Linkedin to celebrate team spirit and innovation.",
    gallery: [
      "/work/accenture-carnaval-2025/accenture-carnaval (1).jpg",
      "/work/accenture-carnaval-2025/accenture-carnaval (2).jpg",
      "/work/accenture-carnaval-2025/accenture-carnaval (3).jpg",
      "/work/accenture-carnaval-2025/accenture-carnaval (4).jpg",
    ],
  },
  {
    category: "Corporate",
    img: "/work/20.jpeg",
    title: "Linkedin Carnival 2025",
    description:
      "A vibrant carnival organized by Linkedin to celebrate team spirit and innovation.",
    gallery: [
      "/work/linkedin-carnaval-2025/linkedin-carnaval-2025 (1).jpeg",
      "/work/linkedin-carnaval-2025/linkedin-carnaval-2025 (2).jpeg",
      "/work/linkedin-carnaval-2025/linkedin-carnaval-2025 (3).jpeg",
      "/work/linkedin-carnaval-2025/linkedin-carnaval-2025 (4).jpeg",
      "/work/linkedin-carnaval-2025/linkedin-carnaval-2025 (5).jpeg",
      "/work/linkedin-carnaval-2025/linkedin-carnaval-2025 (6).jpeg",
      "/work/linkedin-carnaval-2025/linkedin-carnaval-2025 (7).jpeg",
      "/work/linkedin-carnaval-2025/linkedin-carnaval-2025 (8).jpeg",
    ],
  },
  {
    category: "Corporate",
    img: "/work/1.jpg",
    title: "Microsoft Carnival 2024",
    description:
      "A vibrant carnival organized by Microsoft to celebrate team spirit and innovation.",
    gallery: [
      "/work/microsoft-2024/microsoft-2024 (1).jpg",
      "/work/microsoft-2024/microsoft-2024 (2).jpg",
      "/work/microsoft-2024/microsoft-2024 (3).jpg",
      "/work/microsoft-2024/microsoft-2024 (4).jpg",
      "/work/microsoft-2024/microsoft-2024 (5).jpg",
    ],
  },
  {
    category: "Corporate",
    img: "/work/2.jpg",
    title: "San Juan Party Accenture 2024",
    description:
      "A festive celebration hosted by Accenture with music, dance, and vibrant performances to mark San Juan night.",
    gallery: ["/work/2.png", "/work/3.png", "/work/4.png"],
  },
  {
    category: "Corporate",
    img: "/work/3.png",
    title: "Christmas Party at Accenture 2024",
    description:
      "A magical Christmas celebration filled with joy, festive decorations, and unforgettable moments at Accenture.",
    gallery: [
      "/work/accenture-christmas-2024/accenture-xmass-2024 (1).jpg",
      "/work/accenture-christmas-2024/accenture-xmass-2024 (2).jpg",
      "/work/accenture-christmas-2024/accenture-xmass-2024 (3).jpg",
      "/work/accenture-christmas-2024/accenture-xmass-2024 (4).jpg",
      "/work/accenture-christmas-2024/accenture-xmass-2024 (5).jpg",
      "/work/accenture-christmas-2024/accenture-xmass-2024 (6).jpg",
      "/work/accenture-christmas-2024/accenture-xmass-2024 (7).jpg",
      "/work/accenture-christmas-2024/accenture-xmass-2024 (8).jpg",
    ],
  },
  {
    category: "Corporate",
    img: "/work/11.jpg",
    title: "Corporate Dance Classes at LinkedIn",
    description:
      "A series of engaging dance workshops offered at LinkedIn to boost wellness and team bonding.",
    gallery: [
      "/work/linkedin-corporate/corporate (1).HEIC",
      "/work/linkedin-corporate/corporate (2).jpg",
      "/work/linkedin-corporate/corporate (3).jpg",
      "/work/linkedin-corporate/corporate (4).jpg",
      "/work/linkedin-corporate/corporate (5).jpg",
      "/work/linkedin-corporate/corporate (6).jpg",
      "/work/linkedin-corporate/corporate (7).jpg",
      "/work/linkedin-corporate/corporate (10).jpg",
    ],
  },
  {
    category: "Non-Corporate",
    img: "/work/17.jpg",
    title: "Cork Carnaval 2025",
    description:
      "A colorful street celebration filled with music, dance, and culture in the heart of Cork.",
    gallery: [
      "/work/cork-carnaval-2025/cork-carnaval-2025 (1).jpg",
      "/work/cork-carnaval-2025/cork-carnaval-2025 (2).jpg",
      "/work/cork-carnaval-2025/cork-carnaval-2025 (3).jpg",
      "/work/cork-carnaval-2025/cork-carnaval-2025 (4).jpg",
    ],
    video: ["/work/cork-carnaval-2025/cork-carnaval-2025 (1).mp4"],
  },
  {
    category: "Non-Corporate",
    img: "/work/15.jpg",
    title: "Carnaval Real Event 2025",
    description:
      "An unforgettable night of samba, sparkle, and celebration at the Carnaval Real!",
    gallery: [
      "/work/carnaval-real-2025/carnaval-real-2025 (1).jpg",
      "/work/carnaval-real-2025/carnaval-real-2025 (2).jpg",
      "/work/carnaval-real-2025/carnaval-real-2025 (3).jpg",
    ],
    video: [
      "/work/carnaval-real-2025/carnaval-real-2025 (1).mp4",
      "/work/carnaval-real-2025/carnaval-real-2025 (2).mp4",
      "/work/carnaval-real-2025/carnaval-real-2025 (3).mp4",
    ],
  },
  {
    category: "Non-Corporate",
    img: "/work/19.jpg",
    title: "Diceys - Carnaval 2025",
    description:
      "An electrifying night of music and dance at SOHO, featuring top DJs and performances.",
    gallery: [
      "/work/carnaval-diceys-2025/diceys (1).jpg",
      "/work/carnaval-diceys-2025/diceys (2).jpg",
      "/work/carnaval-diceys-2025/diceys (3).jpg",
      "/work/carnaval-diceys-2025/diceys (4).jpg",
      "/work/carnaval-diceys-2025/diceys (5).jpg",
      "/work/carnaval-diceys-2025/diceys (6).jpg",
      "/work/carnaval-diceys-2025/diceys (7).jpg",
      "/work/carnaval-diceys-2025/diceys (8).jpg",
    ],
    video: [
      "/work/carnaval-diceys-2025/diceys (1).mp4",
      "/work/carnaval-diceys-2025/diceys (2).mp4",
      "/work/carnaval-diceys-2025/diceys (3).mp4",
    ],
  },
  {
    category: "Non-Corporate",
    img: "/work/18.jpg",
    title: "International Show 2023",
    description:
      "A showcase of global talent and diverse performances, celebrating cultures from around the world.",
    gallery: [
      "/work/international/international (1).jpg",
      "/work/international/international (2).jpg",
      "/work/international/international (3).jpg",
      "/work/international/international (4).jpg",
      "/work/international/international (5).jpg",
      "/work/international/international (6).jpg",
      "/work/international/international (7).jpg",
      "/work/international/international (8).jpg",
      "/work/international/international (9).jpg",
      "/work/international/international (10).jpg",
    ],
  },

  {
    category: "Non-Corporate",
    img: "/work/16.jpg",
    title: "SOHO - Club Dancer",
    description:
      "An electrifying night of music and dance at SOHO, featuring top DJs and performances.",
    gallery: [
      "/work/soho/soho (1).jpg",
      "/work/soho/soho (2).jpg",
      "/work/soho/soho (3).jpg",
      "/work/soho/soho (4).jpg",
      "/work/soho/soho (5).jpg",
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

const Event = () => {
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
          <TabsList className="w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
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
                    <EventCard
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
                <Button onClick={loadMoreItems} variant="secondary">
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
            <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-4 md:py-8 md:px-6">
              <div className="bg-white dark:bg-secondary rounded-lg shadow-xl p-6 w-full max-w-3xl max-h-[95vh] overflow-y-auto">
                <Dialog.Title className="text-2xl font-bold mb-4 text-center">
                  {selectedEvent.title}
                </Dialog.Title>
                <Dialog.Description className="mb-4 text-center">
                  {selectedEvent.description}
                </Dialog.Description>

                {/* Keen Slider Integration */}
                <KeenSlider
                  mediaItems={[
                    ...(selectedEvent.gallery || []),
                    ...(selectedEvent.video || []),
                  ]}
                />

                <div className="flex justify-center mt-6">
                  <Dialog.Close asChild>
                    <button className="px-6 py-2 bg-secondary text-white rounded-lg flex items-center gap-2">
                      Close <X size={18} />
                    </button>
                  </Dialog.Close>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </section>
  );
};

export default Event;
