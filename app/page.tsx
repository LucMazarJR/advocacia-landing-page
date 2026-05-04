import type { Metadata } from "next";
import About from "./components/sections/about";
import Contact from "./components/sections/contact";
import Hero from "./components/sections/hero";
import Services from "./components/sections/services";
import Specialties from "./components/sections/specialties";

export const metadata: Metadata = {
    title: "Dr. Luciano Mazarão",
    description:
        "Luciano Mazarão Advocacia oferece atendimento em Direito Sucessório, Imobiliário, de Família e Consultoria Jurídica em Franca/SP.",
    keywords: [
        "advogado em Franca",
        "advogado Franca SP",
        "Luciano Mazarão Advocacia",
        "direito sucessório Franca",
        "direito imobiliário Franca",
        "direito de família Franca",
        "consultoria jurídica Franca",
    ],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Dr. Luciano Mazarão | Luciano Mazarão Advocacia",
        description:
            "Atuação em Direito Sucessório, Imobiliário, de Família e Consultoria Jurídica em Franca/SP.",
        url: "/",
        images: [
            {
                url: "/images/luciano-perfil.jpeg",
                alt: "Luciano Mazarão Advocacia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Dr. Luciano Mazarão | Luciano Mazarão Advocacia",
        description:
            "Atuação em Direito Sucessório, Imobiliário, de Família e Consultoria Jurídica em Franca/SP.",
        images: ["/images/luciano-perfil.jpeg"],
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "LegalService",
            "@id": "https://mazaraoadvocacia.com.br/#legal",
            name: "Luciano Mazarão Advocacia",
            url: "https://mazaraoadvocacia.com.br",
            telephone: "+55 16 98202-0132",
            email: "contato@mazaraoadvocacia.com.br",
            areaServed: {
                "@type": "City",
                name: "Franca",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Franca",
                    addressRegion: "SP",
                    addressCountry: "BR",
                },
            },
            serviceType: [
                "Direito Sucessório",
                "Direito Imobiliário",
                "Direito de Família",
                "Consultoria Jurídica",
                "Direito Possessório",
            ],
            founder: {
                "@type": "Person",
                name: "Luciano Neves Mazarão",
                jobTitle: "Advogado",
                identifier: "OAB/SP 412.077; OAB/MG 238.571",
            },
            image: "https://mazaraoadvocacia.com.br/images/luciano-perfil.jpeg",
            logo: "https://mazaraoadvocacia.com.br/logo.png",
        },
        {
            "@type": "WebSite",
            "@id": "https://mazaraoadvocacia.com.br/#website",
            url: "https://mazaraoadvocacia.com.br",
            name: "Luciano Mazarão Advocacia",
            alternateName: "Mazarão Advocacia",
            publisher: { "@id": "https://mazaraoadvocacia.com.br/#legal" },
        },
    ],
};

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            <div>
                <Hero />
                <About />
                <Services />
                <Specialties />
                <Contact />
            </div>
        </>
    );
}
