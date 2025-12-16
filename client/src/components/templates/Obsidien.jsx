// ObsidianCardsTemplate.jsx
import React from "react";
import PropTypes from "prop-types";

const formatDate = (date) => {
  if (!date) return "";
  const [y, m] = date.split("-");
  return new Date(y, m - 1).toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

const ObsidianCardsTemplate = ({ data, accentColor }) => {
  return (
    <div className="max-w-6xl mx-auto bg-[#0c0c0c] text-gray-200 p-10 space-y-10">
      {/* HEADER */}
      <header className="border-b border-gray-800 pb-5">
        <h1 className="text-4xl font-semibold tracking-wide" style={{ color: accentColor }}>
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <p className="text-gray-400">{data.personal_info?.profession}</p>
      </header>

      {/* CARDS GRID */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* CONTACT CARD */}
        <div className="bg-[#111] p-6 rounded-xl border border-gray-800 shadow-xl">
          <h2 className="text-xl font-semibold mb-4" style={{ color: accentColor }}>Contact</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            {data.personal_info?.email && <li>Email: {data.personal_info.email}</li>}
            {data.personal_info?.phone && <li>Phone: {data.personal_info.phone}</li>}
            {data.personal_info?.location && <li>Location: {data.personal_info.location}</li>}
            {data.personal_info?.website && <li>Website: {data.personal_info.website}</li>}
            {data.personal_info?.linkedin && <li>LinkedIn: {data.personal_info.linkedin}</li>}
          </ul>
        </div>

        {/* SUMMARY CARD */}
        {data.professional_summary && (
          <div className="bg-[#111] p-6 rounded-xl border border-gray-800 shadow-xl">
            <h2 className="text-xl font-semibold mb-4" style={{ color: accentColor }}>Summary</h2>
            <p className="text-gray-300 leading-relaxed">{data.professional_summary}</p>
          </div>
        )}
      </div>

      {/* EXPERIENCE CARD */}
      {data.experience?.length > 0 && (
        <section className="bg-[#111] p-6 rounded-xl border border-gray-800 shadow-xl">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: accentColor }}>Experience</h2>
          <div className="space-y-6">
            {data.experience.map((job, i) => (
              <div key={i} className="border-b border-gray-700 pb-4">
                <div className="flex justify-between">
                  <h3 className="text-lg font-medium">{job.position}</h3>
                  <span className="text-xs text-gray-400">{formatDate(job.start_date)} — {job.is_current ? "Present" : formatDate(job.end_date)}</span>
                </div>
                <p className="text-sm text-gray-400">{job.company}</p>
                <p className="mt-2 text-gray-300 whitespace-pre-line">{job.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PROJECTS CARD */}
      {data.project?.length > 0 && (
        <section className="bg-[#111] p-6 rounded-xl border border-gray-800 shadow-xl">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: accentColor }}>Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.project.map((p, i) => (
              <div key={i} className="p-4 bg-[#161616] rounded-lg border border-gray-800">
                <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
                <p className="text-gray-300 whitespace-pre-line">{p.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* EDUCATION & SKILLS */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* EDUCATION */}
        {data.education?.length > 0 && (
          <div className="bg-[#111] p-6 rounded-xl border border-gray-800 shadow-xl">
            <h2 className="text-xl font-semibold mb-4" style={{ color: accentColor }}>Education</h2>
            <div className="space-y-4">
              {data.education.map((edu, i) => (
                <div key={i} className="bg-[#161616] p-4 rounded border border-gray-800">
                  <h3 className="font-semibold">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                  <p className="text-gray-400">{edu.institution}</p>
                  <p className="text-xs text-gray-500">{formatDate(edu.graduation_date)}</p>
                  {edu.gpa && <p className="text-xs text-gray-500">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SKILLS */}
        {data.skills?.length > 0 && (
          <div className="bg-[#111] p-6 rounded-xl border border-gray-800 shadow-xl">
            <h2 className="text-xl font-semibold mb-4" style={{ color: accentColor }}>Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 text-sm bg-[#1a1a1a] rounded border border-gray-800">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

ObsidianCardsTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  accentColor: PropTypes.string.isRequired,
};

export default ObsidianCardsTemplate;
