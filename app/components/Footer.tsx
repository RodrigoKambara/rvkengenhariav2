import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RVK Engenharia</h3>
            <p className="text-sm">
              Especialistas em inspeções, treinamentos e adequações em normas regulamentadoras.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone size={16} />
                <span>(18) 99142-7407</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} />
                <span>comercial@rvk.eng.br</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Av. Coronel José Soares Marcondes, Presidente Prudente - SP, 19050-230</span>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos" className="hover:text-[#4169E1] transition-colors">
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link href="/normas" className="hover:text-[#4169E1] transition-colors">
                  Normas Regulamentadoras
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-[#4169E1] transition-colors">
                  Entre em Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} RVK Engenharia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;