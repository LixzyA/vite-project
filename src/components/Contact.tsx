
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "felix.antony168@gmail.com",
      href: "mailto:felix.antony168@gmail.com",
      color: "text-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 81170721012",
      href: "tel:+6281170721012",
      color: "text-green-600",
      bgColor: "bg-green-50 hover:bg-green-100",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jakarta, Indonesia",
      href: "#",
      color: "text-purple-600",
      bgColor: "bg-purple-50 hover:bg-purple-100",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Send className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Contact Information Cards */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-8">Get in touch</h3>
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-6">
                    <a href={info.href} className="flex items-center space-x-4 group-hover:scale-105 transition-transform duration-200">
                      <div className={`${info.bgColor} p-4 rounded-xl transition-colors duration-200`}>
                        <info.icon className={`h-6 w-6 ${info.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                          {info.label}
                        </h4>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center lg:text-left">
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-12 rounded-3xl border border-primary/20 backdrop-blur-sm">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-4">Ready to start?</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Drop me a line and let's discuss your next project. I'm always excited to take on new challenges and bring creative ideas to life.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full sm:w-auto text-lg px-8 py-6 rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <a href="mailto:felix.antony168@gmail.com" className="inline-flex items-center justify-center">
                      <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
                      Send me an email
                    </a>
                  </Button>
                  
                  <div className="flex items-center justify-center sm:justify-start space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      Usually responds within 24 hours
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
