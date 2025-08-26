import { Instagram, Mail, MessageCircle } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-semibold sm:text-5xl">
            Estamos aqui por você.
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
            Suporte especializado, experiência personalizada. Entre em contato
            conosco.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 lg:grid-cols-2 lg:gap-10">
            <a
              href="https://wa.me/558496398187?text=Olá! Gostaria de falar com vocês."
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full cursor-pointer items-center space-x-4 rounded-2xl bg-gray-900 p-6 transition-colors duration-300 hover:bg-gray-800"
            >
              <div className="rounded-full bg-green-500 p-3">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">WhatsApp</h3>
                <p className="text-gray-400">Atendimento rápido e direto</p>
              </div>
            </a>

            <a
              href="https://instagram.com/infinitecore.store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full cursor-pointer items-center space-x-4 rounded-2xl bg-gray-900 p-6 transition-colors duration-300 hover:bg-gray-800"
            >
              <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-3">
                <Instagram className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Instagram</h3>
                <p className="text-gray-400">@infinitecore.store</p>
              </div>
            </a>

            <a
              href="mailto:contato@infinitecore.store"
              className="flex w-full cursor-pointer items-center space-x-4 rounded-2xl bg-gray-900 p-6 transition-colors duration-300 hover:bg-gray-800"
            >
              <div className="rounded-full bg-blue-500 p-3">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-400">contato@infinitecore.store</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div
            className="rounded-3xl bg-gray-900 p-8"
            style={{ display: "none" }}
          >
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-white"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-white"
                  required
                />
              </div>

              <div>
                <textarea
                  placeholder="Mensagem"
                  rows={4}
                  className="w-full resize-none rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-white"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-white py-4 font-medium text-black transition-colors duration-300 hover:bg-gray-100"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <div className="text-2xl font-semibold tracking-tight">
              InfiniteCore.store
            </div>
            <div className="text-sm text-gray-400">
              © 2024 InfiniteCore.store. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
