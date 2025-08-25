import React from "react"
import { MessageCircle } from "lucide-react"
import type { SeminovosSectionProps } from "../interfaces/SemiNovos"

const SeminovosSection: React.FC<SeminovosSectionProps> = ({ variant = "home" }) => {
  const handleWhatsAppClick = () => {
    const message =
      variant === "home"
        ? "Olá! Gostaria de ver os aparelhos seminovos disponíveis."
        : "Olá! Gostaria de ver os aparelhos seminovos desta categoria."

    window.open(`https://wa.me/558496398187?text=${encodeURIComponent(message)}`, "_blank")
  }

  if (variant === "category") {
    return (
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-semibold text-black sm:text-4xl">
            Confira também nossos usados
          </h2>

          <button
            onClick={handleWhatsAppClick}
            className="inline-flex transform items-center rounded-full bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-gray-900"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            <span className="font-medium">Ver disponíveis no WhatsApp</span>
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-gray-50 py-20" style={{ display: "none" }}>
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-4xl font-semibold text-black sm:text-5xl">
          Quer um Apple original com preço menor?
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
          Veja nossos modelos seminovos com garantia e procedência.
        </p>

        <button
          onClick={handleWhatsAppClick}
          className="inline-flex transform items-center rounded-full bg-black px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:bg-gray-900"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          <span className="font-medium">Ver disponíveis no WhatsApp</span>
        </button>
      </div>
    </section>
  )
}

export default SeminovosSection
