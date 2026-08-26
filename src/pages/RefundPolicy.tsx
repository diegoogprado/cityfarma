import Seo from "@/components/Seo";
import { ArrowLeft, RefreshCcw } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-subtle">
      <Seo title="Política de Trocas e Reembolsos | CityFarma Oswaldo Cruz" description="Regras de trocas, devoluções e reembolsos de produtos da CityFarma Oswaldo Cruz." path="/politica-de-trocas-e-reembolsos" />
      <main className="flex-1 w-full max-w-4xl mx-auto p-4 md:p-8 lg:p-12">
        <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
          <div className="p-6 md:p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <RefreshCcw className="w-8 h-8 text-primary" aria-hidden="true" />
              <h1 className="text-2xl md:text-3xl font-bold text-primary">
                Política de Trocas e Reembolsos
              </h1>
            </div>

            <div className="prose prose-sm md:prose-base text-foreground max-w-none space-y-4">
              <p>
                A <strong>CityFarma Oswaldo Cruz</strong>, Drogaria Pioneira de Oswaldo Cruz Ltda. (CNPJ: 33.308.362/0001-01),
                estabelece esta política para garantir a satisfação dos clientes e orientar os procedimentos de trocas
                e reembolsos de produtos adquiridos em nossa farmácia.
              </p>

              <h2 className="text-lg font-semibold text-primary mt-6">1. Medicamentos e produtos de saúde</h2>
              <p>
                Por questões de segurança e higiene, medicamentos, produtos de perfumaria e itens de cuidado pessoal
                somente poderão ser trocados caso apresentem defeito, vício ou avaria comprovada no ato da entrega.
                Produtos intocados, lacrados e dentro da validade podem ser considerados para troca em até 7 (sete) dias
                corridos após a compra, mediante apresentação de nota fiscal.
              </p>

              <h2 className="text-lg font-semibold text-primary mt-6">2. Produtos com validade vencida ou embalagem avariada</h2>
              <p>
                Se o produto recebido estiver com a validade vencida ou com a embalagem avariada, o cliente deve
                comunicar a farmácia em até 24 (vinte e quatro) horas após o recebimento. A CityFarma realizará a troca
                pelo mesmo produto ou, quando não for possível, o reembolso correspondente.
              </p>

              <h2 className="text-lg font-semibold text-primary mt-6">3. Reembolsos</h2>
              <p>
                O reembolso será realizado na mesma forma de pagamento utilizada na compra. Em caso de pagamento via PIX
                ou transferência bancária, o prazo para estorno é de até 5 (cinco) dias úteis após a confirmação da
                solicitação. Para cartões de crédito, o prazo de estorno pode variar conforme a administradora do cartão.
              </p>

              <h2 className="text-lg font-semibold text-primary mt-6">4. Procedimento para troca</h2>
              <p>
                Para solicitar uma troca, o cliente deve entrar em contato pelo WhatsApp{" "}
                <a href="https://wa.me/5521970411688" className="text-primary hover:underline">
                  (21) 97041-1688
                </a>{" "}
                ou pelo e-mail{" "}
                <a href="mailto:sac.cityfarma.oc@gmail.com" className="text-primary hover:underline">
                  sac.cityfarma.oc@gmail.com
                </a>
                , informando o número do pedido, descrição do problema e, se possível, fotos do produto.
              </p>

              <h2 className="text-lg font-semibold text-primary mt-6">5. Exceções</h2>
              <p>
                Não serão aceitas trocas ou reembolsos de produtos abertos, utilizados, sem a embalagem original ou com
                avarias causadas pelo cliente. Produtos em promoção ou com desconto podem ter condições específicas,
                informadas no momento da compra.
              </p>

              <h2 className="text-lg font-semibold text-primary mt-6">6. Contato</h2>
              <p>
                Dúvidas sobre trocas e reembolsos podem ser esclarecidas pelo telefone{" "}
                <a href="tel:+5521970411688" className="text-primary hover:underline">
                  (21) 97041-1688
                </a>{" "}
                ou pelo e-mail{" "}
                <a href="mailto:sac.cityfarma.oc@gmail.com" className="text-primary hover:underline">
                  sac.cityfarma.oc@gmail.com
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

export default RefundPolicy;
