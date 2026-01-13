export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container flex flex-col items-center justify-center gap-4 h-24 md:h-28 md:flex-row">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} STREAMLINK TECHNOLOGIES OPERATIONS. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
