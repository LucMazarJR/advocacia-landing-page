import Link from 'next/link'

const PARAGRAPHS = [
    'O escritório MAZARÃO ADVOCACIA destaca-se pela atuação estratégica, ética e altamente qualificada na prestação de serviços jurídicos, oferecendo soluções seguras, personalizadas e alinhadas às necessidades de cada cliente.',
    'Sob a direção do Dr. Luciano Neves Mazarão, advogado inscrito na OAB/SP nº 412.077, o escritório possui sólida atuação nas áreas de Direito Sucessório, Direito Imobiliário e Direito de Família, além de consultoria jurídica especializada, com foco na prevenção de riscos e na proteção patrimonial.',
    'Dentre suas principais frentes de atuação, destacam-se a condução de inventários judiciais e extrajudiciais, planejamento sucessório, regularização de imóveis, demandas possessórias e questões familiares, sempre com abordagem técnica apurada e comprometida com a eficiência e segurança jurídica.',
    'O escritório MAZARÃO ADVOCACIA adota uma metodologia baseada na análise criteriosa e individualizada de cada caso, buscando não apenas a resolução eficaz de conflitos, mas também a estruturação jurídica preventiva, evitando litígios e assegurando estabilidade às relações jurídicas e patrimoniais de seus clientes.',
    'Com atendimento próximo e humanizado, o escritório preza pela clareza na comunicação e pela condução responsável de cada demanda, garantindo confiança, transparência e excelência em todas as etapas.',
    'Seja para organização patrimonial, regularização imobiliária, questões familiares ou consultoria jurídica, o escritório MAZARÃO ADVOCACIA está preparado para oferecer suporte jurídico de alto nível, com comprometimento, discrição e resultados consistentes.',
]

const PRACTICE_AREAS = [
    'Direito Sucessório',
    'Direito Imobiliário',
    'Direito de Família',
    'Consultoria Jurídica',
]

const FRONTS = [
    'Inventários judiciais e extrajudiciais',
    'Planejamento sucessório',
    'Regularização de imóveis',
    'Demandas possessórias',
    'Questões familiares',
]

export default function About() {
    return (
        <section className="bg-[radial-gradient(1000px_700px_at_0%_0%,rgba(184,168,138,0.16),transparent)]">
            <div className="mx-auto max-w-6xl px-6 py-20">
                <header className="max-w-3xl">
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent-primary">
                        Sobre o escritorio
                    </span>
                    <h1 className="mt-4 font-cinzel text-4xl text-header-primary md:text-5xl">
                        Mazarão Advocacia
                    </h1>
                    <p className="mt-4 text-base text-foreground/70">
                        Atuacao estrategica e personalizada para proteger direitos e
                        patrimônios com segurança e clareza.
                    </p>
                </header>

                <div className="mt-12 grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
                    <div className="space-y-6 text-base text-foreground/80">
                        {PARAGRAPHS.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                    <aside className="space-y-6">
                        <div className="rounded-2xl border border-header-primary/10 bg-white/80 p-6 shadow-[0_20px_40px_rgba(24,25,35,0.1)]">
                            <h2 className="font-cinzel text-xl text-header-primary">
                                Areas de atuacao
                            </h2>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {PRACTICE_AREAS.map((area) => (
                                    <span
                                        key={area}
                                        className="rounded-full border border-header-primary/10 bg-header-primary/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-header-primary"
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-2xl border border-header-primary/10 bg-white/80 p-6 shadow-[0_20px_40px_rgba(24,25,35,0.1)]">
                            <h2 className="font-cinzel text-xl text-header-primary">
                                Frentes principais
                            </h2>
                            <ul className="mt-4 space-y-3 text-sm text-foreground/70">
                                {FRONTS.map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-header-primary/10 bg-header-primary/95 p-6 text-header-text-primary shadow-[0_20px_40px_rgba(24,25,35,0.18)]">
                            <h2 className="font-cinzel text-xl">Atendimento humanizado</h2>
                            <p className="mt-3 text-sm text-header-text-primary/80">
                                Comunicacao clara, acompanhamento responsavel e foco em
                                solucoes seguras para cada etapa da jornada.
                            </p>
                        </div>
                    </aside>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-4">
                    <Link
                        href="/#contato"
                        className="inline-flex rounded-md bg-header-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-secundary"
                    >
                        Agendar atendimento
                    </Link>
                    <span className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                        Respostas rapidas e atendimento personalizado
                    </span>
                </div>
            </div>
        </section>
    )
}