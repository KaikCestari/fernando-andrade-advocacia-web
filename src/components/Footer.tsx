
import { Scale, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Scale className="w-8 h-8 text-wine-400" />
              <div>
                <h3 className="text-xl font-bold">Fernando Andrade</h3>
                <p className="text-slate-300 text-sm">Advogado Civil e Criminal</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Atuação jurídica estratégica com ética, sigilo e excelência. 
              Especialista em Direito Civil e Criminal com foco em resultados eficazes.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Áreas de Atuação</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Direito Civil</li>
              <li>Direito Criminal</li>
              <li>Direito de Família</li>
              <li>Contratos</li>
              <li>Inventários</li>
              <li>Defesa Criminal</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5517997125460" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">(17) 99712-5460</span>
              </a>
              <a 
                href="mailto:fernandoradv38@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">fernandoradv38@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center sm:text-left">
              © 2024 Fernando Andrade - Advogado. Todos os direitos reservados.
            </p>
            <p className="text-slate-500 text-xs text-center sm:text-right">
              OAB/SP - Advocacia Civil e Criminal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
