// BrightWaveTemplate.jsx
import React from "react";
import PropTypes from "prop-types";
import { Mail, Phone, MapPin, Globe, Linkedin } from "lucide-react";

// Helper date formatter
const formatDate = (str) => {
  if (!str) return "";
  const [y, m] = str.split("-");
  return new Date(y, m - 1).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const DarkWaveTemplate = ({ data, accentColor }) => {
  return (
    <div className="w-full max-w-5xl mx-auto 
      bg-gradient-to-br from-white via-purple-50/40 to-blue-50/40
      text-gray-800 p-10 shadow-lg rounded-xl border border-gray-200">

      {/* HEADER */}
      <header className="pb-10 border-b border-gray-300/60">
        <h1 
          className="text-4xl font-bold mb-2" 
          style={{ color: accentColor }}
        >
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <p className="text-gray-600 mb-4">
          {data.personal_info?.profession || "Profession"}
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-gray-700">
          {data.personal_info?.email && (
            <span className="flex items-center gap-1"><Mail size={14} /> {data.personal_info.email}</span>
          )}
          {data.personal_info?.phone && (
            <span className="flex items-center gap-1"><Phone size={14} /> {data.personal_info.phone}</span>
          )}
          {data.personal_info?.location && (
            <span className="flex items-center gap-1"><MapPin size={14} /> {data.personal_info.location}</span>
          )}
          {data.personal_info?.website && (
            <span className="flex items-center gap-1"><Globe size={14} /> {data.personal_info.website}</span>
          )}
          {data.personal_info?.linkedin && (
            <span className="flex items-center gap-1"><Linkedin size={14} /> {data.personal_info.linkedin}</span>
          )}
        </div>
      </header>

      {/* SUMMARY */}
      {data.professional_summary && (
        <section className="mt-10 mb-10">
          <h2 
            className="text-xl font-semibold mb-3"
            style={{ color: accentColor }}
          >
            SUMMARY
          </h2>

          <p className="text-gray-700 leading-relaxed bg-white/70 p-4 rounded-lg shadow-sm border border-gray-200">
            {data.professional_summary}
          </p>
        </section>
      )}

      {/* EXPERIENCE */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-6" style={{ color: accentColor }}>EXPERIENCE</h2>
          <div className="space-y-6">
            {data.experience.map((exp, i) => (
              <div 
                key={i} 
                className="border-l-4 pl-4 bg-white/70 p-4 rounded-lg shadow-sm border border-gray-200"
                style={{ borderColor: accentColor }}
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{exp.position}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <span className="text-xs text-gray-500">
                    {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </span>
                </div>

                <p className="mt-2 text-gray-700 whitespace-pre-line">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PROJECTS */}
      {data.project && data.project.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-6" style={{ color: accentColor }}>PROJECTS</h2>

          <div className="space-y-6">
            {data.project.map((p, idx) => (
              <div 
                key={idx} 
                className="border-l-4 pl-4 bg-white/70 p-4 rounded-lg shadow-sm border border-gray-200"
                style={{ borderColor: accentColor }}
              >
                <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
                <p className="text-gray-700 mt-1 whitespace-pre-line">{p.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* EDUCATION */}
      {data.education && data.education.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-6" style={{ color: accentColor }}>EDUCATION</h2>

          <div className="space-y-6">
            {data.education.map((edu, i) => (
              <div key={i} className="flex justify-between bg-white/70 p-4 rounded-lg shadow-sm border border-gray-200">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {edu.degree}{edu.field && ` in ${edu.field}`}
                  </h3>
                  <p className="text-gray-600">{edu.institution}</p>
                  {edu.gpa && <p className="text-xs text-gray-500">GPA: {edu.gpa}</p>}
                </div>
                <span className="text-xs text-gray-500">
                  {formatDate(edu.graduation_date)}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SKILLS */}
      {data.skills && data.skills.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-6" style={{ color: accentColor }}>SKILLS</h2>

          <div className="flex flex-wrap gap-3">
            {data.skills.map((sk, i) => (
              <span 
                key={i} 
                className="px-3 py-1 bg-white rounded-lg shadow-sm border text-sm text-gray-800"
                style={{ borderColor: accentColor }}
              >
                {sk}
              </span>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

DarkWaveTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  accentColor: PropTypes.string.isRequired,
};

export default DarkWaveTemplate;
