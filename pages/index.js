import Head from "next/head";
import ValuesSection from "../components/ValuesSection/ValuesSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import ReferencesSection from "../components/ReferenceSection/ReferencesSection";
import ContactSection from "../components/ContatctSection/ContactSection";
import { BannerSectionMain } from "../components/Banner/BannerSection";
import AboutCompanySection from "../components/AboutCompanySection/AboutCompanySection";
export default function Home() {
  return (
    <>
      <Head>
        <title>
          Acłdui argentea d propanendo Fastus - Dolor Conferre Posuere Exprimere
        </title>
        <meta
          name="description"
          content="Calumniatores eałest regnante e recompensa o Certabit. Proin Excelsum Moderno Scandalum id coronatum constituere s numerosissime. Tantummodo e regnet israel!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <BannerSectionMain />

      <main style={{ position: "relative", minHeight: "100vh" }}>
        <div className="container">
          <AboutCompanySection />
          <ValuesSection />
          <ServicesSection />
          <ReferencesSection />
          <ContactSection withMap={true} />
        </div>
      </main>
    </>
  );
}
