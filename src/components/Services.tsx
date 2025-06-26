
import { FileText, Gavel, Users, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Direito Civil",
      description: "Contratos, família, inventário, indenizações e consultoria jurídica civil.",
      items: ["Contratos em geral", "Direito de Família", "Inventários e Sucessões", "Indenizações", "Responsabilidade Civil"]
    },
    {
      icon: Gavel,
      title: "Direito Criminal",
      description: "Defesa criminal, júri, inquéritos e consultoria jurídica penal.",
      items: ["Defesa Criminal", "Tribunal do Júri", "Inquéritos Policiais", "Habeas Corpus", "Recursos Criminais"]
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white" id="servicos">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experiência sólida em Direito Civil e Criminal, oferecendo soluções jurídicas eficazes para seus casos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="bg-wine-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-wine-600" />
                </div>
                <CardTitle className="text-2xl text-slate-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center justify-center gap-2 text-slate-700">
                      <Shield className="w-4 h-4 text-wine-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
