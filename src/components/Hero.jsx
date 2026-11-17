function Hero() {
  return (
    <section id="home"
    className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2"
    >
      <div>
        <h1 className="text-5xl font-bold leading-tight text-gray-900 md:text-5xl">
          <span className="bg-linear-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">Artificial Intelligence</span>
          <br />
          for a Smarter Future
        </h1>

        <p className="mt-6 max-w-lg text-lg text-gray-600">
          Discover how AI is transforming industries and improving lives
          worldwide. Our cutting-edge solutions harness the power of machine
          learning to solve complex problems.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white shadow-lg hover:bg-indigo-600">Explore AI Solutions</button>
          <button className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-100">Learn More</button>
        </div>

        <p className="mt-8 text-gray-600">
          Trusted by <span className="font-semibold text-indigo-500">10,000+</span> people worldwide
        </p>
      </div>

      <div>
        <img src="https://picsum.photos/800/800" alt="AI brain" className="w-full rounded-2xl object-cover shadow-xl" />
      </div>
    </section>
  )
}

export default Hero