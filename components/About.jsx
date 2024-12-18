import Head from "next/head";
import AnimatedText from "./AnimatedText";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MailIcon,
  Briefcase,
  Network,
  Star,
} from "lucide-react";

const infoData = [
  {
    icon: <Briefcase size={20} />,
    text: "Hype-ay",
  },
  {
    icon: <MailIcon size={20} />,
    text: "management@hypeay.com",
    link: "mailto:management@hypeay.com",
  },
  {
    icon: <Network size={20} />,
    text: "7 employees",
  },

];

const qualificationData = [
  {
    title: "We Entertain",
    data: [
      {
        qualification:
          "With an incredible experienced team of artists, dancers, DJs, decorators and much more.",
      },
      {
        company: "Dance Classes & Workshops",
        role: "Conducted interactive classes and workshops for all age groups, focusing on skill development and fun.",
      },

      {
        company: "Corporate Events",
        role: "Tailored workshops and performances for leading companies.",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Dance Shows",
        role: "Delivered over 100 performances across events, festivals, and corporate stages.",
      },
      {
        company: "Wedding & Hen Parties",
        role: "Over 10 weddings choreographed and 15 hen party celebrations.",
      },
      
      {
        company: "Decoration",
        role: "Designed and provided unique event decorations to enhance ambiance and aesthetics.",
      },
      {
        company: "Makeup",
        role: "Professional makeup services tailored for performances, weddings, and special occasions.",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        category: "Dance Styles",
        description:
          "Solo and Ballroom dance.",
      },
      {
        category: "Event Expertise",
        description: "Choreography, DJing, and crowd engagement.",
      },
      {
        category: "Teaching",
        description: "Professional instructors adept at all skill levels.",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        category: "Music & Tech",
        description:
          "State-of-the-art sound systems, lighting setups, and DJ equipment.",
      },
      {
        category: "Planning & Design",
        description: "Professional tools for event planning and choreography.",
      },
    ],
  },
];

const About = () => {
  const renderInfo = () =>
    infoData.map((item, index) => (
      <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
        <div className="text-primary">{item.icon}</div>
        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-primary"
          >
            {item.text}
          </a>
        ) : (
          <div>{item.text}</div>
        )}
      </div>
    ));

  const renderList = (data) =>
    data.map((item, index) => (
      <div key={index} className="flex gap-x-8 group">
        <div className="h-[84px] w-[1px] bg-border relative ml-2">
          <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
        </div>
        <div>
          <div className="font-semibold text-xl leading-none mb-2">
            {item.company || item.category || item.qualification}
          </div>
          <div className="text-lg leading-none text-muted-foreground mb-4">
            {item.role || item.description}
          </div>
        </div>
      </div>
    ));

  return (
    <>
      <Head>
        <title>About Us - Hype-ay</title>
        <meta
          name="description"
          content="Learn about Hype-ay, a team of professional choreographers, dancers, and entertainers bringing unforgettable performances to life."
        />
        <meta
          name="keywords"
          content="Hype-ay, dance team, professional choreography, corporate events, wedding dance"
        />
        <meta property="og:title" content="About Us - Hype-ay" />
        <meta
          property="og:description"
          content="Discover Hype-ay, a team of professionals delivering spectacular dance performances and entertainment."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hypeay.com/about" />
        <meta property="og:image" content="/about/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://hypeay.com/about" />
      </Head>
      <section className="xl:h-[860px] pb-12 xl:py-auto">
        <div className="container mx-auto">
          <AnimatedText
        text="About Us"
        textStyles="h2 section-title mb-8 xl:my-16 text-center mx-auto"
      />
          <div className="flex flex-col xl:flex-row">
            {/* Image */}
            <div className="hidden xl:flex flex-1 relative">
              <DevImg
                containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
                imgSrc="/about/developer.png"
              />
            </div>
            {/* Tabs */}
            <div className="flex-1">
              <Tabs defaultValue="personal">
                <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                  <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                    Who We Are
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-[162px] xl:w-auto"
                    value="qualifications"
                  >
                    What We Do
                  </TabsTrigger>
                  <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                    Skills
                  </TabsTrigger>
                </TabsList>
                <div className="text-lg mt-12 xl:mt-8">
                  {/* Personal */}
                  <TabsContent value="personal">
                    <div className="text-center xl:text-left">
                      <h3 className="h3 mb-4 text-lg sm:text-xl whitespace-normal leading-tight">
                        Welcome to <br className="block sm:hidden" /> Hype-ay!
                      </h3>
                      <p className="subtitle max-w-xl mx-auto xl:mx-0">
                        We specialize in providing exceptional entertainment for
                        all occasions. From high-energy performances to
                        personalized classes, we bring joy, rhythm, and elegance
                        to every event.
                      </p>
                      <div className="grid xl:grid-cols-2 gap-4 mb-12">
                        {renderInfo()}
                      </div>
                    </div>
                  </TabsContent>
                  {/* Qualifications */}
                  <TabsContent value="qualifications">
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      Our Expertise
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {qualificationData.map((section, index) => (
                        <div key={index} className="flex flex-col gap-y-6">
                          <div className="flex gap-x-4 items-center text-[22px] text-primary">
                            <Briefcase />
                            <h4 className="capitalize font-medium">
                              {section.title}
                            </h4>
                          </div>
                          {renderList(section.data)}
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  {/* Skills */}
                  <TabsContent value="skills">
                    <h3 className="h3 mb-8 text-center xl:text-left">Skills</h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {skillData.map((section, index) => (
                        <div key={index} className="flex flex-col gap-y-6">
                          <div className="flex gap-x-4 items-center text-[22px] text-primary">
                            <Star />
                            <h4 className="capitalize font-medium">
                              {section.title}
                            </h4>
                          </div>
                          {renderList(section.data)}
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
