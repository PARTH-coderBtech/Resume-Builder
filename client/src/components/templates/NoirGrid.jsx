// NoirGridTemplate.jsx
import React from "react";
import PropTypes from "prop-types";

const formatDate = (date) => {
  if (!date) return "";
  const [y, m] = date.split("-");
  return new Date(y, m - 1).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const NoirGridTemplate = ({ data, accentColor }) => {
  return (
    <div
      className="mx-auto max-w-5xl 
      bg-gradient-to-br from-white via-purple-50/40 to-blue-50/40 
      text-gray-800 p-10 grid gap-10 rounded-xl shadow-lg border border-gray-200"
    >
      {/* HEADER */}
      <header className="border-b border-gray-300/70 pb-8">
        <h1
          className="text-3xl font-semibold tracking-wide"
          style={{ color: accentColor }}
        >
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <p className="text-gray-600">
          {data.personal_info?.profession || "Profession"}
        </p>
      </header>

      {/* GRID: CONTACT — SUMMARY */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* CONTACT */}
        <section className="md:col-span-1 bg-white/70 p-5 rounded-xl shadow-sm border border-gray-200">
          <h2
            className="text-lg font-semibold mb-3"
            style={{ color: accentColor }}
          >
            CONTACT
          </h2>

          <div className="space-y-2 text-sm text-gray-700">
            {data.personal_info?.email && <p>{data.personal_info.email}</p>}
            {data.personal_info?.phone && <p>{data.personal_info.phone}</p>}
            {data.personal_info?.location && <p>{data.personal_info.location}</p>}
            {data.personal_info?.website && <p>{data.personal_info.website}</p>}
            {data.personal_info?.linkedin && <p>{data.personal_info.linkedin}</p>}
          </div>
        </section>

        {/* SUMMARY */}
        {data.professional_summary && (
          <section className="md:col-span-2 bg-white/70 p-5 rounded-xl shadow-sm border border-gray-200">
            <h2
              className="text-lg font-semibold mb-3"
              style={{ color: accentColor }}
            >
              SUMMARY
            </h2>

            <p className="text-gray-700 leading-relaxed">
              {data.professional_summary}
            </p>
          </section>
        )}
      </div>

      {/* EXPERIENCE GRID */}
      {data.experience?.length > 0 && (
        <section>
          <h2
            className="text-lg font-semibold mb-6"
            style={{ color: accentColor }}
          >
            EXPERIENCE
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {data.experience.map((exp, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-xl shadow-sm border border-gray-200"
              >
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-medium text-gray-800">
                    {exp.position}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {formatDate(exp.start_date)} -{" "}
                    {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </span>
                </div>

                <p className="text-gray-600 mb-2">{exp.company}</p>
                <p className="text-gray-700 whitespace-pre-line">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PROJECTS */}
      {data.project?.length > 0 && (
        <section>
          <h2
            className="text-lg font-semibold mb-6"
            style={{ color: accentColor }}
          >
            PROJECTS
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {data.project.map((p, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-xl shadow-sm border border-gray-200"
              >
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  {p.name}
                </h3>
                <p className="text-gray-700 whitespace-pre-line">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* EDUCATION + SKILLS GRID */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* EDUCATION */}
        {data.education?.length > 0 && (
          <section>
            <h2
              className="text-lg font-semibold mb-4"
              style={{ color: accentColor }}
            >
              EDUCATION
            </h2>

            <div className="space-y-4">
              {data.education.map((edu, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-xl shadow-sm border border-gray-200"
                >
                  <h3 className="font-semibold text-gray-800">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-gray-600">{edu.institution}</p>

                  <p className="text-xs text-gray-500">
                    {formatDate(edu.graduation_date)}
                  </p>

                  {edu.gpa && (
                    <p className="text-xs text-gray-500">GPA: {edu.gpa}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SKILLS */}
        {data.skills?.length > 0 && (
          <section>
            <h2
              className="text-lg font-semibold mb-4"
              style={{ color: accentColor }}
            >
              SKILLS
            </h2>

            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 bg-white shadow-sm border border-gray-200 rounded text-gray-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

NoirGridTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  accentColor: PropTypes.string.isRequired,
};

export default NoirGridTemplate;
