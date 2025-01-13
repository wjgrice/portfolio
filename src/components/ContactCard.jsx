import Card from "./Card";

const ContactCard = ({ title, icon, content }) => {
  return (
    <Card>
      <div className="flex items-center mb-4">
        {icon && <span className="mr-2">{icon}</span>}
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <ul className="space-y-2">
        {content.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.icon && (
              <img
                src={item.icon}
                alt={`icon for ${item.text}`}
                className="h-5 w-5 mr-2"
              />
            )}
            {item.href ? (
              <a
                href={item.href}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.text}
              </a>
            ) : (
              <span>{item.text}</span>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ContactCard;