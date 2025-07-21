
export default function ServiceCard({ imageSrc, title, description }) {
  return (
    <div className="bg-white border-4 border-orange-300 shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row p-6 gap-6 max-w-4xl w-full">
      <div className="w-full md:w-1/3 h-64 md:h-auto rounded-xl overflow-hidden border-2 border-orange-200">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 text-brown-800 text-left">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
