
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient tech-grid">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-cyan-400 bg-clip-text text-transparent leading-tight">
            Software Engineer by Brain,
            <span className="block">Entrepreneur by Heart</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building innovative software products from idea to impact. Specializing in MERN, AWS, and AI-driven solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
              onClick={() => window.open('#', '_blank')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              30-Minute Discovery Call
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-4"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
