import ValuesGrid from "../components/about/ValuesGrid";
import StatsStrip from "../components/about/StatsStrip";
import AboutHero from "../components/about/AboutHero";
import BrandStory from "../components/about/BrandStory";
import ServiceCoverage from "../components/about/ServiceCoverage";

export default function About() {
  return (
    <main className="bg-white">
      <AboutHero />
      <BrandStory />
      <ValuesGrid />
      <StatsStrip />
      <ServiceCoverage />
      {/* JSON-LD (ok in body; no Helmet needed) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HVACBusiness",
            name: "AB Malonda Airconditioning Co.",
            description:
              "Aircon installation, cleaning, preventive maintenance, and repair in Metro Manila.",
            areaServed: "Metro Manila",
            telephone: "+63 905 493 1351",
            url: "https://abmalonda.example.com/",
            sameAs: ["https://www.facebook.com/abmalonda.ac/"],
            serviceType: [
              "Aircon installation",
              "Aircon cleaning",
              "Aircon repair",
              "Preventive maintenance",
            ],
          }),
        }}
      />
    </main>
  );
}
