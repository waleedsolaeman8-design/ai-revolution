import AiCard from './AiCard'

function AiTypes() {
  return (
    <section id="ai-types" className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-center text-4xl font-bold text-gray-900">
        Different Types of Artificial Intelligence
      </h2>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <AiCard
          image="https://picsum.photos/seed/ml/600/400"
          title="Machine Learning"
          description="Systems that learn and improve from experience without being explicitly programmed."
        />
        <AiCard
          image="https://picsum.photos/seed/nn/600/400"
          title="Neural Networks"
          description="Biologically inspired networks that simulate human brain functions."
        />
        <AiCard
          image="https://picsum.photos/seed/nlp/600/400"
          title="Natural Language Processing"
          description="Enabling machines to understand and generate human language."
        />
      </div>
    </section>
  )
}

export default AiTypes