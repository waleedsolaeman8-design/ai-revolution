function AiCard({ image, title, description }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
      <img src={image} alt={title} className="h-56 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-3 text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default AiCard