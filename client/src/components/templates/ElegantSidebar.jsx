// --- Elegant Sidebar Template ---
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

 const ElegantSidebarTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short"
    });
  };

  return (
    <div className="max-w-5xl mx-auto bg-white text-gray-800 grid grid-cols-3 min-h-screen shadow-lg">

      {/* Sidebar */}
      <aside className="col-span-1 p-8 text-white" style={{ backgroundColor: accentColor }}>
        {/* Name */}
        <h1 className="text-3xl font-semibold mb-1">{data.personal_info?.full_name}</h1>
        <p className="text-sm opacity-80 mb-6">{data.personal_info?.profession}</p>

        {/* Contact */}
        <div className="space-y-4 text-sm">
          {data.personal_info?.email && (
            <div className="flex items-center gap-2"><Mail size={16}/>{data.personal_info.email}</div>
          )}
          {data.personal_info?.phone && (
            <div className="flex items-center gap-2"><Phone size={16}/>{data.personal_info.phone}</div>
          )}
          {data.personal_info?.location && (
            <div className="flex items-center gap-2"><MapPin size={16}/>{data.personal_info.location}</div>
          )}
          {data.personal_info?.linkedin && (
            <div className="flex items-center gap-2"><Linkedin size={16}/>{data.personal_info.linkedin}</div>
          )}
          {data.personal_info?.website && (
            <div className="flex items-center gap-2"><Globe size={16}/>{data.personal_info.website}</div>
          )}
        </div>

        {/* Skills */}
        {data.skills && (
          <section className="mt-10">
            <h2 className="text-sm font-semibold mb-3 tracking-widest">SKILLS</h2>
            <ul className="space-y-1 text-sm opacity-90">
              {data.skills.map((s,i)=>(<li key={i}>{s}</li>))}
            </ul>
          </section>
        )}

        {/* Education */}
        {data.education && (
          <section className="mt-10">
            <h2 className="text-sm font-semibold mb-3 tracking-widest">EDUCATION</h2>
            <div className="space-y-3 text-sm opacity-90">
              {data.education.map((edu,i)=>(
                <div key={i}>
                  <p className="font-semibold">{edu.degree}</p>
                  <p>{edu.institution}</p>
                  <p className="text-xs">{formatDate(edu.graduation_date)}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </aside>

      {/* Main Section */}
      <main className="col-span-2 p-10">
        {/* Summary */}
        {data.professional_summary && (
          <section className="mb-10">
            <h2 className="text-lg font-semibold mb-3" style={{color: accentColor}}>SUMMARY</h2>
            <p className="text-gray-700 leading-relaxed">{data.professional_summary}</p>
          </section>
        )}

        {/* Experience */}
        {data.experience && (
          <section className="mb-10">
            <h2 className="text-lg font-semibold mb-6" style={{color: accentColor}}>EXPERIENCE</h2>
            <div className="space-y-6">
              {data.experience.map((exp,i)=>(
                <div key={i} className="border-l-4 pl-4" style={{borderColor: accentColor}}>
                  <div className="flex justify-between mb-1">
                    <h3 className="font-medium text-lg">{exp.position}</h3>
                    <span className="text-sm text-gray-600">{formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}</span>
                  </div>
                  <p className="text-sm mb-2" style={{color: accentColor}}>{exp.company}</p>
                  <p className="text-gray-700 whitespace-pre-line text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.project && (
          <section>
            <h2 className="text-lg font-semibold mb-6" style={{color: accentColor}}>PROJECTS</h2>
            <div className="space-y-4">
              {data.project.map((proj,i)=>(
                <div key={i}>
                  <h3 className="font-medium text-lg">{proj.name}</h3>
                  <p className="text-gray-700 text-sm whitespace-pre-line">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default ElegantSidebarTemplate;
