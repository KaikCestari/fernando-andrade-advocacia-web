
import { User, Award, BookOpen, Scale } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  return (
    <section className="py-16 sm:py-20 bg-white" id="sobre">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Foto e informações pessoais */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <AspectRatio ratio={3/4} className="w-80 mx-auto">
                <img 
                  src="fernando.jpg" 
                  alt="Fernando Andrade - Advogado" 
                  className="w-full h-full object-cover object-center rounded-lg shadow-lg"
                  onError={(e) => {
                    console.log('Erro ao carregar imagem:', e);
                    console.log('Tentando carregar imagem do caminho:', e.target.src);
                  }}
                  onLoad={() => {
                    console.log('Imagem carregada com sucesso');
                  }}
                />
              </AspectRatio>
              <div className="absolute -bottom-4 -right-4 bg-wine-600 p-3 rounded-full">
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Conteúdo sobre */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Sobre Mim
              </h2>
              <div className="w-20 h-1 bg-wine-600 mb-6"></div>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed">
              Com anos de experiência na advocacia, dedico-me integralmente à defesa dos direitos de meus clientes, 
              atuando com ética, transparência e comprometimento em cada caso.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Especializado em <strong>Direito Civil</strong> e <strong>Direito Criminal</strong>, 
              ofereço assessoria jurídica completa, desde consultorias até representação em tribunais. 
              Minha abordagem é sempre personalizada, buscando entender as necessidades específicas de cada cliente 
              para oferecer as melhores soluções jurídicas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <div className="bg-wine-100 p-2 rounded-lg">
                  <User className="w-5 h-5 text-wine-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Atendimento Personalizado</h4>
                  <p className="text-sm text-slate-600">Cada caso é único e merece atenção dedicada</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-wine-100 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-wine-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Experiência Comprovada</h4>
                  <p className="text-sm text-slate-600">Anos de atuação em Direito Civil e Criminal</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-wine-100 p-2 rounded-lg">
                  <BookOpen className="w-5 h-5 text-wine-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Atualização Constante</h4>
                  <p className="text-sm text-slate-600">Sempre em dia com as mudanças legislativas</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-wine-100 p-2 rounded-lg">
                  <Scale className="w-5 h-5 text-wine-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Ética Profissional</h4>
                  <p className="text-sm text-slate-600">Conduta íntegra e transparente</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg mt-8">
              <p className="text-slate-700 italic text-center">
                "Meu compromisso é oferecer um serviço jurídico de excelência, 
                sempre priorizando os interesses e a tranquilidade de meus clientes."
              </p>
              <p className="text-slate-900 font-semibold text-center mt-3">- Fernando Andrade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
