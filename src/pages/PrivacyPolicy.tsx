import Seo from "@/components/Seo";
import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-subtle">
      <Seo title="Política de Privacidade | CityFarma Oswaldo Cruz" description="Saiba como a CityFarma Oswaldo Cruz coleta, usa e protege seus dados pessoais conforme a LGPD." path="/politica-de-privacidade" />
      <main className="flex-1 w-full max-w-4xl mx-auto p-4 md:p-8 lg:p-12">
        <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
          <div className="p-6 md:p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-primary" aria-hidden="true" />
              <h1 className="text-2xl md:text-3xl font-bold text-primary">
                Política de Privacidade
              </h1>
            </div>

            <div className="prose prose-sm md:prose-base text-foreground max-w-none space-y-4">
              <p>
                A <strong>CityFarma Oswaldo Cruz</strong>, Drogaria Pioneira de Oswaldo Cruz Ltda. (CNPJ: 33.308.362/0001-01),
                valoriza a privacidade dos seus usuários e está comprometida em proteger as informações pessoais que são
                coletadas durante a navegação e o uso dos nossos serviços.
              </p>

              <h2 className="text-lg font-semibold text-primary mt-6">1. Informações coletadas</h2>
              <p>
                Coletamos informações fornecidas voluntariamente pelo usuário, como nome, telefone, e-mail e endereço,
                quando do preenchimento de formulários ou atendimento via WhatsApp. Também podemos coletar dados técnicos,
                como endereço IP, tipo de navegador e páginas visitadas, para fins de melhoria da experiência.
              </p>

              <h2 className="text-lg font-semibold text-primary mt-6">2. Uso das informações</h2>
              <p>
                As informações são utilizadas para prestar atendimento, responder dúvidas, processar pedidos, enviar
                comunicações e melhorar os nossos serviços. Não compartilhamos dados pessoais com terceiros, exceto quando
                necessário para cumprimento de obrigações legais ou com o consentimento do titular.
              </p>

              <h2 className="text-lg font-semibold text-primary mt-6">3. Cookies e tecnologias de rastreamento</h2>
              <p>
                Utilizamos cookies e ferramentas de análise (como Google Analytics) para entender como os usuários
                interagem com o site. O usuário pode desativar cookies nas configurações do seu navegador.
              </p>

              <h2 className="text-lg font-semibold text-primary mt-6">4. Segurança</h2>
              <p>
                Adotamos medidas técnicas e administrativas para proteger os dados contra acesso não autorizado, perda,
                alteração ou vazamento. No entanto, nenhum sistema é totalmente seguro, e não podemos garantir segurança absoluta.
              </p>

              <h2 className="text-lg font-semibold text-primary mt-6">5. Direitos do titular</h2>
              <p>
                O usuário pode solicitar acesso, correção, exclusão ou portabilidade dos seus dados pessoais, bem como
                revogar consentimentos, entrando em contato pelo e-mail{" "}
                <a href="mailto:sac.cityfarma.oc@gmail.com" className="text-primary hover:underline">
                  sac.cityfarma.oc@gmail.com
                </a>.
              </p>

              <h2 className="text-lg font-semibold text-primary mt-6">6. Contato</h2>
              <p>
                Em caso de dúvidas sobre esta política, entre em contato conosco pelo e-mail{" "}
                <a href="mailto:sac.cityfarma.oc@gmail.com" className="text-primary hover:underline">
                  sac.cityfarma.oc@gmail.com
                </a>{" "}
                ou pelo telefone{" "}
                <a href="tel:+5521970411688" className="text-primary hover:underline">
                  (21) 97041-1688
                </a>.
              </p>
            </div>

            <div className="mt-10">
              <Link to="/">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  Voltar para a página inicial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
