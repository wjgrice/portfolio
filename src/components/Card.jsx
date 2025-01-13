const Card = ({ title, children, className }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 p-4 shadow rounded hover:shadow-lg transition-shadow ${className}`}
    >
      {title && <h2 className="text-lg font-bold mb-4">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;