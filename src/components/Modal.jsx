import React, { useState } from 'react';
import { X, ArrowRight, ExternalLink } from 'lucide-react';

const ProjectCardModal = ({ title, description, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-100 transition-colors duration-200"
        onClick={() => setIsOpen(true)}
      >
        <span className="text-sm font-medium">Details</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-white p-6 text-slate-800 shadow-2xl shadow-slate-200 border border-slate-100 animate-slide-up sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 rounded-lg p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="mb-4 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="mb-6 text-slate-500 leading-relaxed">{description}</p>

            <div className="flex justify-end space-x-3">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors duration-200"
              >
                Live Demo <ExternalLink className="ml-2 h-4 w-4" />
              </a>
              <button
                className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCardModal;