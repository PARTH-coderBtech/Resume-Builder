import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ElegantProfileTemplate = ({ data, accentColor }) => {

    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
        });
    };

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">

            {/* ---------- TOP HEADER ---------- */}
            <div
                className="p-10 text-white flex flex-col items-center"
                style={{ backgroundColor: accentColor }}
            >
                {data.personal_info?.image && (
                    <img
                        src={
                            typeof data.personal_info.image === "string"
                                ? data.personal_info.image
                                : URL.createObjectURL(data.personal_info.image)
                        }
                        alt="Profile"
                        className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg mb-6"
                    />
                )}

                <h1 className="text-4xl font-bold tracking-wide">
                    {data.personal_info?.full_name || "Your Name"}
                </h1>

                <p className="text-lg opacity-90 mt-1">
                    {data.personal_info?.profession || "Your Profession"}
                </p>

                {data.professional_summary && (
                    <p className="text-center max-w-2xl mt-5 text-white/90">
                        {data.professional_summary}
                    </p>
                )}
            </div>

            {/* ---------- MAIN BODY ---------- */}
            <div className="p-10 grid grid-cols-3 gap-10">

                {/* ---------- LEFT COLUMN ---------- */}
                <div className="col-span-2">

                    {/* EXPERIENCE */}
                    {data.experience?.length > 0 && (
                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4" style={{ color: accentColor }}>
                                Experience
                            </h2>

                            {data.experience.map((exp, index) => (
                                <div key={index} className="mb-5 pb-4 border-b border-gray-200">
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className="font-semibold text-lg text-gray-900">
                                                {exp.position}
                                            </h3>
                                            <p className="text-gray-700">{exp.company}</p>
                                        </div>

                                        <span className="text-sm text-gray-500">
                                            {formatDate(exp.start_date)} -{" "}
                                            {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                        </span>
                                    </div>

                                    {exp.description && (
                                        <p className="text-gray-600 mt-3 whitespace-pre-line">
                                            {exp.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </section>
                    )}

                    {/* PROJECTS (replaces AWARDS) */}
                    {data.project?.length > 0 && (
                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4" style={{ color: accentColor }}>
                                Projects
                            </h2>

                            <div className="space-y-4">
                                {data.project.map((proj, index) => (
                                    <div key={index} className="border-l-4 pl-4"
                                        style={{ borderColor: accentColor }}
                                    >
                                        <h3 className="font-semibold text-gray-900">
                                            {proj.name}
                                        </h3>
                                        <p className="text-gray-700">{proj.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* EDUCATION */}
                    {data.education?.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-semibold mb-4" style={{ color: accentColor }}>
                                Academic History
                            </h2>

                            {data.education.map((edu, index) => (
                                <div key={index} className="mb-4 pb-4 border-b border-gray-200">
                                    <h3 className="font-semibold text-gray-900">
                                        {edu.degree} {edu.field ? `in ${edu.field}` : ""}
                                    </h3>
                                    <p className="text-gray-700">{edu.institution}</p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {formatDate(edu.graduation_date)}
                                    </p>
                                </div>
                            ))}
                        </section>
                    )}

                </div>

                {/* ---------- RIGHT COLUMN ---------- */}
                <div className="col-span-1 space-y-10">

                    {/* CONTACT */}
                    <section>
                        <h2 className="text-xl font-semibold mb-3" style={{ color: accentColor }}>
                            Contact
                        </h2>

                        <div className="space-y-3 text-gray-700 text-sm">
                            {data.personal_info?.email && (
                                <div className="flex items-center gap-2"><Mail size={16} /> {data.personal_info.email}</div>
                            )}
                            {data.personal_info?.phone && (
                                <div className="flex items-center gap-2"><Phone size={16} /> {data.personal_info.phone}</div>
                            )}
                            {data.personal_info?.location && (
                                <div className="flex items-center gap-2"><MapPin size={16} /> {data.personal_info.location}</div>
                            )}
                            {data.personal_info?.linkedin && (
                                <div className="flex items-center gap-2"><Linkedin size={16} /> {data.personal_info.linkedin}</div>
                            )}
                            {data.personal_info?.website && (
                                <div className="flex items-center gap-2"><Globe size={16} /> {data.personal_info.website}</div>
                            )}
                        </div>
                    </section>

                    {/* SOFT SKILLS (slider bars) */}
                    {data.soft_skills?.length > 0 && (
                        <section>
                            <h2 className="text-xl font-semibold mb-3" style={{ color: accentColor }}>
                                Soft Skills
                            </h2>

                            <div className="space-y-4">
                                {data.soft_skills.map((skill, index) => (
                                    <div key={index}>
                                        <p className="text-gray-800 text-sm mb-1">{skill.name}</p>

                                        <div className="w-full h-2 bg-gray-200 rounded-full">
                                            <div
                                                className="h-2 rounded-full"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    backgroundColor: accentColor,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* CORE SKILLS (from ClassicTemplate) */}
                    {data.skills?.length > 0 && (
                        <section>
                            <h2 className="text-xl font-semibold mb-3" style={{ color: accentColor }}>
                                Core Skills
                            </h2>

                            <div className="flex flex-wrap gap-3 text-gray-700 text-sm">
                                {data.skills.map((skill, index) => (
                                    <span key={index}>• {skill}</span>
                                ))}
                            </div>
                        </section>
                    )}

                </div>
            </div>
        </div>
    );
};

export default ElegantProfileTemplate;
