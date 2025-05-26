import Skills from "./Skills";

const About = () => {
  return (
    <>
      <section id="about" className="py-16 md:py-24 bg-secondary/50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-4">
              I'm an aspiring Backend & Machine Learning Engineer with 3 years of hands-on experience developing systems and ML/AI models through academic projects and research. 
              I thrive on architecting efficient data pipelines, optimizing backend services, and implementing machine learning solutions to solve complex problems.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              When I'm not coding, you can find me exploring nature trails, experimenting
              with photography, or attending tech meetups to stay connected with the
              industry.
            </p>
          </div>
        </div>
      </section>
      <Skills />
    </>
  );
};

export default About;
