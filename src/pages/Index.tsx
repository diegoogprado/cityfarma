import Seo from "@/components/Seo";
import PharmacyHero from "@/components/PharmacyHero";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col">
      <Seo title="Cityfarma Oswaldo Cruz | Perfumaria, Dermocosméticos e Bem-estar" description="Na Cityfarma Oswaldo Cruz você encontra produtos de higiene, beleza, perfumaria, dermocosméticos e cuidados pessoais. Atendimento presencial e dúvidas via WhatsApp." path="/" />
      <PharmacyHero />
      <Footer />
    </div>
  );
};

export default Index;
