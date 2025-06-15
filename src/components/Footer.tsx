
export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent mb-4">
            Gaurav Anand
          </div>
          <p className="text-muted-foreground mb-4">
            Software Engineer by Brain, Entrepreneur by Heart
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gaurav Anand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
