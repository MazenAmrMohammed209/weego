export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-8">
      <div className="container-base text-center text-sm text-foreground/70">
        <p>&copy; {new Date().getFullYear()} WEEGO. All rights reserved.</p>
      </div>
    </footer>
  );
}
