'use client';

import { Mountain } from 'lucide-react';

export function Preloader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <div className="relative flex items-center justify-center w-48 h-48">
        <div className="absolute inset-0 bg-primary/20 rounded-full animate-preloader-pulse-outer"></div>
        <div className="absolute inset-4 bg-primary/30 rounded-full animate-preloader-pulse-inner"></div>
        <div className="relative z-10 flex flex-col items-center text-center">
            <Mountain className="h-16 w-16 text-primary animate-glow" />
            <span className="mt-4 text-xl font-bold text-primary-foreground animate-glow-subtle">
                Streamlink
            </span>
        </div>
      </div>
       <p className="mt-8 text-lg text-muted-foreground animate-pulse">Initializing intelligent systems...</p>
    </div>
  );
}
