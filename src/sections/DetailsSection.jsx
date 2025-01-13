import ContactCard from "../components/ContactCard";
import WorkHistoryCard from "../components/WorkHistoryCard";
import EducationCard from "../components/EducationCard";
import SkillsCard from "../components/SkillsCard";
import content from "../data/content.json";

const DetailsSection = () => {
  const detailsContent = content.sections.filter(
    (section) => section.category === "details"
  );

  if (!detailsContent.length) return null;

  return (
    <section className="w-full px-4">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
        {/* Left Column: Contact, Education */}
        <div className="col-span-1 space-y-6">
          {detailsContent.map((item, index) => {
            if (item.title === "Contact" || item.title === "Education") {
              return (
                <div key={index}>
                  {item.title === "Contact" && (
                    <ContactCard
                      title={item.title}
                      icon={item.icon}
                      content={item.content}
                    />
                  )}
                  {item.title === "Education" && (
                    <EducationCard
                      title={item.title}
                      icon={item.icon}
                      content={item.content}
                    />
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Middle Column: Work History */}
        <div className="col-span-2 space-y-6">
          {detailsContent.map((item, index) => {
            if (item.title === "Work History") {
              return (
                <WorkHistoryCard
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  content={item.content}
                />
              );
            }
            return null;
          })}
        </div>

        {/* Right Column: Skills */}
        <div className="col-span-1 space-y-6">
          {detailsContent.map((item, index) => {
            if (item.title === "Skills") {
              return (
                <SkillsCard
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  content={item.content}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;