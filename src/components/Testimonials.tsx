
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria S.",
      location: "Ribeirão Preto, SP",
      text: "O Dr. Fernando foi essencial na resolução do meu processo. Profissional sério, atencioso e extremamente competente."
    },
    {
      name: "Paulo C.",
      location: "São José do Rio Preto, SP",
      text: "Tive um problema criminal delicado e o Dr. Fernando cuidou de tudo com sigilo e firmeza. Recomendo de olhos fechados."
    },
    {
      name: "Renata A.",
      location: "Barretos, SP",
      text: "Me orientou em um caso civil com rapidez e clareza. Excelente advogado, muito confiável."
    },
    {
      name: "João V.",
      location: "Catanduva, SP",
      text: "Muito experiente e acessível. Resolveu meu caso com muita dedicação. Atendimento nota 10!"
    },
    {
      name: "Ana Paula M.",
      location: "Mirassol, SP",
      text: "Competente e honesto. Foi o único advogado que realmente me explicou o que estava acontecendo no meu processo."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50" id="depoimentos">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Confiança construída através de resultados e atendimento de excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Quote className="w-8 h-8 text-wine-600 opacity-50" />
                </div>
                
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-700 text-center mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="text-center">
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
