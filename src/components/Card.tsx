import type { CardInterface } from "@/interface/CardInterface"
import Utils from "@/Utils/Utils"
import { ShoppingBag } from "lucide-react"
import { useState } from "react"

function Card({
  productImage,
  productImageAlt,
  isOut,
  productDescription,
  productName,
  productValue,
  configuration,
  color,
}: CardInterface) {
  const [selectedColor, setSelectedColor] = useState<number | null>(0)
  const [selectedConfiguration, setSelectedConfiguration] = useState<{
    [key: string]: string | number | boolean | null
  }>({
    tela: 0,
    configuração: 0,
    modelo: 0,
    chip: 0,
    tamanho: 0,
  })

  const formatKey = (key: string, keyValue: string) => {
    switch (key) {
      case "tela":
        return Utils.formatStringScreen(keyValue)

      case "configuração":
        return Utils.formatStringConfiguration(keyValue)

      case "tamanho":
        return Utils.formatStringSize(keyValue)

      default:
        return keyValue
    }
  }

  return (
    <div
      className={`flex flex-col gap-2 overflow-hidden rounded-2xl bg-white p-4 shadow-lg transition-all duration-500 ${isOut ? "opacity-60" : "animate-fadeInUp hover:-translate-y-1 hover:shadow-xl"}`}
    >
      <div>
        <img src={productImage} alt={productImageAlt} />
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <div>
          <h2 className="mb-2 text-lg font-semibold text-black">
            {productName}
          </h2>
          <p className="text-xs font-medium text-gray-600">LACRADO</p>
          <p className="text-xs font-medium text-gray-600">
            {productDescription}
          </p>
        </div>

        {/* CONFIGURAÇÕES */}
        <div className="flex flex-col gap-2">
          {configuration.map((config) => (
            <div key={Math.random() * 1000}>
              <span className="text-xs font-medium text-gray-700">
                {Utils.capitalize(config.key)}
              </span>

              <div className="flex flex-wrap gap-2">
                {config.keyValue.map((option, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setSelectedConfiguration({
                        ...selectedConfiguration,
                        [config.key]: index,
                      })
                    }
                    className={`rounded-md border px-2 py-1 text-xs transition-all duration-200 ${selectedConfiguration[config.key] === index ? "border-black bg-black text-white" : "border-gray-300 hover:border-gray-400"}`}
                  >
                    {formatKey(config.key, option)}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <span className="text-xs font-medium text-gray-700">Cor</span>
        <div className="flex flex-wrap gap-2">
          {color.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(index)}
              className={`flex items-center justify-center gap-2 rounded-md border px-2 py-1 text-xs transition-all duration-200 ${selectedColor === index ? "border-black font-semibold" : "border-gray-300"}`}
            >
              <div
                className={`h-2 w-2 rounded-full border border-gray-300`}
                style={{ backgroundColor: color.hex }}
              />
              {color.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-semibold text-black">
          {Utils.formatMoneyToString(productValue)}
        </span>

        <button
          disabled={isOut}
          className={`flex items-center rounded-full px-3 py-1.5 transition-colors duration-300 ${isOut ? "cursor-not-allowed bg-gray-300 text-gray-500" : "bg-black text-white hover:bg-gray-900"}`}
        >
          <ShoppingBag className="mr-1.5 h-3 w-3" />
          <span className="text-xs font-medium">Comprar</span>
        </button>
      </div>
    </div>
  )
}

export default Card
