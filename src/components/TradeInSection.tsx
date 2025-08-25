import React, { useState } from 'react';
import { Smartphone, MessageCircle, ChevronRight } from 'lucide-react';

const TradeInSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    modelo: '',
    configuracao: '',
    bateria: '',
    ciclos: '',
    imei: '',
    icloud: '',
    marcas: '',
    carregador: '',
    caixa: '',
    disponibilidade: '',
    fotos: '',
    whatsapp: ''
  });

  const questions = [
    {
      id: 'modelo',
      question: 'Qual modelo do seu dispositivo Apple?',
      type: 'text',
      placeholder: 'Ex: iPhone 15 Pro, MacBook Air M2, iPad Pro...',
      required: true
    },
    {
      id: 'configuracao',
      question: 'Qual a configuração de RAM e armazenamento?',
      type: 'text',
      placeholder: 'Ex: 8GB/256GB, 16GB/512GB, 128GB, 256GB...',
      required: true
    },
    {
      id: 'bateria',
      question: 'Qual a porcentagem atual da bateria?',
      type: 'select',
      options: [
        { value: '', label: 'Selecione a condição da bateria' },
        { value: '100%', label: '100% - Excelente' },
        { value: '95-99%', label: '95-99% - Muito boa' },
        { value: '90-94%', label: '90-94% - Boa' },
        { value: '85-89%', label: '85-89% - Regular' },
        { value: 'abaixo-85%', label: 'Abaixo de 85% - Precisa trocar' }
      ],
      required: true
    },
    {
      id: 'ciclos',
      question: 'Quantos ciclos de bateria tem? (apenas para Mac)',
      type: 'text',
      placeholder: 'Ex: 150 ciclos ou "Não sei verificar"',
      required: false,
      condition: (data) => data.modelo.toLowerCase().includes('mac')
    },
    {
      id: 'ciclos',
      question: 'Quantos ciclos de bateria tem? (apenas para Mac)',
      type: 'text',
      placeholder: 'Ex: 150 ciclos ou "Não sei verificar"',
      required: false,
      condition: (data) => data.modelo.toLowerCase().includes('mac')
    },
    {
      id: 'imei',
      question: 'O IMEI está livre de restrições?',
      type: 'select',
      options: [
        { value: '', label: 'Selecione o status do IMEI' },
        { value: 'livre', label: 'Sim, IMEI totalmente livre' },
        { value: 'bloqueado', label: 'Não, tem alguma restrição' },
        { value: 'nao-sei', label: 'Não sei verificar' }
      ],
      required: true
    },
    {
      id: 'icloud',
      question: 'O iCloud está desvinculado do aparelho?',
      type: 'select',
      options: [
        { value: '', label: 'Selecione o status do iCloud' },
        { value: 'livre', label: 'Sim, iCloud totalmente livre' },
        { value: 'vinculado', label: 'Não, ainda está vinculado' },
        { value: 'nao-sei', label: 'Não sei como verificar' }
      ],
      required: true
    },
    {
      id: 'marcas',
      question: 'Possui marcas de uso visíveis na tela ou carcaça?',
      type: 'select',
      options: [
        { value: '', label: 'Selecione a condição física' },
        { value: 'sem-marcas', label: 'Sem marcas - Estado impecável' },
        { value: 'marcas-leves', label: 'Marcas leves de uso normal' },
        { value: 'marcas-visiveis', label: 'Marcas visíveis mas funcionando' },
        { value: 'danificado', label: 'Danos significativos' }
      ],
      required: true
    },
    {
      id: 'carregador',
      question: 'Possui o carregador original Apple?',
      type: 'select',
      options: [
        { value: '', label: 'Selecione sobre o carregador' },
        { value: 'sim', label: 'Sim, carregador original Apple' },
        { value: 'nao', label: 'Não tenho o carregador original' },
        { value: 'generico', label: 'Tenho carregador genérico' }
      ],
      required: true
    },
    {
      id: 'caixa',
      question: 'Possui a caixa original do produto?',
      type: 'select',
      options: [
        { value: '', label: 'Selecione sobre a caixa' },
        { value: 'sim', label: 'Sim, caixa original completa' },
        { value: 'sem-acessorios', label: 'Caixa sem alguns acessórios' },
        { value: 'nao', label: 'Não tenho a caixa original' }
      ],
      required: true
    },
    {
      id: 'disponibilidade',
      question: 'Tem disponibilidade para apresentar o aparelho em Curitiba?',
      type: 'select',
      options: [
        { value: '', label: 'Selecione sua disponibilidade' },
        { value: 'sim', label: 'Sim, posso ir até Curitiba' },
        { value: 'nao', label: 'Não, preciso enviar pelos Correios' },
        { value: 'talvez', label: 'Talvez, dependendo da proposta' }
      ],
      required: true
    },
    {
      id: 'fotos',
      question: 'Possui fotos ou vídeos do aparelho para enviar?',
      type: 'select',
      options: [
        { value: '', label: 'Selecione sobre as fotos' },
        { value: 'sim', label: 'Sim, tenho fotos e vídeos' },
        { value: 'algumas', label: 'Tenho algumas fotos' },
        { value: 'nao', label: 'Não tenho fotos no momento' }
      ],
      required: true
    }
  ];

  const handleInputChange = (value: string) => {
    const currentQuestion = questions[currentStep];
    setFormData(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const handleNext = () => {
    const currentQuestion = questions[currentStep];
    const currentValue = formData[currentQuestion.id as keyof typeof formData];
    
    if (currentQuestion.required && !currentValue) {
      return;
    }

    // Pular pergunta de ciclos se não for Mac
    if (currentStep === 2 && !formData.modelo.toLowerCase().includes('mac')) {
      setCurrentStep(currentStep + 2);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = () => {
    const answers = questions
      .filter(q => {
        if (q.id === 'ciclos' && !formData.modelo.toLowerCase().includes('mac')) {
          return false;
        }
        return formData[q.id as keyof typeof formData];
      })
      .map(q => `*${q.question}*\n${formData[q.id as keyof typeof formData]}`)
      .join('\n\n');

    const message = `🍎 *AVALIAÇÃO DE APARELHO APPLE*\n\n${answers}\n\n---\n\nGostaria de receber uma proposta para meu aparelho!`;
    
    window.open(`https://wa.me/558496398187?text=${encodeURIComponent(message)}`, '_blank');
  };

  const currentQuestion = questions[currentStep];
  const isLastStep = currentStep === questions.length - 1;
  const canProceed = !currentQuestion?.required || formData[currentQuestion.id as keyof typeof formData];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
            <Smartphone className="w-8 h-8 text-black" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-semibold text-black mb-6">
            Recebemos seu Apple
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Recebemos seu dispositivo Apple com agilidade e segurança. 
            Avaliação profissional e proposta justa garantida.
          </p>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          {currentStep < questions.length ? (
            <div className="space-y-6">
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
                <div 
                  className="bg-black h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                ></div>
              </div>

              {/* Question */}
              <div className="text-center mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-black mb-2">
                  {currentQuestion.question}
                </h3>
                <p className="text-sm text-gray-500">
                  Pergunta {currentStep + 1} de {questions.length}
                </p>
              </div>

              {/* Input */}
              <div className="max-w-md mx-auto">
                {currentQuestion.type === 'text' ? (
                  <input
                    type="text"
                    value={formData[currentQuestion.id as keyof typeof formData]}
                    onChange={(e) => handleInputChange(e.target.value)}
                    placeholder={currentQuestion.placeholder}
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-center"
                  />
                ) : (
                  <select
                    value={formData[currentQuestion.id as keyof typeof formData]}
                    onChange={(e) => handleInputChange(e.target.value)}
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-center"
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
              <div className="text-center pt-6">
                <button
                  onClick={handleNext}
                  disabled={!canProceed}
                  className={`inline-flex items-center px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                    canProceed
                      ? 'bg-black text-white hover:bg-gray-900 transform hover:scale-105'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <span>Próxima</span>
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          ) : (
            /* Final Step - Submit */
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              
              <h3 className="text-2xl font-semibold text-black mb-4">
                Pronto para receber sua proposta!
              </h3>
              
              <p className="text-gray-600 mb-8">
                Vamos analisar as informações e enviar uma proposta justa para seu Apple.
              </p>

              <button
                onClick={handleSubmit}
                className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                <span className="font-medium">Solicitar avaliação</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TradeInSection;