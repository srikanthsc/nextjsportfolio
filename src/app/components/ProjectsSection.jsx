"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio website",
    description: "React.js",
    image: "/images/react.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/srikanthsc/srikanthsc.reactportfolio",
    previewUrl: "https://srikanthsc.github.io/srikanthsc.reactportfolio/",
  },
  {
    id: 2,
    title: "Angular Portfolio website",
    description: "Angular",
    image: "/images/angular.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/srikanthsc/srikanthsc.angularportfolio",
    previewUrl: "https://srikanthsc.github.io/srikanthsc.angularportfolio/",
  },
  {
    id: 3,
    title: "Vue and Vuefity Portfolio website",
    description: "Vue.js and Vuetify.js",
    image: "/images/vue.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/srikanthsc/srikanthsc.vuejsportfolio",
    previewUrl: "https://srikanthsc.github.io/srikanthsc.vuejsportfolio2/",
  },
  {
    id: 4,
    title: "HTML, CSS, Javascript and Bootstrap Portfolio Website",
    description: "HTML, CSS, Javascript and Bootstrap",
    image: "/images/web.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/srikanthsc/srikanthsc.github.io",
    previewUrl: "https://srikanthsc.github.io/portfolio.html",
  },
  {
    id: 5,
    title: "Nextjs Portfolio Website",
    description: "Next.js - in progress",
    image: "/images/next-js-logo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/srikanthsc/nextjsportfolio",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Flutter Portfolio (mobile)",
    description: "Flutter - in progress",
    image: "/images/flutter.png",
    tag: ["All", "mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
