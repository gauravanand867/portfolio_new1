import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Sparkles } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Featured Work
          </h2>

          {/* Featured Project - Tourbee.in */}
          <div className="mb-16">
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <CardTitle className="text-2xl md:text-3xl">Tourbee.in</CardTitle>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      Featured Project
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open('https://tourbee.in', '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Site
                  </Button>
                </div>
                <CardDescription className="text-lg">
                  My primary entrepreneurial venture demonstrating end-to-end product capabilities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-primary">My Role & Impact</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Founder driving product strategy & feature planning</li>
                      <li>• Technical architecture & full-stack development</li>
                      <li>• MERN stack, Next.js, and AWS infrastructure</li>
                      <li>• Code review processes & quality assurance</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-primary flex items-center">
                      <Sparkles className="mr-2 h-5 w-5" />
                      AI Trip Planner
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Revolutionary AI-powered feature that generates personalized, day-by-day travel itineraries based on user preferences. Leverages LLM APIs and advanced prompt engineering to deliver highly personalized suggestions that save planning time and uncover unique travel experiences.
                    </p>
                  </div>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                  <h4 className="text-lg font-semibold mb-3">Technical Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'Node.js', 'AWS Lambda', 'OpenAI API', 'MongoDB', 'Prompt Engineering', 'Serverless', 'CI/CD'].map((tech) => (
                      <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card hover:bg-card/80 transition-all duration-300 border-border hover:border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Enterprise Applications
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-5 w-5 text-muted-foreground hover:text-primary"
                    onClick={() => window.open('https://github.com/gauravanand867', '_blank')}
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </CardTitle>
                <CardDescription>
                  High-performance applications for enterprise clients
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Developed and scaled robust backend APIs using Node.js and Express, implemented serverless architectures with AWS Lambda, and established CI/CD practices for reliable deployments.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'AWS Lambda', 'PostgreSQL', 'Jenkins'].map((tech) => (
                    <span key={tech} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card hover:bg-card/80 transition-all duration-300 border-border hover:border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Full-Stack Projects
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-5 w-5 text-muted-foreground hover:text-primary"
                    onClick={() => window.open('https://github.com/gauravanand867', '_blank')}
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </CardTitle>
                <CardDescription>
                  MERN stack applications with modern UX
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Built comprehensive web applications including trading platforms and streaming services, showcasing expertise in React, MongoDB, and modern development practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'MongoDB', 'Express', 'TypeScript', 'Material-UI'].map((tech) => (
                    <span key={tech} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
