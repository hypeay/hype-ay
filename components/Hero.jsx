import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Hype-ay
            </div>
            <h2 className="h2 mb-4">Your Gateway to Unforgettable Moments</h2>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Welcome! We are passionate about creating extraordinary
              experiences through dance and entertainment.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-6">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Us <Send size={18} />
                </Button>
              </Link>
              <Link
                href="https://www.legitfit.com/t/dancewithgio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="gap-x-2">
                  Book a Class
                </Button>
              </Link>
            </div>
            {/* New Buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0">
              <Link
                href={{
                  pathname: "/services",
                  query: { category: "Corporate" },
                }}
              >
                <Button variant="outline" className="gap-x-2">
                  Corporate Services <RiBriefcase4Fill size={18} />
                </Button>
              </Link>
              <Link
                href={{
                  pathname: "/services",
                  query: { category: "Personal" },
                }}
              >
                <Button variant="outline" className="gap-x-2">
                  Personal Services <RiTeamFill size={18} />
                </Button>
              </Link>
            </div>
            {/* socials */}
            <Socials
              containerStyles="hidden xl:flex gap-x-6 mx-auto xl:mx-0 mt-8"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[40%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={6}
              badgeText="Years Of Experience"
            />
            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={1}
              endCountText="k"
              badgeText="Finished Projects"
            />
            {/* badge 3 */}
            <Badge
              containerStyles="absolute top-[60%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={1}
              endCountText="k"
              badgeText="Happy Clients"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/developer.png"
            />
          </div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
