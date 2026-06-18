import React, { useState } from "react";

const InputField = ({ field, label, icon: Icon, formData, handleChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const getInputClasses = (isTextArea = false) => {
    const baseClasses = `
      w-full p-4 rounded-xl bg-white text-slate-800 placeholder-transparent
      border focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2
      focus:ring-offset-white transition-all duration-300 peer
    `;
    const hoverFocusClasses = isFocused
      ? "shadow-[0_4px_12px_rgba(99,102,241,0.15)] border-indigo-400"
      : "border-slate-200 hover:border-indigo-300";

    return `${baseClasses} ${hoverFocusClasses} ${isTextArea ? "h-52 pt-12" : "pl-12"}`;
  };

  const renderInputContent = () => {
    if (field === "message") {
      return (
        <textarea
          id={field}
          name={field}
          placeholder={label}
          value={formData[field]}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={getInputClasses(true)}
          required
        />
      );
    }
    return (
      <input
        id={field}
        type={field === "email" ? "email" : "text"}
        name={field}
        placeholder={label}
        value={formData[field]}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={getInputClasses()}
        required
      />
    );
  };

  return (
    <div className="relative w-full group">
      {/* Icon & Label */}
      <div className="absolute left-4 top-4 flex items-center space-x-2 text-slate-400 transition-colors group-hover:text-indigo-500">
        <Icon className="w-5 h-5" />
        <label
          htmlFor={field}
          className={`
            absolute left-12 top-1/2 transform -translate-y-1/2 text-slate-400 text-sm transition-all duration-300 
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-0
            peer-placeholder-shown:text-slate-400 peer-placeholder-shown:text-base
            peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-indigo-500 peer-focus:text-sm
          `}
        >
          {label}
        </label>
      </div>

      {renderInputContent()}

      {/* Focus Border Effect */}
      <div
        className={`
          absolute inset-0 border rounded-xl pointer-events-none transition-all duration-300
          ${isFocused ? "border-indigo-400" : "border-transparent"}
        `}
      />
    </div>
  );
};

export default InputField;