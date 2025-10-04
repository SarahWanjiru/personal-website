import React from "react";
import Form from "./Form";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sarahndungu815@gmail.com",
      href: "mailto:sarahndungu815@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/SarahWanjiru",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sarahndungu"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/shirawbedan?t=Ka7P-tKnKRG1kysM7Br78w&s=08",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div ref={ref} className="space-y-16">
        {/* Section Header */}
        <div
          className={`text-center space-y-4 ${
            inView ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary-900">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              Connect
            </span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Ready to solve real world problems through software development, cloud engineering, and DevOps?  
            <br />
             Let’s schedule a meeting at your convenience and turn your ideas into scalable, impactful solutions.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-800 rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div
            className={`space-y-8 ${
              inView ? "animate-slide-up delay-300" : "opacity-0"
            }`}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-secondary-900">
                Get in Touch
              </h3>
              <p className="text-secondary-600 leading-relaxed">
               <p className="text-lg text-gray-700">
            I’m always open to new opportunities — from software development and cloud engineering roles to DevOps projects that solve real-world problems. 
            Whether it’s building scalable systems, automating workflows, or discussing technology and innovation, I’d love to connect.
              </p>
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <item.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">
                      {item.label}
                    </h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-secondary-600 hover:text-primary-600 transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-secondary-600">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-secondary-900">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white hover:bg-primary-50 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 group border border-secondary-200 hover:border-primary-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-secondary-600 group-hover:text-primary-600 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-success-50 border border-success-200 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-success-500 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="font-semibold text-success-800">
                    Available for Work
                  </h4>
                  <p className="text-success-700 text-sm">
                    Open to full-time opportunities and exciting projects
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`${inView ? "animate-slide-up delay-600" : "opacity-0"}`}
          >
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h3 className="text-2xl font-heading font-semibold text-secondary-900 mb-6">
                Send a Message
              </h3>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
