import Card from "./Card";

const SkillsCard = ({ title, icon, content }) => {
  if (!Array.isArray(content)) {
    console.error("Expected 'content' to be an array in SkillsCard");
    return null;
  }

  return (
    <Card>
      <div className="flex items-center mb-4 min-h-[63px]">
        {icon && <span className="mr-2">{icon}</span>}
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <ul className="space-y-1">
        {content.map((skill, index) => (
          <li key={index} className="list-disc list-inside">
            {skill}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default SkillsCard;