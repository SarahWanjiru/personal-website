import React from "react";
import { useInView } from "react-intersection-observer";
import {
  Building2,
  Calendar,
  TrendingUp,
  Target,
  Users,
  Award,
} from "lucide-react";

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const experiences = [
    {
      title: "Junior Software Developer",
      company: "Soma Siri Afrika",
      location: "Remote",
      period: "August 2025 - Present",
      type: "Current Position",
      challenge:
        "The company needed to enhance full-stack development capacity and streamline DevOps workflows.",
      solution:
        "Developed responsive web components and backend APIs while integrating cloud deployment automation.",
      results: [
        "Built and deployed 5 frontend components using TypeScript and Vite for 2 client projects.",
        "Developed 3 RESTful APIs with Laravel, achieving seamless database integration and authentication.",
        "Implemented MongoDB CRUD operations and optimized schema, reducing query complexity by 20%.",
        "Created a cross-platform mobile app prototype in Flutter with 85% code reusability.",
        "Deployed 2 web applications using AWS EC2 and S3, cutting hosting setup time by 30%.",
        "Collaborated in 8 GitHub code reviews and maintained 98% development uptime through version control best practices.",
      ],
      icon: Target,
      color: "from-primary-500 to-primary-600",
    },
    {
      title: "Cloud Engineer / Solutions Architect",
      company: "Shinrai Technologies",
      location: "Hybrid",
      period: "February 2025 - August 2025",
      type: "Contract",
      challenge:
        "Organizations needed secure, automated, and scalable AWS cloud infrastructure for critical workloads.",
      solution:
        "Designed and implemented high-availability cloud architectures using AWS core services and automation tools.",
      results: [
        "Delivered 99.99% uptime for production workloads using EC2, RDS, and EKS.",
        "Reduced deployment time by 60% using Terraform and CloudFormation automation.",
        "Improved CI/CD efficiency by 50% through GitHub Actions and Jenkins integration.",
        "Implemented IAM and VPC configurations, reducing unauthorized access risks by 90%.",
        "Optimized RDS and DynamoDB databases, improving query performance by 30%.",
        "Deployed Python microservices in Docker containers on EKS, cutting downtime by 40%.",
      ],
      icon: Building2,
      color: "from-primary-500 to-primary-600",
    },
    {
      title: "DevOps Engineer",
      company: "Freelance",
      location: "Remote",
      period: "October 2024 - January 2025",
      type: "Contract",
      challenge:
        "Clients required faster, consistent deployments and secure infrastructure automation.",
      solution:
        "Implemented containerized CI/CD pipelines and IaC workflows using AWS, Docker, and Terraform.",
      results: [
        "Decreased environment setup time by 60% through Terraform and CloudFormation automation.",
        "Containerized 10+ applications with Docker and deployed across Kubernetes clusters.",
        "Deployed EKS clusters with autoscaling and IAM-integrated RBAC for 99.95% availability.",
        "Integrated AWS Secrets Manager with CSI driver for secure secret management.",
        "Reduced integration errors by 40% through Jenkins and GitHub Actions pipelines.",
        "Improved monitoring with CloudWatch and Prometheus, cutting MTTR by 55%.",
      ],
      icon: Award,
      color: "from-primary-500 to-primary-600",
    },
    {
      title: "Junior Cloud Engineer Trainee",
      company: "Cloud My Tribe",
      location: "Nairobi",
      period: "May 2024 - August 2024",
      type: "Internship",
      challenge:
        "Hands-on cloud environment setup required improved automation and networking reliability.",
      solution:
        "Built AWS lab environments using Terraform and enhanced networking and troubleshooting workflows.",
      results: [
        "Automated EC2 and S3 provisioning with Terraform, reducing manual setup by 45%.",
        "Configured VPCs, subnets, and security groups for better network isolation and security.",
        "Resolved connectivity issues between EC2 instances, improving response time by 60%.",
        "Gained hands-on experience with IAM and least-privilege policies for improved access control.",
        "Improved consistency across lab projects by implementing reusable infrastructure templates.",
      ],
      icon: Users,
      color: "from-info-500 to-info-600",
    },
    {
      title: "AWS Cloud Practitioner Trainee",
      company: "AWS re/Start Program (eMobilis)",
      location: "Nairobi",
      period: "January 2024 - April 2024",
      type: "Internship",
      challenge:
        "Needed to build foundational understanding of AWS services for real-world deployments.",
      solution:
        "Completed hands-on labs deploying compute, storage, and networking resources using AWS best practices.",
      results: [
        "Configured 20+ S3 buckets with lifecycle policies, improving data management by 35%.",
        "Deployed RDS instances with backups and encryption, reducing manual maintenance by 50%.",
        "Launched multiple EC2 instances with load balancers, achieving 99.9% uptime in test environments.",
        "Built an elastic Apache web server in a custom VPC with zero-downtime scaling.",
        "Improved accessibility and security through precise Security Group and NACL configurations.",
      ],
      icon: Building2,
      color: "from-warning-500 to-warning-600",
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "Current Position":
        return "bg-primary-100 text-primary-800";
      case "Contract":
        return "bg-primary-100 text-primary-800";
      case "Volunteer":
        return "bg-accent-100 text-accent-800";
      case "Internship":
        return "bg-info-100 text-info-800";
      case "Part-time":
        return "bg-warning-100 text-warning-800";
      default:
        return "bg-secondary-100 text-secondary-800";
    }
  };

  return (
    <section id="experience" className="py-20 bg-secondary-50">
      <div ref={ref} className="space-y-16">
        {/* Section Header */}
        <div
          className={`text-center space-y-4 ${
            inView ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary-900">
            Real Results for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              Real Businesses
            </span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            A proven track record of delivering measurable improvements across
            cloud infrastructure, software development, and DevOps automation
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-800 rounded-full mx-auto"></div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className={`${inView ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} shadow-soft`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-heading font-semibold text-secondary-900">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-medium text-primary-600 mt-1">
                            {exp.company}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Calendar className="w-4 h-4 text-secondary-500" />
                            <span className="text-sm text-secondary-600">
                              {exp.period}
                            </span>
                          </div>
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-3 ${getTypeColor(
                              exp.type
                            )}`}
                          >
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-2 flex items-center gap-2">
                          <Target className="w-4 h-4 text-accent-600" />
                          Challenge
                        </h4>
                        <p className="text-sm text-secondary-600 leading-relaxed">
                          {exp.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary-600" />
                          Solution
                        </h4>
                        <p className="text-sm text-secondary-600 leading-relaxed">
                          {exp.solution}
                        </p>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary-600" />
                        Key Results
                      </h4>
                      <ul className="space-y-2">
                        {exp.results.map((result, resultIndex) => (
                          <li
                            key={resultIndex}
                            className="flex items-start gap-2 text-sm text-secondary-600"
                          >
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center ${
            inView ? "animate-fade-in delay-1000" : "opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help transform your business with proven
              strategies and cutting-edge technology solutions.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-medium hover:shadow-strong"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
