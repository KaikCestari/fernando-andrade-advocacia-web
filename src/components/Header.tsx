
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-slate-900 text-white py-4 sticky top-0 z-50 shadow-lg">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-2xl font-bold">Fernando Andrade</h1>
            <p className="text-sm text-slate-300">Advogado Civil e Criminal</p>
          </div>
          <Button 
            asChild
            className="bg-wine-600 hover:bg-wine-700 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-300"
          >
            <a 
              href="https://wa.me/5517997125460" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle size={18} />
              <span className="hidden sm:inline">Fale agora pelo WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
