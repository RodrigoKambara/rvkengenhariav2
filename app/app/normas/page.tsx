import Image from 'next/image';
import { Shield } from 'lucide-react';

export default function Normas() {
  const normas = [
    {
      id: "nr11",
      title: "NR-11: Transporte, Movimentação, Armazenagem e Manuseio de Materiais",
      description: "Estabelece requisitos de segurança para operações de transporte, movimentação, armazenagem e manuseio de materiais.",
      requirements: [
        "Equipamentos de transporte motorizados com sinalização de advertência",
        "Operadores habilitados com treinamento específico",
        "Inspeções periódicas documentadas",
        "Armazenamento organizado com áreas demarcadas",
        "Sinalização adequada das áreas de movimentação",
        "Uso obrigatório de EPIs específicos"
      ]
    },
    {
      id: "nr12",
      title: "NR-12: Segurança no Trabalho em Máquinas e Equipamentos",
      description: "Visa garantir a proteção, saúde e integridade física dos trabalhadores envolvidos com máquinas e equipamentos industriais.",
      requirements: [
        "Projeto e fabricação seguros com dispositivos de proteção",
        "Instalação e montagem com estabilidade garantida",
        "Proteções coletivas e dispositivos de segurança",
        "Manutenção preventiva e corretiva documentada",
        "Capacitação específica dos operadores",
        "Documentação técnica completa"
      ]
    },
    {
      id: "nr13",
      title: "NR-13: Caldeiras, Vasos de Pressão, Tubulações e Tanques Metálicos",
      description: "Estabelece requisitos mínimos para segurança na operação de caldeiras, vasos de pressão e sistemas pressurizados.",
      requirements: [
        "Inspeções de segurança inicial e periódicas",
        "Documentação técnica e prontuário atualizado",
        "Capacitação específica para operadores",
        "Dispositivos de segurança calibrados",
        "Testes hidrostáticos periódicos",
        "Plano de manutenção documentado"
      ]
    },
    {
      id: "nr18",
      title: "NR-18: Condições e Meio Ambiente de Trabalho na Indústria da Construção",
      description: "Define diretrizes para implementação de medidas de controle e sistemas preventivos de segurança na construção civil.",
      requirements: [
        "Organização adequada do canteiro de obras",
        "PCMAT para obras com 20 ou mais trabalhadores",
        "EPIs e EPCs específicos para construção",
        "Áreas de vivência com condições adequadas",
        "Segurança em operações específicas",
        "Controle de condições ambientais"
      ]
    },
    {
      id: "nr35",
      title: "NR-35: Trabalho em Altura",
      description: "Estabelece requisitos mínimos para trabalhos em altura, garantindo a segurança dos trabalhadores.",
      requirements: [
        "Planejamento prévio de todas atividades",
        "Análise de risco documentada",
        "Permissão de Trabalho para atividades",
        "Capacitação teórica e prática",
        "EPIs específicos para altura",
        "Procedimentos de emergência definidos"
      ]
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Normas Regulamentadoras
        </h1>

        <div className="grid grid-cols-1 gap-8">
          {normas.map((norma) => (
            <div key={norma.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {norma.title}
                </h2>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {norma.description}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Principais Requisitos:
              </h3>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {norma.requirements.map((req, index) => (
                  <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}