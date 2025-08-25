import React from 'react';
import { MessageCircle, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
            Estamos aqui por você.
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Suporte especializado, experiência personalizada. Entre em contato conosco.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Contact Methods */}
          <div className="space-y-8">
            <a
              href="https://wa.me/558496398187?text=Olá! Gostaria de falar com vocês."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-6 bg-gray-900 rounded-2xl hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
            >
              <div className="bg-green-500 p-3 rounded-full">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">WhatsApp</h3>
                <p className="text-gray-400">Atendimento rápido e direto</p>
              </div>
            </a>

            <a
              href="https://instagram.com/infinitecore.store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-6 bg-gray-900 rounded-2xl hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Instagram</h3>
                <p className="text-gray-400">@infinitecore.store</p>
              </div>
            </a>

            <a
              href="mailto:contato@infinitecore.store"
              className="flex items-center space-x-4 p-6 bg-gray-900 rounded-2xl hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
            >
              <div className="bg-blue-500 p-3 rounded-full">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-400">contato@infinitecore.store</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 rounded-3xl p-8" style={{ display: 'none' }}>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              <div>
                <textarea
                  placeholder="Mensagem"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="text-2xl font-semibold tracking-tight">
              InfiniteCore.store
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 InfiniteCore.store. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;