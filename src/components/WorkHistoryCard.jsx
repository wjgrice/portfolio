import Card from "./Card";

const WorkHistoryCard = ({ title, icon, content }) => {
  if (!Array.isArray(content)) {
    console.error("Expected 'content' to be an array in WorkHistoryCard");
    return null;
  }

  return (
    <Card>
      <div className="flex items-center mb-4">
        {icon && <span className="mr-2">{icon}</span>}
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <ul className="space-y-6">
        {content.map((item, index) => (
          <li key={index} className="space-y-2">
            <div className="flex flex-col md:flex-row md:items-center md:gap-2">
              <p className="font-bold text-gray-800 dark:text-gray-100">
                {item.company}
              </p>
              <span className="hidden md:inline">|</span>
              <p className="font-bold text-gray-800 dark:text-gray-100">
                {item.title}
              </p>
              <span className="hidden md:inline">|</span>
              <p className="font-bold text-gray-800 dark:text-gray-100">
                {item.dates}
              </p>
            </div>
            <p className="mt-2">{item.text}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default WorkHistoryCard;
