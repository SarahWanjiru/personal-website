import React from "react";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Cloud,
  Cog,
  Server,
  Database,
  Settings,
  Workflow,
  Layers,
  Network,
  Terminal,
  Shield,
  Rocket,
} from "lucide-react";

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const services = [
    {
      title: "Junior Software Developer",
      description:
        "Hands-on experience in full-stack development using React, Node.js, Python, and Flutter to build responsive and interactive applications.",
      icon: Code2,
      color: "from-primary-500 to-primary-600",
      features: [
        { icon: Layers, text: "Frontend development with React.js" },
        { icon: Terminal, text: "Backend APIs using Node.js and Python" },
        { icon: Cog, text: "Cross-platform mobile apps with Flutter" },
        { icon: Settings, text: "Version control with Git and GitHub" },
      ],
    },
    {
      title: "Cloud Engineer / Solutions Architect",
      description:
        "Experienced in designing and implementing scalable, secure, and efficient cloud infrastructure on AWS using core services.",
      icon: Cloud,
      color: "from-primary-500 to-primary-600",
      features: [
        { icon: Server, text: "Provisioning EC2, S3, RDS, and VPC resources" },
        { icon: Database, text: "Data management and storage solutions" },
        { icon: Shield, text: "IAM configuration and cloud security setup" },
        { icon: Rocket, text: "Infrastructure as Code using Terraform and CloudFormation" },
      ],
    },
    {
      title: "DevOps Engineer",
      description:
        "Skilled in automating deployment pipelines, managing containerized environments, and maintaining CI/CD workflows for efficient delivery.",
      icon: Cog,
      color: "from-primary-500 to-primary-600",
      features: [
        { icon: Workflow, text: "Continuous integration using Jenkins and GitHub Actions" },
        { icon: Server, text: "Containerization with Docker and Kubernetes" },
        { icon: Cloud, text: "EKS cluster management and monitoring" },
        { icon: Settings, text: "Automated deployments with CI/CD pipelines" },
      ],
    },
    {
      title: "Junior Cloud Engineer Trainee",
      description:
        "Gained foundational experience in networking and infrastructure automation with AWS and Terraform during training at Cloud My Tribe.",
      icon: Network,
      color: "from-warning-500 to-warning-600",
      features: [
        { icon: Cloud, text: "AWS networking and infrastructure setup" },
        { icon: Workflow, text: "Terraform-based automation for cloud resources" },
        { icon: Server, text: "Hands-on practice with EC2, S3, and VPCs" },
        { icon: Settings, text: "Infrastructure monitoring and maintenance" },
      ],
    },
    {
      title: "AWS Cloud Practitioner Trainee",
      description:
        "Completed AWS Certified Cloud Practitioner certification with practical knowledge in core cloud services, scalability, and security.",
      icon: Shield,
      color: "from-indigo-500 to-indigo-600",
      features: [
        { icon: Cloud, text: "Proficient in EC2, S3, RDS, and IAM management" },
        { icon: Database, text: "Understanding of cloud storage and databases" },
        { icon: Shield, text: "Security and compliance best practices" },
        { icon: Workflow, text: "Building scalable and cost-efficient AWS architectures" },
      ],
    },
  ];

  return (
    <section id="services" className="py-20">
      <div ref={ref} className="space-y-16">
        {/* Section Header */}
        <div
          className={`text-center space-y-4 ${
            inView ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary-900">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              Experience & Expertise
            </span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            A showcase of my hands-on experience and technical skills across software development,
            DevOps, and cloud engineering disciplines.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-800 rounded-full mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`${inView ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 p-8 h-full group hover:-translate-y-1">
                  {/* Service Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-br ${service.color} shadow-soft group-hover:shadow-medium transition-all duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold text-secondary-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-secondary-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Service Features */}
                  <div className="space-y-4">
                    {service.features.map((feature, featureIndex) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <div className="p-2 bg-secondary-100 rounded-lg">
                            <FeatureIcon className="w-4 h-4 text-secondary-600" />
                          </div>
                          <span className="text-secondary-700 font-medium">
                            {feature.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 pt-6 border-t border-secondary-100">
                    <a
                      href="#contact"
                      className={`inline-flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r ${service.color} font-semibold hover:underline transition-all duration-300`}
                    >
                      Learn More
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`text-center ${
            inView ? "animate-fade-in delay-1000" : "opacity-0"
          }`}
        >
          <div className="bg-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-4">
              Want to Learn More About My Work?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Let’s connect to discuss how my skills and experience can contribute to your team or project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-medium hover:shadow-strong"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-secondary-50 text-secondary-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 border-secondary-200 hover:border-primary-300"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
