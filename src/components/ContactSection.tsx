
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Mail, Github, Linkedin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Ready to transform your ideas into impactful software solutions? Let's discuss your project.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-primary/10 to-cyan-400/10 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Schedule a Discovery Call</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Book a 30-minute consultation to discuss your project needs and explore how we can work together.
                </p>
                <Button 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
                  onClick={() => window.open('#', '_blank')}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Consultation
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/30 transition-all duration-300">
              <CardHeader>
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Direct Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>gauravanand867@gmail.com</span>
                </div>
                
                <div className="flex justify-center space-x-4 pt-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open('https://linkedin.com/in/gauravanand867', '_blank')}
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open('https://github.com/gauravanand867', '_blank')}
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground">
              Based in India • Available for remote collaboration worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
