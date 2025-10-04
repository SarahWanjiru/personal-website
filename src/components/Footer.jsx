/**
 * Footer Component - Website footer with social links, navigation, and contact information
 * Displays Sarah's portfolio footer with professional links and availability status
 */

import React from "react";
import {
  Linkedin,
  Twitter,
  Github,
  Mail,
  ArrowUp,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sarahndungu",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://x.com/shirawbedan?t=Ka7P-tKnKRG1kysM7Br78w&s=08",
      label: "Twitter",
    },
    {
      icon: Github,
      href: "https://github.com/SarahWanjiru",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: "mailto:sarahndungu815@gmail.com",
      label: "Email",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/254720171697",
      label: "WhatsApp",
    },
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const services = [
    { label: "Custom Web Development" },
    { label: "DevOps" },
    { label: "Cloud Engineer Consulting" },
    { label: "Software Development" },
  ];

  const industries = [
    { label: "Healthcare & Medical" },
    { label: "E-commerce & Retail" },
    { label: "Technology Startups" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary-900 text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-strong hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-3xl font-heading font-bold">
              Sarah.
            </h2>
            <p className="text-secondary-300 leading-relaxed max-w-md">
              Full Stack Software Developer passionate about creating
              exceptional digital experiences and solving complex business
              problems through innovative technology solutions.
            </p>
            <div>
              <p className="text-sm text-secondary-400 mb-2">
                Contact Information:
              </p>
              <div className="space-y-1 text-sm">
                <p className="text-secondary-300">
                  📧{" "}
                  <a
                    href="mailto:sarahndungu815@gmail.com"
                    className="hover:text-primary-400 transition-colors duration-300"
                  >
                    sarahndungu815@gmail.com
                  </a>
                </p>
                <p className="text-secondary-300">📱 +254720171697</p>
                <p className="text-secondary-300">
                  📍 Nairobi, Kenya (Remote Available)
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-secondary-800 hover:bg-primary-600 rounded-lg transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-secondary-300 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-secondary-300 text-sm">
                    {service.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Industries</h3>
            <ul className="space-y-2">
              {industries.map((industry, index) => (
                <li key={index}>
                  <span className="text-secondary-300 text-sm">
                    {industry.label}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <div className="inline-flex items-center gap-2 bg-success-900/30 text-success-300 px-3 py-1 rounded-full text-xs">
                <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse"></div>
                Available for new projects
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-secondary-400 text-sm text-center sm:text-left">
            © {currentYear} Sarah. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-secondary-400 hover:text-primary-400 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-secondary-400 hover:text-primary-400 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
