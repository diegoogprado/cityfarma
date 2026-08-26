import Seo from "@/components/Seo";
import { ArrowLeft, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const TermsConditions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-subtle">
      <Seo title="Termos e Condições | CityFarma Oswaldo Cruz" description="Termos e condições de uso do site e dos serviços da CityFarma Oswaldo Cruz." path="/termos-e-condicoes" />
      <main className="flex-1 w-full max-w-4xl mx-auto p-4 md:p-8 lg:p-12">
        <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
          <div className="p-6 md:p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-8 h-8 text-primary" aria-hidden="true" />
              <h1 className="text-2xl md:text-3xl font-bold text-primary">
                Termos e Condições
              </h1>
            </div>

            <div className="prose prose-sm md:prose-base text-foreground max-w-none space-y-4">
              <p>
                Estes Termos e Condições regulam o uso do site e dos serviços oferecidos pela{" "}
                <strong>CityFarma Oswaldo Cruz</strong>, Drogaria Pioneira de Oswaldo Cruz Ltda. (CNPJ: 33.308.362/0001-01),
                localizada na Rua Carolina Machado, 1012 - Oswaldo Cruz, Rio de Janeiro - RJ, CEP: 21351-021.
              </p>

              <h2 className="text-lg font-semibold text-primary mt-6">1. Aceitação dos termos</h2>
              <p>
                Ao acessar e utilizar este site, o usuário concorda com os termos aqui descritos. Caso não concorde,
                recomendamos que não utilize os nossos serviços.
              </p>

              <h2 className="text-lg font-semibold text-primary mt-6">2. Serviços oferecidos</h2>
              <p>
                A CityFarma Oswaldo Cruz oferece atendimento e informações sobre medicamentos, produtos de higiene,
                beleza e cuidados pessoais. Os preços e disponibilidade dos produtos podem ser consultados pelo WhatsApp
                ou presencialmente na loja.
              </p>

              <h2 className="text-lg font-semibold text-primary mt-6">3. Responsabilidades do usuário</h2>
              <p>
                O usuário se compromete a fornecer informações verdadeiras, manter a confidencialidade dos dados de acesso
                (quando aplicável) e utilizar o site de forma lícita. É responsabilidade do usuário verificar a prescrição
                médica antes da compra de medicamentos controlados.
              </p>

              <h2 className="text-lg font-semibold text-primary mt-6">4. Prescrição médica</h2>
              <p>
                Medicamentos de venda sob prescrição médica somente serão dispensados mediante apresentação de receita
                válida. A farmácia segue rigorosamente as normas da Vigilância Sanitária e da legislação brasileira.
              </p>

              <h2 className="text-lg font-semibold text-primary mt-6">5. Preços e pagamentos</h2>
              <p>
                Os preços informados no site ou via WhatsApp estão sujeitos a alteração sem aviso prévio. O pagamento
                deve ser realizado conforme as condições acordadas no momento da compra. A confirmação do pedido está
                sujeita à disponibilidade de estoque.
              </p>

              <h2 className="text-lg font-semibold text-primary mt-6">6. Entrega</h2>
              <p>
                As entregas são realizadas em áreas atendidas pela farmácia. O prazo e a taxa de entrega podem variar
                conforme a localidade e serão informados no momento do atendimento. A responsabilidade pelo produto é do
                cliente após o recebimento.
              </p>

              <h2 className="text-lg font-semibold text-primary mt-6">7. Propriedade intelectual</h2>
              <p>
                Todo o conteúdo do site, incluindo textos, imagens, logotipos e marcas, é de propriedade da CityFarma
                Oswaldo Cruz ou de seus licenciadores. É proibida a reprodução, distribuição ou modificação sem autorização prévia.
              </p>

              <h2 className="text-lg font-semibold text-primary mt-6">8. Alterações dos termos</h2>
              <p>
                A CityFarma Oswaldo Cruz pode atualizar estes Termos e Condições a qualquer momento. Recomendamos que
                o usuário consulte esta página periodicamente.
              </p>

              <h2 className="text-lg font-semibold text-primary mt-6">9. Contato</h2>
              <p>
                Para qualquer dúvida sobre estes termos, entre em contato pelo e-mail{" "}
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

export default TermsConditions;
