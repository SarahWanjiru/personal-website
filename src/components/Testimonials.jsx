import React from "react";
import { useInView } from "react-intersection-observer";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const testimonials = [
    {
      quote:
        "Sarah played a crucial role in improving our CI/CD pipeline. Her understanding of Docker and AWS simplified our deployment process and reduced build times significantly. Reliable, detail-oriented, and an excellent problem solver.",
      role: "DevOps Lead",
      company: "Iron Rim",
      rating: 5,
    },
    {
      quote:
        "We were impressed by Sarah’s ability to automate our infrastructure using Terraform. She approached every challenge methodically and communicated clearly throughout the project. Her AWS knowledge was instrumental in optimizing our costs.",
      role: "Cloud Infrastructure Manager",
      company: "Cloud My Tribe",
      rating: 5,
    },
    {
      quote:
        "Sarah developed a backend service using Express and Laravel that improved the performance and reliability of our internal system. She consistently delivered clean, maintainable code and collaborated well with the entire team.",
      role: "Software Development Manager",
      company: "Soma Siri Afrika",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary-50">
      <div ref={ref} className="space-y-16">
        {/* Section Header */}
        <div
          className={`text-center space-y-4 ${
            inView ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary-900">
            What Clients Say About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              Working With Me
            </span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Real feedback from professionals and teams who’ve experienced results through our collaboration
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-800 rounded-full mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 p-8 h-full group hover:-translate-y-1">
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-primary-600 opacity-20" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-warning-400 text-warning-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-secondary-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t border-secondary-100 pt-6">
                  <div className="text-center">
                    <p className="font-semibold text-secondary-900">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-primary-600 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center ${
            inView ? "animate-fade-in delay-1000" : "opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Let’s collaborate to create efficient, secure, and scalable solutions for your business needs.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-medium hover:shadow-strong"
            >
              Start Your Success Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
