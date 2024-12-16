import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader } from './ui/card';
import { ZoomIn } from 'lucide-react';
import { Badge } from './ui/badge';
import * as Dialog from '@radix-ui/react-dialog';

const ProjectCard = ({ project, bgClass }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* Image */}
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={247}
            height={250}
            alt={project.name}
            priority
          />
          {/* btn links */}
          <div className="flex gap-x-4">
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
                  <ZoomIn className="text-white" />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                {/* Overlay */}
                <Dialog.Overlay className="fixed inset-0 bg-white/80 backdrop-blur-sm z-40" />
                {/* Content */}
                <Dialog.Content
                  className="fixed z-50 inset-0 flex items-center justify-center p-4"
                >
                  <div className="bg-white max-w-4xl w-full rounded-lg shadow-lg focus:outline-none relative">
                    {/* Dialog Title for Accessibility */}
                    <Dialog.Title className="sr-only">
                      {project.name}
                    </Dialog.Title>
                    {/* Close button */}
                    <Dialog.Close className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center sm:top-4 sm:right-4">
                      ✕
                    </Dialog.Close>
                    {/* Content */}
                    <div className="flex flex-col items-center p-4">
                      <div className="relative w-full max-w-2xl">
                        <Image
                          src={project.link}
                          alt={project.name}
                          className="w-full h-auto"
                          width={800}
                          height={800}
                        />
                      </div>
                      <h4 className="text-lg lg:text-2xl font-semibold my-4 text-center">
                        {project.name}
                      </h4>
                      <p className="text-gray-600 text-center lg:text-lg">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge
          className={`bg-quartary uppercase text-sm font-medium mb-2 absolute top-4 left-5 ${bgClass}`}
        >
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
