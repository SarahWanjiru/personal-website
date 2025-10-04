import React from "react";
import AboutImg from "../assets/About.svg";
import { useInView } from "react-intersection-observer";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const highlights = [
    {
      icon: Code2,
      title: "Cloud & DevOps Expertise",
      description: "Hands-on experience with AWS, Kubernetes, Terraform, and CI/CD pipelines",
    },
    {
      icon: Rocket,
      title: "Software Engineering",
      description: "Building scalable web applications and solving real-world problems",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "AWS Certified Cloud Practitioner with ongoing training in software development",
    },
    {
      icon: Users,
      title: "Collaboration & Impact",
      description: "Supporting startups, healthcare, and tech teams through innovation and teamwork",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center" ref={ref}>
        {/* Content Section */}
        <div
          className={`space-y-8 ${inView ? "animate-slide-up" : "opacity-0"}`}
        >
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary-900">
              Proven Track Record of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                Delivering Results
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-800 rounded-full"></div>
          </div>

          <div className="space-y-6 text-secondary-700 leading-relaxed">
            <p className="text-lg">
              I'm Sarah, a{" "}
              <strong>
                Full Stack Software Developer, AWS-certified Cloud & DevOps Engineer
              </strong>{" "}
              with a passion for creating impactful digital solutions that
              solve real-world problems. With over 3 years of experience, I have
              successfully delivered projects across various industries,
              including healthcare, e-commerce, and technology startups.
            </p>

            {/* Key Achievements */}
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-xl border border-primary-100">
              <h3 className="font-semibold text-secondary-900 mb-4 text-lg">
                Key Achievements Highlight:
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span>
                    <strong>60% faster deployments</strong> by automating infrastructure with Terraform and CloudFormation
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span>
                    <strong>40% improved scalability</strong> by deploying Python microservices in Docker and Kubernetes on AWS EKS
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span>
                    <strong>55% faster issue resolution</strong> using CloudWatch, Prometheus, and automated monitoring dashboards
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span>
                    <strong>30% better database performance</strong> through optimized RDS and DynamoDB architectures
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span>
                    <strong>Cross-functional collaboration</strong> across 5+ cloud migration and modernization projects, ensuring security, compliance, and cost efficiency
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>
                    <strong>Hands-on software development</strong> delivering APIs, mobile apps, and web apps that solved real-world client problems
                  </span>
                </li>
              </ul>
            </div>

                          {/* What Sets Me Apart */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-secondary-900 text-lg">
                    What Sets Me Apart
                  </h3>
                  <div className="grid gap-4">
                    <div>
                      <h4 className="font-medium text-primary-600">
                        Turning Problems into Products
                      </h4>
                      <p className="text-sm">
                        I approach every challenge as an opportunity to create value—
                        transforming real-world issues in healthcare, education, and business
                        into working, impactful solutions.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-600">
                        End-to-End Engineering
                      </h4>
                      <p className="text-sm">
                        From crafting sleek React interfaces to building resilient APIs and
                        backend systems, I design applications that are both user-friendly and
                        production-ready.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-600">
                        Cloud & DevOps Mindset
                      </h4>
                      <p className="text-sm">
                        With AWS, Docker, Kubernetes, and Terraform in my toolkit, I focus on
                        automation, scalability, and reliability—helping teams move faster while
                        keeping systems secure and stable.
                      </p>
                    </div>
                  <h4 className="font-medium text-primary-600">
                    DevOps & Cloud Proficiency
                  </h4>
                  <p className="text-sm">
                    Skilled in AWS, Docker, Kubernetes, and CI/CD pipelines—I bridge
                    development and operations to enable faster, reliable deployments.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-primary-600">
                    Results-Driven Approach
                  </h4>
                  <p className="text-sm">
                    My solutions emphasize measurable impact—faster release cycles,
                    increased system uptime, and smoother user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-secondary-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div
          className={`flex justify-center lg:justify-end ${
            inView ? "animate-fade-in delay-300" : "opacity-0"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-400 rounded-3xl rotate-6 scale-105 opacity-20"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-strong">
              <img
                src={AboutImg}
                alt="Sarah - About illustration showing software development"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;