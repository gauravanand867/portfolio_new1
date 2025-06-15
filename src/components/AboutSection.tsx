
export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            My Approach
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I embody the perfect blend of technical expertise and entrepreneurial vision. With extensive experience across the full product lifecycle—from strategic planning and ideation through hands-on development, rigorous review, and successful deployment.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey combines enterprise-grade development with dynamic freelance work, always focusing on transforming complex challenges into user-centric solutions. I have a strong foundation in system design and architecture, ensuring scalable and robust applications.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My entrepreneurial venture, <span className="text-primary font-semibold">Tourbee.in</span>, exemplifies my ability to take ideas from concept to reality, featuring cutting-edge AI capabilities that demonstrate my passion for leveraging Generative AI in practical applications.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-cyan-400/10 p-8 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-primary">Core Strengths</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Full-cycle product development expertise</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">MERN stack & AWS cloud architecture</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">AI integration & prompt engineering</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Strategic product thinking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
