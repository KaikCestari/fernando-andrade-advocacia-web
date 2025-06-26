
import { Scale, Shield, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 sm:py-20">
      <div className="container-max section-padding">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-slate-900 p-4 rounded-full">
              <Scale className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 animate-fade-in">
            Fernando Andrade
          </h2>
          
          <p className="text-xl sm:text-2xl text-slate-700 mb-8 font-medium">
            Atuação jurídica estratégica com ética, sigilo e excelência.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Shield className="w-8 h-8 text-wine-600 mb-3" />
              <h3 className="font-semibold text-slate-900">Ética Profissional</h3>
              <p className="text-sm text-slate-600 text-center mt-2">
                Conduta íntegra e transparente em todos os casos
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <CheckCircle className="w-8 h-8 text-wine-600 mb-3" />
              <h3 className="font-semibold text-slate-900">Sigilo Garantido</h3>
              <p className="text-sm text-slate-600 text-center mt-2">
                Confidencialidade total das informações dos clientes
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Scale className="w-8 h-8 text-wine-600 mb-3" />
              <h3 className="font-semibold text-slate-900">Excelência Jurídica</h3>
              <p className="text-sm text-slate-600 text-center mt-2">
                Estratégias eficazes para resultados positivos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
