import React from "react";

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "Travel AI – Intelligent Package Search Assistant",
      type: "Personal Project",
      technologies: ["Python", "Django", "GPT4All", "REST API", "PostgreSQL"],
      description:
        "An AI-powered travel assistant that converts natural language queries into structured database searches.",
      highlights: [
        'Built an AI-powered travel assistant that converts natural language queries (e.g., "cheapest Umrah package in October under 2000") into structured database searches',
        "Designed a Django backend with REST APIs to manage travel packages and pricing",
        "Integrated GPT4All for natural language to SQL/JSON conversion",
        "Implemented filtering by destination, budget, and date using Django ORM",
      ],
    },
    {
      title: "Supplier Portal – E-commerce Platform",
      type: "Frontend Developer",
      technologies: ["React.js", "TypeScript", "React Query", "Tailwind CSS"],
      description:
        "A comprehensive supplier-facing web application for managing inventory, orders, and product listings.",
      highlights: [
        "Built responsive dashboards for managing products, stock levels, and pricing",
        "Implemented order tracking interface with status updates and filters",
        "Developed secure login & authentication with role-based access control",
        "Used React Query for data fetching and caching to ensure optimal performance",
        "Designed clean UI/UX with Tailwind CSS, focusing on clarity and speed",
        "Integrated image uploads and dynamic form handling with validation",
      ],
    },
    {
      title: "Project-Management System",
      type: "Full Stack Developer",
      technologies: [
        "TypeScript",
        "React.js",
        "React Query",
        "Tailwind CSS",
        "Express.js",
        "MongoDB",
        "Socket.io",
      ],
      description:
        "A real-time collaboration and project management platform with built-in intelligent chat features.",
      highlights: [
        "Built a secure, role-based project management system with admin, lead, and member access",
        "Built a real-time chat engine using Socket.io that handled 300+ messages/day, reducing team response time by 40%",
        "Integrated read receipts and online presence indicators to improve team visibility",
        "Implemented notification system for task assignments, boosting on-time task completion by 25%",
        "Admin dashboard enabled full visibility over project performance, cutting project oversight time by 50%",
      ],
    },
  ];

  return (
    <div className="relative z-10 w-full py-" id="projects">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-3">
          Projects
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-14">
          Core Stack & Skills — Technologies and tools I rely on to ship
          reliable, modern web applications.
        </p>

        <div className="flex flex-col space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-2xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.01] transition-transform duration-300 ease-out overflow-hidden"
            >
              {/* Soft overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200/20 to-gray-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-sm mt-2 md:mt-0 px-3 py-1 rounded-full bg-gray-200 text-gray-700 font-medium">
                    {project.type}
                  </span>
                </div>

                <p className="text-gray-600 mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-white text-sm rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="list-disc list-inside text-gray-600 space-y-2 pl-1">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li
                      key={highlightIndex}
                      className="leading-snug hover:text-gray-800 transition-colors duration-200"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
