
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });
    
    // Limpar formulário
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 sm:py-20 bg-white" id="contato">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Precisa de orientação jurídica? Entre em contato conosco e agende uma consulta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Informações de Contato
            </h3>
            
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
              <div className="bg-wine-600 p-3 rounded-full">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">WhatsApp</p>
                <a href="https://wa.me/5517997125460" className="text-wine-600 hover:text-wine-700">
                  (17) 99712-5460
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
              <div className="bg-wine-600 p-3 rounded-full">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">E-mail</p>
                <a href="mailto:fernandoradv38@gmail.com" className="text-wine-600 hover:text-wine-700">
                  fernandoradv38@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-8 p-6 bg-wine-50 rounded-lg border border-wine-100">
              <h4 className="font-semibold text-slate-900 mb-3">Horário de Atendimento</h4>
              <div className="space-y-2 text-slate-700">
                <p>Segunda a Sexta: 8h00 às 18h00</p>
                <p>Sábado: 8h00 às 12h00</p>
                <p className="text-sm text-slate-600 mt-3">
                  *Atendimento de urgência via WhatsApp disponível 24h
                </p>
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900">Envie sua mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-slate-300 focus:border-wine-600"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Seu e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-slate-300 focus:border-wine-600"
                  />
                </div>
                
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Seu telefone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-slate-300 focus:border-wine-600"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Descreva brevemente seu caso ou dúvida"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="border-slate-300 focus:border-wine-600"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-wine-600 hover:bg-wine-700 text-white font-medium py-3"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
