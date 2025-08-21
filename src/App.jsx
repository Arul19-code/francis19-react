import { useState } from "react";
import profilePic from "./assets/profile.jpg";
import "./App.css";
import Chatbot from "./Chatbot";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSkill, setExpandedSkill] = useState(null);

  const skills = [
    {
      title: "Drupal 10 Development & Migration",
      description:
        "Expert in developing, upgrading, and migrating sites to Drupal 10 with custom modules, themes, and optimized performance.",
    },
    {
      title: "RESTful API Development & Integration",
      description:
        "Building and integrating RESTful APIs for seamless communication between systems and platforms.",
    },
    {
      title: "Shopify Integrations & Theme Customization",
      description:
        "Integrating Shopify into custom workflows and designing themes aligned with brand identity.",
    },
    {
      title: "Responsive Design (HTML5, CSS3, LESS)",
      description:
        "Crafting responsive, mobile-first layouts using modern web standards and styling tools.",
    },
    {
      title: "Authentication & Authorization",
      description:
        "Implementing OAuth 2.0, Social Logins, and token-based authentication for secure access.",
    },
    {
      title: "SEO Optimization & 301 Redirects",
      description:
        "Boosting search rankings with SEO best practices, metadata optimization, and proper redirects.",
    },
  ];

  const toggleSkill = (index) => {
    setExpandedSkill(expandedSkill === index ? null : index);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen font-sans">
      {/* Navigation Menu */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1
            onClick={() => scrollToSection("home")}
            className="text-lg font-bold text-indigo-400 cursor-pointer"
          >
            Arul Francis c.
          </h1>
          <div className="space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-indigo-400 transition"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-indigo-400 transition"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-indigo-400 transition"
            >
              Projects
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        id="home"
        className="relative bg-gradient-to-r from-indigo-800 via-purple-800 to-indigo-900 py-24 shadow-lg pt-24"
      >
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <img
            src={profilePic}
            alt="Arul Francis"
            className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform"
          />
          <div className="text-center md:text-left">
            <p className="text-xl mt-3 text-indigo-200 font-medium">
              Senior Drupal Developer | API Integration Specialist
            </p>
            <p className="mt-4 text-gray-300 max-w-xl">
              Delivering scalable, secure, and high-performance solutions with
              over 8 years of expertise in CMS, API integrations.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Summary */}
        <section>
          <h2 className="text-3xl font-semibold text-indigo-400 mb-4 border-b border-gray-700 pb-2">
            Summary
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Over 8+ years of industry experience in the CMS market with hands-on
            expertise in AWS Architecture, Drupal Architecture (Drupal 10),
            theme/module development, API integrations, deployment, and
            responsive web design. Skilled in HTML5, CSS3, LESS, Composer, and
            modern digital platform integrations.
          </p>
        </section>

        {/* Interactive Skills */}
        <section id="skills">
          <h2 className="text-3xl font-semibold text-indigo-400 mb-6 border-b border-gray-700 pb-2">
            Key Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-indigo-500/50 transition-all cursor-pointer"
                onClick={() => toggleSkill(idx)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-indigo-300">
                    {skill.title}
                  </span>
                  <span className="text-indigo-400">
                    {expandedSkill === idx ? "−" : "+"}
                  </span>
                </div>
                {expandedSkill === idx && (
                  <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Featured Project */}
        <section
          id="projects"
          className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 p-8 rounded-xl shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-indigo-500 text-white text-sm font-semibold rounded-full">
              Featured Project
            </span>
            <h2 className="text-3xl font-bold text-indigo-300">
              Mead Johnson Nutrition
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Led a 4-member team for implementing the Consumer Data Platform
                (CDP) EPSILON across 40 global applications. Delivered a scalable,
                secure solution for global user data management and personalization.
              </p>
              <div className="bg-gray-800 p-5 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-indigo-300 mb-3">
                  Tech Stack
                </h3>
                <p className="text-gray-400">
                  Drupal 10, REST APIs, Shopify, OAuth 2.0
                </p>
              </div>
              <button
                onClick={() => setIsOpen(true)}
                className="mt-4 inline-block text-indigo-400 hover:text-indigo-300 underline font-medium"
              >
                More Details →
              </button>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
              <h3 className="text-lg font-semibold text-indigo-300 mb-4">
                Key Contributions
              </h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Designed & integrated real-time user data storage with Epsilon",
                  "Built REST APIs for Drupal & Flutter apps",
                  "Migrated 500,000+ users from legacy systems",
                  "Implemented token revocation & secure authentication",
                  "Created reusable Drupal scripts for scalability",
                  "Integrated Shopify for enrollment",
                ].map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 hover:text-indigo-300 transition"
                  >
                    <span className="text-indigo-400 mt-1">✔</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-6 mt-12 text-sm text-gray-500">
        © 2025 Arul Francis — All rights reserved
      </footer>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-lg shadow-xl p-6 max-w-2xl w-full relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✖
            </button>
            <h3 className="text-2xl font-bold text-indigo-300 mb-4">
              Project Details: Mead Johnson Nutrition
            </h3>
            <p className="text-gray-300 mb-4">
              This project integrated Epsilon CDP for centralized, secure user
              data management, enabling personalization across 40+ apps.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Built REST APIs for Drupal & Flutter apps</li>
              <li>Migrated 500,000+ users from legacy systems</li>
              <li>Implemented secure authentication & token revocation</li>
              <li>Shopify enrollment integration</li>
              <li>Reusable Drupal scripts for scalability</li>
            </ul>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Chatbot */}
      <Chatbot />
    </div>
  );
}

export default App;