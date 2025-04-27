import Image from 'next/image';
import { Shield, BookOpen, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Inspeções e Adequações",
      icon: Shield,
      description: "Realizamos inspeções técnicas especializadas e adequações em conformidade com as normas regulamentadoras.",
      items: [
        "Inspeção em equipamentos de transporte",
        "Análise de riscos em máquinas e equipamentos",
        "Inspeção em caldeiras e vasos de pressão",
        "Adequação às normas NR-11, NR-12, NR-13, NR-18 e NR-35",
        "Elaboração de laudos técnicos",
      ],
      image: "https://tercal.com.br/wp-content/uploads/2020/11/bancada-calibracao-1.jpg"
    },
    {
      title: "Treinamentos",
      icon: BookOpen,
      description: "Oferecemos treinamentos especializados em normas regulamentadoras para capacitação profissional.",
      items: [
        "NR-11: Operação de equipamentos de transporte",
        "NR-12: Segurança em máquinas e equipamentos",
        "NR-13: Operação de caldeiras e vasos de pressão",
        "NR-18: Segurança na construção civil",
        "NR-35: Trabalho em altura",
      ],
      image: "https://montand.com.br/wp-content/uploads/2023/10/EPI-de-seguranca.png"
    },
    {
      title: "Calibração de Instrumentos",
      icon: Wrench,
      description: "Serviços especializados de calibração de instrumentos com certificação.",
      items: [
        "Calibração de válvulas de segurança e alívio",
        "Calibração de manômetros",
        "Testes hidrostáticos",
        "Certificação e documentação",
        "Manutenção preventiva",
      ],
      image: "https://www.loiolaengenharia.com.br/imagens/informacoes/calibracao-manometro-02.jpg"
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Nossos Serviços
        </h1>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                        <span className="text-blue-600 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-[300px] md:h-auto">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}