import { ArrowRight } from "lucide-react"

const Hero = () => {
  const handleExploreClick = () => {
    const categorySection = document.getElementById("category-buttons")
    if (categorySection) {
      categorySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:py-32">
          <div className="text-center lg:text-left">
            <h1 className="mb-6 text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-6xl">
              Sua experiência Apple,
              <br />
              <span className="text-gray-600"> elevada.</span>
            </h1>

            <p className="mb-12 text-lg leading-relaxed text-gray-600 sm:text-xl">
              Descubra a coleção mais exclusiva de produtos Apple com qualidade
              garantida e suporte especializado.
            </p>

            <button
              onClick={handleExploreClick}
              className="group inline-flex transform items-center rounded-full bg-black px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:bg-gray-900"
            >
              <span className="text-base font-medium">Explorar</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* MacBook Image */}
          <div>
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100">
              <img
                src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                alt="MacBook"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
