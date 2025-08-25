import { Headphones, Monitor, Smartphone, Tablet } from "lucide-react"
import React from "react"
import { Link } from "react-router-dom"
import type { Category } from "../interfaces/Category"

const CategoryButtons: React.FC = () => {
  const categories: Category[] = [
    {
      id: "iphone",
      name: "Ver todos os iPhones",
      icon: Smartphone,
      description: "Linha completa iPhone",
    },
    {
      id: "mac",
      name: "Ver todos os Macs",
      icon: Monitor,
      description: "MacBook, iMac e Mac Studio",
    },
    {
      id: "ipad",
      name: "Ver todos os iPads",
      icon: Tablet,
      description: "iPad Pro, Air e mini",
    },
    {
      id: "acessorios",
      name: "Ver todos os acessórios",
      icon: Headphones,
      description: "AirPods, Apple Watch e mais",
    },
  ]

  return (
    <section
      id="category-buttons"
      className="flex min-h-screen flex-col items-center justify-center bg-gray-50"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-semibold text-black sm:text-5xl">
            Explore nossa coleção
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Descubra produtos Apple premium organizados por categoria
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link
                key={category.id}
                to={category.id}
                className="group transform rounded-3xl bg-white p-8 text-left shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 rounded-full bg-gray-100 p-6 transition-colors duration-300 group-hover:bg-black">
                    <IconComponent className="h-8 w-8 text-black transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <h3 className="mb-2 text-xl font-semibold text-black group-hover:text-gray-900">
                    {category.name}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-600">{category.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CategoryButtons
