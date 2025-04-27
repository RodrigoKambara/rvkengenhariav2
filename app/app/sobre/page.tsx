import Image from 'next/image';

export default function About() {
  const values = [
    {
      title: "Missão",
      description: "Proporcionar soluções em engenharia que garantam a segurança e conformidade dos processos industriais, contribuindo para o desenvolvimento sustentável das empresas."
    },
    {
      title: "Visão",
      description: "Ser referência nacional em serviços de engenharia, reconhecida pela excelência técnica e compromisso com a segurança industrial."
    },
    {
      title: "Valores",
      items: [
        "Excelência técnica",
        "Compromisso com a segurança",
        "Ética e transparência",
        "Inovação contínua",
        "Responsabilidade social"
      ]
    }
  ];

  const expertise = [
    {
      title: "Certificações e Qualificações",
      items: [
        "Profissionais certificados em normas regulamentadoras",
        "Laboratório de calibração especializado",
        "Equipamentos de última geração",
        "Metodologias aprovadas pelos órgãos competentes"
      ]
    },
    {
      title: "Áreas de Atuação",
      items: [
        "Inspeções técnicas especializadas",
        "Treinamentos em normas regulamentadoras",
        "Calibração de instrumentos",
        "Consultoria em segurança do trabalho"
      ]
    }
  ];

  return (
    <div className="pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-16">
          <h1 className="section-title text-4xl mb-8">
            Quem Somos
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-text mb-6">
                A RVK Engenharia é uma empresa especializada em inspeções, treinamentos e adequações em normas regulamentadoras, além de calibração de instrumentos. Nossa missão é garantir a segurança e conformidade dos processos industriais através de serviços técnicos de alta qualidade.
              </p>
              <p className="section-text mb-6">
                Com uma equipe altamente qualificada e anos de experiência no mercado, oferecemos soluções completas para empresas que buscam excelência em segurança do trabalho e conformidade com as normas vigentes.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://montand.com.br/wp-content/uploads/2023/10/EPI-de-seguranca.png"
                alt="Equipe RVK Engenharia"
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="section-title text-center mb-12">
            Nossa Missão, Visão e Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <div key={index} className="service-card p-6">
                <h3 className="text-xl font-bold text-[#4169E1] mb-4">
                  {item.title}
                </h3>
                {item.description ? (
                  <p className="text-gray-800">
                    {item.description}
                  </p>
                ) : (
                  <ul className="text-gray-800 space-y-2">
                    {item.items?.map((value, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-[#4169E1] mr-2">•</span>
                        {value}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title text-center mb-12">
            Nossa Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="service-card p-6">
                <h3 className="text-xl font-bold text-[#4169E1] mb-4">
                  {item.title}
                </h3>
                <ul className="text-gray-800 space-y-2">
                  {item.items.map((exp, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-[#4169E1] mr-2">✓</span>
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}