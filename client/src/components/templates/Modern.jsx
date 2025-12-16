import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ModernSidebarTemplate = ({ data, accentColor }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden grid grid-cols-[280px_1fr]">
            
            {/* LEFT SIDEBAR */}
            <aside
                className="p-6 text-gray-900 min-h-full"
                style={{ backgroundColor: "#F5FCEB" }}
            >
                {/* Name */}
                <h1 className="text-3xl font-bold" style={{ color: accentColor }}>
                    {data.personal_info?.full_name || "Full Name"}
                </h1>

                <p className="text-md font-medium mt-1 mb-6">
                    {data.personal_info?.profession || "Job Title"}
                </p>

                {/* Image */}
                {data.personal_info?.image && (
                    <img
                        src={
                            typeof data.personal_info.image === "string"
                                ? data.personal_info.image
                                : URL.createObjectURL(data.personal_info.image)
                        }
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md mx-auto mb-6"
                    />
                )}

                {/* About */}
                {data.professional_summary && (
                    <div
                        className="p-4 rounded-xl text-sm leading-relaxed"
                        style={{ backgroundColor: "#E1F2C9" }}
                    >
                        <h3 className="font-semibold mb-2" style={{ color: accentColor }}>
                            About Me
                        </h3>
                        <p className="text-gray-700">
                            {data.professional_summary}
                        </p>
                    </div>
                )}

                {/* Skills */}
                {/* Skills */}
{data.skills && data.skills.length > 0 && (
    <section className="mt-6">
        <h3
            className="text-sm font-semibold mb-2 px-4 py-1 rounded-md inline-block"
            style={{ backgroundColor: accentColor, color: "white" }}
        >
            Skills
        </h3>

        <div className="ml-2 flex flex-col gap-1">
            {data.skills.map((skill, index) => (
                <div key={index} className="text-gray-800 text-sm">
                    • {skill}
                </div>
            ))}
        </div>
    </section>
)}


                {/* Education */}
                {data.education?.length > 0 && (
                    <div className="mt-6">
                        <h3 className="font-bold mb-2" style={{ color: accentColor }}>
                            Education:
                        </h3>

                        {data.education.map((edu, i) => (
                            <div key={i} className="mb-4 text-sm">
                                <p className="font-semibold">{edu.degree}</p>
                                <p>{edu.institution}</p>
                                <p className="text-gray-600 text-xs mt-1">
                                    {formatDate(edu.graduation_date)}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Contact */}
                <div className="mt-8 space-y-3 text-sm text-gray-700">
                    {data.personal_info?.phone && (
                        <div className="flex items-center gap-2">
                            <Phone size={15} /> <span>{data.personal_info.phone}</span>
                        </div>
                    )}

                    {data.personal_info?.email && (
                        <div className="flex items-center gap-2">
                            <Mail size={15} /> <span>{data.personal_info.email}</span>
                        </div>
                    )}

                    {data.personal_info?.website && (
                        <div className="flex items-center gap-2">
                            <Globe size={15} /> <span>{data.personal_info.website}</span>
                        </div>
                    )}

                    {data.personal_info?.linkedin && (
                        <div className="flex items-center gap-2 break-all">
                            <Linkedin size={15} /> <span>{data.personal_info.linkedin}</span>
                        </div>
                    )}

                    {data.personal_info?.location && (
                        <div className="flex items-center gap-2">
                            <MapPin size={15} /> <span>{data.personal_info.location}</span>
                        </div>
                    )}
                </div>
            </aside>

            {/* RIGHT CONTENT PANEL */}
            <main
                className="p-10 text-gray-100"
                style={{ backgroundColor: "#0C3B32" }}  // deep green background like your image
            >
                {/* Professional Experience */}
                <div className="mb-10">
                    <div
                        className="inline-block px-4 py-2 text-sm font-semibold rounded-md mb-6"
                        style={{ backgroundColor: accentColor, color: "#0C3B32" }}
                    >
                        Professional Experience
                    </div>

                    {data.experience?.map((exp, i) => (
                        <div key={i} className="mb-8">
                            <h3 className="font-bold text-lg">{exp.position}</h3>

                            <p className="text-sm text-gray-300 font-medium">
                                {exp.company} • {formatDate(exp.start_date)} –{" "}
                                {exp.is_current ? "Present" : formatDate(exp.end_date)}
                            </p>

                            <p className="text-gray-200 mt-3 whitespace-pre-line">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Projects */}
                {data.project?.length > 0 && (
                    <div className="mt-10">
                        <div
                            className="inline-block px-4 py-2 text-sm font-semibold rounded-md mb-6"
                            style={{ backgroundColor: accentColor, color: "#0C3B32" }}
                        >
                            Projects
                        </div>

                        {data.project.map((proj, i) => (
                            <div key={i} className="mb-6">
                                <h3 className="font-bold text-lg">{proj.name}</h3>
                                <p className="text-gray-200">{proj.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default ModernSidebarTemplate;
