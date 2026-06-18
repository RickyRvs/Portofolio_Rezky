import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Code2,
  Star,
  ChevronRight,
  Layers,
  Layout,
  Globe,
  Package,
  Cpu,
  Code,
} from "lucide-react";
import Swal from "sweetalert2";
import { toSlug } from "../utils/slug";

const TECH_ICONS = {
  React: Globe,
  Tailwind: Layout,
  Express: Cpu,
  Python: Code,
  Javascript: Code,
  HTML: Code,
  CSS: Code,
  default: Package,
};

const TechBadge = ({ tech }) => {
  const Icon = TECH_ICONS[tech] || TECH_ICONS["default"];
  return (
    <div className="group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-indigo-50 rounded-xl border border-indigo-100 hover:border-indigo-300 hover:bg-indigo-100/70 transition-all duration-300 cursor-default">
      <div className="relative flex items-center gap-1.5 md:gap-2">
        <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-indigo-500 group-hover:text-indigo-600 transition-colors" />
        <span className="text-xs md:text-sm font-medium text-indigo-600 group-hover:text-indigo-700 transition-colors">
          {tech}
        </span>
      </div>
    </div>
  );
};

const FeatureItem = ({ feature }) => {
  return (
    <li className="group flex items-start space-x-3 p-2.5 md:p-3 rounded-xl hover:bg-slate-50 transition-all duration-300 border border-transparent hover:border-slate-200">
      <div className="relative mt-2 flex-shrink-0">
        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:scale-125 transition-transform duration-300" />
      </div>
      <span className="text-sm md:text-base text-slate-600 group-hover:text-slate-800 transition-colors leading-relaxed">
        {feature}
      </span>
    </li>
  );
};

const ProjectStats = ({ project }) => {
  const techStackCount = project?.TechStack?.length || 0;
  const featuresCount = project?.Features?.length || 0;

  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 bg-slate-50 rounded-xl border border-slate-200">
      <div className="flex items-center space-x-2 md:space-x-3 bg-white p-2 md:p-3 rounded-lg border border-indigo-100 transition-all duration-300 hover:scale-105 hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-50">
        <div className="bg-indigo-50 p-1.5 md:p-2 rounded-full">
          <Code2 className="text-indigo-500 w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
        </div>
        <div className="flex-grow">
          <div className="text-lg md:text-xl font-semibold text-indigo-600">{techStackCount}</div>
          <div className="text-[10px] md:text-xs text-slate-400">Total Teknologi</div>
        </div>
      </div>

      <div className="flex items-center space-x-2 md:space-x-3 bg-white p-2 md:p-3 rounded-lg border border-purple-100 transition-all duration-300 hover:scale-105 hover:border-purple-300 hover:shadow-md hover:shadow-purple-50">
        <div className="bg-purple-50 p-1.5 md:p-2 rounded-full">
          <Layers className="text-purple-500 w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
        </div>
        <div className="flex-grow">
          <div className="text-lg md:text-xl font-semibold text-purple-600">{featuresCount}</div>
          <div className="text-[10px] md:text-xs text-slate-400">Fitur Utama</div>
        </div>
      </div>
    </div>
  );
};

const handleGithubClick = (githubLink) => {
  if (githubLink === "Private") {
    Swal.fire({
      icon: "info",
      title: "Source Code Private",
      text: "Maaf, source code untuk proyek ini bersifat privat.",
      confirmButtonText: "Mengerti",
      confirmButtonColor: "#6366f1",
      background: "#ffffff",
      color: "#1e293b",
    });
    return false;
  }
  return true;
};

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const selectedProject = storedProjects.find(
      (p) => toSlug(p.title) === slug
    );

    if (selectedProject) {
      const enhancedProject = {
        ...selectedProject,
        Title: selectedProject.title,
        Description: selectedProject.description,
        Img: selectedProject.img,
        Link: selectedProject.link,
        Github: selectedProject.github || "https://github.com/RickyRvs",
        Features: selectedProject.features || [],
        TechStack: selectedProject.tech_stack || [],
      };
      setProject(enhancedProject);
    }
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 md:w-24 md:h-24 mx-auto border-4 border-indigo-200 border-t-indigo-500 rounded-full animate-spin" />
          <h2 className="text-xl md:text-3xl font-bold text-slate-700">
            Loading Project...
          </h2>
        </div>
      </div>
    );
  }

  const projectUrl = `https://your-domain.com/project/${toSlug(project.Title)}`;

  return (
    <>
      <Helmet>
        <title>{project.Title} — Portfolio</title>
        <meta
          name="description"
          content={
            project.Description
              ? project.Description.slice(0, 155)
              : `Project ${project.Title}`
          }
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={projectUrl} />
        <meta property="og:title" content={`${project.Title} — Portfolio`} />
        <meta property="og:description" content={project.Description?.slice(0, 155)} />
        <meta property="og:url" content={projectUrl} />
        <meta property="og:type" content="website" />
        {project.Img && <meta property="og:image" content={project.Img} />}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "${project.Title}",
            "description": "${project.Description?.replace(/"/g, '\\"')}",
            "url": "${projectUrl}"
          }
        `}</script>
      </Helmet>

      {/* Page wrapper — sits on top of AnimatedBackground */}
      <div className="min-h-screen px-[2%] sm:px-0 relative overflow-hidden">
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">

            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 md:space-x-4 mb-8 md:mb-12 animate-fadeIn">
              <button
                onClick={() => navigate(-1)}
                className="group inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 bg-white backdrop-blur-xl rounded-xl text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-md transition-all duration-300 border border-slate-200 hover:border-slate-300 text-sm md:text-base"
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
                <span>Back</span>
              </button>
              <div className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-slate-400">
                <span>Projects</span>
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-slate-700 font-medium truncate">{project.Title}</span>
              </div>
            </div>

            {/* Main grid */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16">

              {/* Left column */}
              <div className="space-y-6 md:space-y-8 animate-slideInLeft">

                {/* Title */}
                <div className="space-y-3 md:space-y-4">
                  <h1 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight">
                    {project.Title}
                  </h1>
                  <div className="relative h-1 w-16 md:w-20">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-slate-500 leading-relaxed">
                  {project.Description}
                </p>

                {/* Stats */}
                <ProjectStats project={project} />

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <a
                    href={project.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-7 py-2.5 md:py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-all duration-300 shadow-md shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-300 hover:-translate-y-0.5 text-sm md:text-base"
                  >
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                    <span className="font-medium">Live Demo</span>
                  </a>

                  <a
                    href={project.Github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-7 py-2.5 md:py-3.5 bg-white hover:bg-slate-50 text-slate-700 rounded-xl transition-all duration-300 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-sm md:text-base"
                    onClick={(e) =>
                      !handleGithubClick(project.Github) && e.preventDefault()
                    }
                  >
                    <Github className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                    <span className="font-medium">GitHub</span>
                  </a>
                </div>

                {/* Tech stack */}
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-base md:text-lg font-semibold text-slate-700 flex items-center gap-2 md:gap-3">
                    <Code2 className="w-4 h-4 md:w-5 md:h-5 text-indigo-500" />
                    Technologies Used
                  </h3>
                  {project.TechStack.length > 0 ? (
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {project.TechStack.map((tech, index) => (
                        <TechBadge key={index} tech={tech} />
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm md:text-base text-slate-400">
                      No technologies added.
                    </p>
                  )}
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-6 md:space-y-8 animate-slideInRight">

                {/* Project image */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-100 group">
                  {/* skeleton */}
                  {!isImageLoaded && (
                    <div className="w-full aspect-video bg-slate-100 animate-pulse" />
                  )}
                  <img
                    src={project.Img}
                    alt={project.Title}
                    className={`w-full object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-105 ${
                      isImageLoaded ? "opacity-100" : "opacity-0 absolute inset-0"
                    }`}
                    onLoad={() => setIsImageLoaded(true)}
                  />
                  {/* overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </div>

                {/* Key features */}
                <div className="bg-white rounded-2xl p-5 md:p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 group">
                  <h3 className="text-base md:text-lg font-semibold text-slate-700 flex items-center gap-2 md:gap-3 mb-4">
                    <Star className="w-4 h-4 md:w-5 md:h-5 text-amber-400 group-hover:rotate-[20deg] transition-transform duration-300" />
                    Key Features
                  </h3>
                  {project.Features.length > 0 ? (
                    <ul className="list-none space-y-1">
                      {project.Features.map((feature, index) => (
                        <FeatureItem key={index} feature={feature} />
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-400 text-sm">No features added.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-out;
          }
          .animate-slideInLeft {
            animation: slideInLeft 0.6s ease-out;
          }
          .animate-slideInRight {
            animation: slideInRight 0.6s ease-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-28px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(28px); }
            to   { opacity: 1; transform: translateX(0); }
          }
        `}</style>
      </div>
    </>
  );
};

export default ProjectDetails;