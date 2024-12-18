"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from "./AnimatedText";
import WorkItem from "./WorkItem";

// sample data for projects with various categories
const data = [
  {
    href: "",
    category: "Corporate",
    img: "/work/1.png",
    title: "Microsoft Carnival 2024",
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
  // extract unique categpries from the data
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  // create tab data with "all" category and unique categories from data
  const tabData = [
    { category: "all" },
    ...uniqueCategories.map((category) => ({ category })),
  ];

  // state to manage the currently selected tab
  const [tabValue, setTabValue] = useState("all");
  // number of items to show initially
  const [visibleItems, setVIsibleItems] = useState(6);

  // filter work items based on the selected tab
  const filterWork =
    tabValue === "all"
      ? data.filter((item) => item.category !== "all")
      : data.filter((item) => item.category === tabValue);

  // handle loading more items
  const loadMoreItems = () => {
    // adjust the number to control how many items are loaded at a time
    setVIsibleItems((prev) => prev + 2);
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
        We believe every event tells a story. From dazzling performances to
        unforgettable celebrations, we bring passion and artistry to life.
        Here’s a glimpse into some of the magical moments we’ve had the honor
        of creating.
      </p>
    </div>

          {/* render content for the selected tab */}
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
                    <WorkItem {...item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {/* load more button */}
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
    </section>
  );
};

export default Work;
