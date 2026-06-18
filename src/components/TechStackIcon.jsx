import React from 'react';

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className="group p-6 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-indigo-200 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-sm hover:shadow-md hover:shadow-indigo-100">
      <div className="relative">
        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-400 to-violet-400 rounded-full opacity-0 group-hover:opacity-20 blur transition duration-300" />
        <img
          src={TechStackIcon}
          alt={`${Language} icon`}
          className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300 drop-shadow-sm"
        />
      </div>
      <span className="text-slate-600 font-semibold text-sm md:text-base tracking-wide group-hover:text-indigo-600 transition-colors duration-300">
        {Language}
      </span>
    </div>
  );
};

export default TechStackIcon;