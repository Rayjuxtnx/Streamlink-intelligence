
'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Our Projects' },
  { href: '/our-team', label: 'Our Team' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const logoImage = PlaceHolderImages.find((img) => img.id === 'logo');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "border-b border-border/40 bg-background/80 backdrop-blur-sm" : "bg-transparent"
    )}>
       {isScrolled && <div className="absolute inset-0 w-full h-full header-scrolled-bg -z-10" />}
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {logoImage && <Image src={logoImage.imageUrl} alt={logoImage.description} width={120} height={40} data-ai-hint={logoImage.imageHint} />}
        </Link>
        <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === link.href
                  ? 'text-foreground'
                  : 'text-foreground/60'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/contact">Request a Consultation</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="p-4">
                <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                  {logoImage && <Image src={logoImage.imageUrl} alt={logoImage.description} width={120} height={40} data-ai-hint={logoImage.imageHint} />}
                </Link>
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          'p-2 rounded-md transition-colors hover:bg-accent',
                          pathname === link.href
                            ? 'text-foreground bg-accent'
                            : 'text-foreground/60'
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                   <SheetClose asChild>
                      <Link
                        href="/terms"
                        className={cn(
                          'p-2 rounded-md transition-colors hover:bg-accent',
                          pathname === "/terms"
                            ? 'text-foreground bg-accent'
                            : 'text-foreground/60'
                        )}
                      >
                        Terms & Conditions
                      </Link>
                    </SheetClose>
                </nav>
                <SheetClose asChild>
                  <Button asChild className="w-full mt-6">
                    <Link href="/contact">Request a Consultation</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
