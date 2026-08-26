import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, FileText } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Owner / Company Info */}
        <div className="text-center space-y-2">
          <p className="font-semibold text-lg">
            Drogaria Pioneira de Oswaldo Cruz Ltda.
          </p>
          <p className="text-sm opacity-90">
            CNPJ: 33.308.362/0001-01
          </p>
        </div>

        {/* Contact & Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-3">
            <h3 className="font-semibold text-base flex items-center gap-2 justify-center md:justify-start">
              <Mail className="w-4 h-4" aria-hidden="true" />
              Contato
            </h3>
            <p className="opacity-90">
              <a
                href="mailto:sac.cityfarma.oc@gmail.com"
                className="hover:underline"
                aria-label="Enviar e-mail para sac.cityfarma.oc@gmail.com"
              >
                sac.cityfarma.oc@gmail.com
              </a>
            </p>
            <p className="opacity-90">
              <a
                href="tel:+5521970411688"
                className="hover:underline"
                aria-label="Ligar para (21) 97041-1688"
              >
                (21) 97041-1688
              </a>
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-base flex items-center gap-2 justify-center md:justify-start">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              Endereço
            </h3>
            <address className="not-italic opacity-90">
              Rua Carolina Machado, 1012 - Oswaldo Cruz<br />
              Rio de Janeiro - RJ - CEP: 21351-021
            </address>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-primary-foreground/20 pt-6">
          <h3 className="sr-only">Documentos legais</h3>
          <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm">
            <li>
              <Link
                to="/politica-de-privacidade"
                className="flex items-center gap-2 hover:underline opacity-90 hover:opacity-100"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link
                to="/politica-de-trocas-e-reembolsos"
                className="flex items-center gap-2 hover:underline opacity-90 hover:opacity-100"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                Política de Trocas e Reembolsos
              </Link>
            </li>
            <li>
              <Link
                to="/termos-e-condicoes"
                className="flex items-center gap-2 hover:underline opacity-90 hover:opacity-100"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                Termos e Condições
              </Link>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs opacity-75">
          <p>© {currentYear} CityFarma Oswaldo Cruz. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
