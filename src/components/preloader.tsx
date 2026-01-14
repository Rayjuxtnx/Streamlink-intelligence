'use client';

export function Preloader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <div className="relative flex items-center justify-center w-64 h-64">
        <div className="absolute inset-0 bg-primary/20 rounded-full animate-preloader-pulse-outer"></div>
        <div className="absolute inset-4 bg-primary/30 rounded-full animate-preloader-pulse-inner"></div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-yellow to-primary-foreground">
            Streamlink
          </h1>
        </div>
      </div>
       <p className="mt-4 text-lg text-muted-foreground animate-pulse">
        The Best in Kenya & East Africa
      </p>
      <p className="mt-8 text-sm text-muted-foreground animate-pulse">Initializing intelligent systems...</p>
    </div>
  );
}
