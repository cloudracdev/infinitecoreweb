import { Link } from "react-router-dom"

function CtaSection() {
  return (
    <div className="mb-8 mt-16 text-center">
      <Link
        to="https://wa.me/558496398187?text=Olá! Não encontrei o produto que procuro no site. Podem me ajudar?"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-black underline transition-colors duration-200 hover:text-gray-600"
      >
        Não encontrou seu produto? Fale com a gente
      </Link>
    </div>
  )
}

export default CtaSection
