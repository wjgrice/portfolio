import Card from "./Card";

const ImageCard = ({ title, image, alt, paragraphs }) => {
  return (
    <Card className="flex flex-col md:flex-row items-center md:items-start gap-6">
      {/* Image */}
      <div className="w-48 h-64 flex-shrink-0 overflow-hidden rounded-[50%] shadow-lg">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Text Content */}
      <div className="flex-1">
        {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </Card>
  );
};

export default ImageCard;
