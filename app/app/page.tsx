import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shield, BookOpen, Wrench } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Shield,
      title: "Inspeções",
      description: "Inspeções técnicas especializadas em conformidade com as normas regulamentadoras."
    },
    {
      icon: BookOpen,
      title: "Treinamentos",
      description: "Capacitação profissional em normas regulamentadoras e segurança do trabalho."
    },
    {
      icon: Wrench,
      title: "Calibração",
      description: "Calibração de instrumentos, válvulas de segurança e manômetros."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-section" 
                style={{
                  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1737853006230-4c6b22418aea?q=80&w=2087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  position: 'relative'
                }}
                 h-[600px] relative flex items-center justify-center text-white mt-16">
  {/* Background Image */}
  <Image
    src="https://images.unsplash.com/photo-1737853006230-4c6b22418aea?q=80&w=2087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Hero Background"
    fill
    className="object-cover object-center"
    priority
  />
  
  {/* Overlay (optional, para escurecer um pouco a imagem) */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Text Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">
      RVK Engenharia
    </h1>
    <p className="text-xl md:text-2xl mb-8">
      Excelência em inspeções, treinamentos e adequações em normas regulamentadoras
    </p>
    <Link 
      href="/contato"
      className="bg-[#4169E1] hover:bg-[#2850c8] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
    >
      Fale Conosco
    </Link>
  </div>
</section>


      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card p-6">
                <service.icon className="w-12 h-12 text-[#4169E1] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-800 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  href="/servicos" 
                  className="inline-flex items-center text-[#4169E1] hover:text-[#2850c8] font-medium"
                >
                  Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">
                Sobre a RVK Engenharia
              </h2>
              <p className="section-text mb-6">
                Somos especialistas em soluções de engenharia, focados em garantir
                a segurança e conformidade dos processos industriais através de
                serviços de alta qualidade e expertise técnica.
              </p>
              <Link 
                href="/sobre"
                className="inline-flex items-center bg-[#4169E1] hover:bg-[#2850c8] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Conheça nossa história <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://tercal.com.br/wp-content/uploads/2020/11/bancada-calibracao-1.jpg"
                alt="Calibração de equipamentos"
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}