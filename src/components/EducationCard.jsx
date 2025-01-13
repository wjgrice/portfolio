import Card from "./Card";

const EducationCard = ({ title, icon, content }) => {
  if (!Array.isArray(content)) {
    console.error("Expected 'content' to be an array in EducationCard");
    return null;
  }

  return (
    <Card className="min-h-[160px]">
      <div className="flex items-center mb-4">
        {icon && <span className="mr-2">{icon}</span>}
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <ul className="space-y-2">
        {content.map((item, index) => (
          <li key={index}>
            <p className="font-bold text-gray-800 dark:text-gray-100">{item.degree}</p>
            <p>{item.institution}</p>
            <p>{item.dates}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default EducationCard;