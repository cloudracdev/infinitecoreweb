import { ChevronRight, MessageCircle, Smartphone } from "lucide-react"
import { useState } from "react"

const TradeInSection = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    modelo: "",
    configuracao: "",
    bateria: "",
    ciclos: "",
    imei: "",
    icloud: "",
    marcas: "",
    carregador: "",
    caixa: "",
    disponibilidade: "",
    fotos: "",
    whatsapp: "",
  })

  const questions = [
    {
      id: "modelo",
      question: "Qual modelo do seu dispositivo Apple?",
      type: "text",
      placeholder: "Ex: iPhone 15 Pro, MacBook Air M2, iPad Pro...",
      required: true,
    },
    {
      id: "configuracao",
      question: "Qual a configuração de RAM e armazenamento?",
      type: "text",
      placeholder: "Ex: 8GB/256GB, 16GB/512GB, 128GB, 256GB...",
      required: true,
    },
    {
      id: "bateria",
      question: "Qual a porcentagem atual da bateria?",
      type: "select",
      options: [
        { value: "", label: "Selecione a condição da bateria" },
        { value: "100%", label: "100% - Excelente" },
        { value: "95-99%", label: "95-99% - Muito boa" },
        { value: "90-94%", label: "90-94% - Boa" },
        { value: "85-89%", label: "85-89% - Regular" },
        { value: "abaixo-85%", label: "Abaixo de 85% - Precisa trocar" },
      ],
      required: true,
    },
    {
      id: "ciclos",
      question: "Quantos ciclos de bateria tem? (apenas para Mac)",
      type: "text",
      placeholder: 'Ex: 150 ciclos ou "Não sei verificar"',
      required: false,
    },
    {
      id: "ciclos",
      question: "Quantos ciclos de bateria tem? (apenas para Mac)",
      type: "text",
      placeholder: 'Ex: 150 ciclos ou "Não sei verificar"',
      required: false,
    },
    {
      id: "imei",
      question: "O IMEI está livre de restrições?",
      type: "select",
      options: [
        { value: "", label: "Selecione o status do IMEI" },
        { value: "livre", label: "Sim, IMEI totalmente livre" },
        { value: "bloqueado", label: "Não, tem alguma restrição" },
        { value: "nao-sei", label: "Não sei verificar" },
      ],
      required: true,
    },
    {
      id: "icloud",
      question: "O iCloud está desvinculado do aparelho?",
      type: "select",
      options: [
        { value: "", label: "Selecione o status do iCloud" },
        { value: "livre", label: "Sim, iCloud totalmente livre" },
        { value: "vinculado", label: "Não, ainda está vinculado" },
        { value: "nao-sei", label: "Não sei como verificar" },
      ],
      required: true,
    },
    {
      id: "marcas",
      question: "Possui marcas de uso visíveis na tela ou carcaça?",
      type: "select",
      options: [
        { value: "", label: "Selecione a condição física" },
        { value: "sem-marcas", label: "Sem marcas - Estado impecável" },
        { value: "marcas-leves", label: "Marcas leves de uso normal" },
        { value: "marcas-visiveis", label: "Marcas visíveis mas funcionando" },
        { value: "danificado", label: "Danos significativos" },
      ],
      required: true,
    },
    {
      id: "carregador",
      question: "Possui o carregador original Apple?",
      type: "select",
      options: [
        { value: "", label: "Selecione sobre o carregador" },
        { value: "sim", label: "Sim, carregador original Apple" },
        { value: "nao", label: "Não tenho o carregador original" },
        { value: "generico", label: "Tenho carregador genérico" },
      ],
      required: true,
    },
    {
      id: "caixa",
      question: "Possui a caixa original do produto?",
      type: "select",
      options: [
        { value: "", label: "Selecione sobre a caixa" },
        { value: "sim", label: "Sim, caixa original completa" },
        { value: "sem-acessorios", label: "Caixa sem alguns acessórios" },
        { value: "nao", label: "Não tenho a caixa original" },
      ],
      required: true,
    },
    {
      id: "disponibilidade",
      question: "Tem disponibilidade para apresentar o aparelho em Curitiba?",
      type: "select",
      options: [
        { value: "", label: "Selecione sua disponibilidade" },
        { value: "sim", label: "Sim, posso ir até Curitiba" },
        { value: "nao", label: "Não, preciso enviar pelos Correios" },
        { value: "talvez", label: "Talvez, dependendo da proposta" },
      ],
      required: true,
    },
    {
      id: "fotos",
      question: "Possui fotos ou vídeos do aparelho para enviar?",
      type: "select",
      options: [
        { value: "", label: "Selecione sobre as fotos" },
        { value: "sim", label: "Sim, tenho fotos e vídeos" },
        { value: "algumas", label: "Tenho algumas fotos" },
        { value: "nao", label: "Não tenho fotos no momento" },
      ],
      required: true,
    },
  ]

  const handleInputChange = (value: string) => {
    const currentQuestion = questions[currentStep]
    setFormData((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }))
  }

  const handleNext = () => {
    const currentQuestion = questions[currentStep]
    const currentValue = formData[currentQuestion.id as keyof typeof formData]

    if (currentQuestion.required && !currentValue) {
      return
    }

    // Pular pergunta de ciclos se não for Mac
    if (currentStep === 2 && !formData.modelo.toLowerCase().includes("mac")) {
      setCurrentStep(currentStep + 2)
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleSubmit = () => {
    const answers = questions
      .filter((q) => {
        if (
          q.id === "ciclos" &&
          !formData.modelo.toLowerCase().includes("mac")
        ) {
          return false
        }
        return formData[q.id as keyof typeof formData]
      })
      .map((q) => `*${q.question}*\n${formData[q.id as keyof typeof formData]}`)
      .join("\n\n")

    const message = `🍎 *AVALIAÇÃO DE APARELHO APPLE*\n\n${answers}\n\n---\n\nGostaria de receber uma proposta para meu aparelho!`

    window.open(
      `https://wa.me/558496398187?text=${encodeURIComponent(message)}`,
      "_blank",
    )
  }

  const currentQuestion = questions[currentStep]
  const canProceed =
    !currentQuestion?.required ||
    formData[currentQuestion.id as keyof typeof formData]

  return (
    <section className="min-h-screen bg-white p-4">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
            <Smartphone className="h-8 w-8 text-black" />
          </div>

          <h2 className="mb-6 text-4xl font-semibold text-black sm:text-5xl">
            Recebemos seu Apple
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Recebemos seu dispositivo Apple com agilidade e segurança. Avaliação
            profissional e proposta justa garantida.
          </p>
        </div>

        <div className="mt-8 rounded-3xl bg-gray-50 p-8 sm:p-12">
          {currentStep < questions.length ? (
            <div className="space-y-6">
              {/* Progress Bar */}
              <div className="mb-8 h-2 w-full rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-black transition-all duration-500"
                  style={{
                    width: `${((currentStep + 1) / questions.length) * 100}%`,
                  }}
                ></div>
              </div>

              {/* Question */}
              <div className="mb-8 text-center">
                <h3 className="mb-2 text-xl font-semibold text-black sm:text-2xl">
                  {currentQuestion.question}
                </h3>
                <p className="text-sm text-gray-500">
                  Pergunta {currentStep + 1} de {questions.length}
                </p>
              </div>

              {/* Input */}
              <div className="mx-auto max-w-md">
                {currentQuestion.type === "text" ? (
                  <input
                    type="text"
                    value={
                      formData[currentQuestion.id as keyof typeof formData]
                    }
                    onChange={(e) => handleInputChange(e.target.value)}
                    placeholder={currentQuestion.placeholder}
                    className="w-full rounded-xl border border-gray-200 px-4 py-4 text-center transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-black"
                  />
                ) : (
                  <select
                    value={
                      formData[currentQuestion.id as keyof typeof formData]
                    }
                    onChange={(e) => handleInputChange(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-4 text-center transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-black"
                  >
                    {currentQuestion.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {/* Next Button */}
              <div className="pt-6 text-center">
                <button
                  onClick={handleNext}
                  disabled={!canProceed}
                  className={`inline-flex items-center rounded-full px-8 py-4 font-medium transition-all duration-300 ${
                    canProceed
                      ? "transform bg-black text-white hover:scale-105 hover:bg-gray-900"
                      : "cursor-not-allowed bg-gray-300 text-gray-500"
                  }`}
                >
                  <span>Próxima</span>
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          ) : (
            /* Final Step - Submit */
            <div className="space-y-6 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-black">
                Pronto para receber sua proposta!
              </h3>

              <p className="mb-8 text-gray-600">
                Vamos analisar as informações e enviar uma proposta justa para
                seu Apple.
              </p>

              <button
                onClick={handleSubmit}
                className="inline-flex transform items-center rounded-full bg-black px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:bg-gray-900"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                <span className="font-medium">Solicitar avaliação</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default TradeInSection
