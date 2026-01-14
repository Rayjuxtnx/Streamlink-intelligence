import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container flex flex-col items-center justify-center gap-4 h-24 md:h-28">
        <div className="flex gap-4">
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Terms & Conditions
          </Link>
        </div>
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} STREAMLINK TECHNOLOGIES OPERATIONS. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
