"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { ZoomIn } from "lucide-react";
import { Badge } from "./ui/badge";

const EventCard = ({ category, img, title, className, onClick }) => {
  return (
    <div onClick={onClick} className="group cursor-pointer">
      <div className="w-full h-[300px] rounded-[30px] flex items-center justify-center mb-6 relative overflow-hidden bg-[#f4f4f4]">
        {/* Categoria */}
        <Badge
          className={`${className} text-base z-20 absolute top-6 left-6 capitalize`}
        >
          {category}
        </Badge>

        {/* Imagem */}
        <Image
          src={img}
          fill
          priority
          quality={100}
          className="object-cover object-top group-hover:scale-105 transition-all duration-500"
          alt={title}
        />

        {/* Lupa no hover */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center">
            <ZoomIn className="text-xl" />
          </div>
        </div>
      </div>

      {/* Título + Ícone → como estava antes */}
      <div className="flex items-center justify-center">
        <div className="flex-1">
          <h3 className="h3 text-lg lg:text-2xl font-semibold my-4 text-center">
            {title}
          </h3>
        </div>
        <div className="bg-primary text-white rounded-full w-[48px] h-[48px] flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500">
          <FiArrowRight className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
