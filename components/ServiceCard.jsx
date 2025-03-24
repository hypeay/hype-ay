'use client';
import Image from 'next/image';
import { Card } from './ui/card';
import { ZoomIn } from 'lucide-react';
import { Badge } from './ui/badge';

const ServiceCard = ({ project, bgClass, onClick }) => {
  return (
    <Card
      onClick={onClick}
      className="group overflow-hidden relative cursor-pointer"
    >
      {/* Badge de categoria */}
      <Badge
        className={`absolute top-4 left-5 uppercase text-sm font-medium z-10 ${bgClass}`}
      >
        {project.category}
      </Badge>

      {/* Container da imagem */}
      <div className="relative w-full h-[300px] overflow-hidden bg-[#f4f4f4] rounded-[30px]">
        <Image
          src={project.img}
          alt={project.title}
          fill
          priority
          quality={100}
          className="w-full h-full object-cover object-top md:object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Ícone de lupa no hover */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center">
            <ZoomIn className="text-xl" />
          </div>
        </div>
      </div>

      {/* Conteúdo do card */}
      <div className="text-center px-4 py-6">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm">{project.description}</p>
      </div>
    </Card>
  );
};

export default ServiceCard;
