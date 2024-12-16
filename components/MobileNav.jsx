'use client';

import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';

// Importação de Navegação e Logo
import Nav from './Nav';
import Logo from './Logo';
import Socials from './Socials';
import { DialogTitle } from '@radix-ui/react-dialog'; // Certifique-se de importar o DialogTitle corretamente

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar a abertura

  const handleClose = () => {
    setIsOpen(false); // Fecha o menu ao clicar em um link
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <AlignJustify
          className="cursor-pointer"
          aria-label="Toggle mobile menu"
        />
      </SheetTrigger>
      <SheetContent>
        {/* Título acessível para leitores de tela */}
        <DialogTitle className="sr-only">Mobile Navigation Menu</DialogTitle>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            {/* Logo */}
            <Logo />
            {/* Navegação */}
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
              onLinkClick={handleClose} // Fecha o menu ao clicar em um link
            />
          </div>
          {/* Ícones Sociais */}
          <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
