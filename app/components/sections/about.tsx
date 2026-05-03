import Link from 'next/link'

const HIGHLIGHTS = [
    'Atuação estratégica e ética',
    'Atendimento próximo e humanizado',
    'Proteção patrimonial e prevenção de riscos',
    'Clareza na comunicação e transparência',
]

const PRACTICE_AREAS = [
    'Direito Sucessório',
    'Direito Imobiliário',
    'Direito de Família',
    'Consultoria Jurídica',
]

export default function About() {
    return (
        <section
            id="sobre"
            className="bg-[radial-gradient(900px_600px_at_10%_0%,rgba(184,168,138,0.12),transparent)]"
        >
            <div className="mx-auto max-w-6xl items-center gap-12 px-6 py-16 sm:py-20">
                <div className="space-y-6">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-primary sm:text-xs sm:tracking-[0.4em]">
                        Sobre
                    </span>
                    <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl">
                        Luciano Mazarão Advocacia com atuação sólida e personalizada
                    </h2>
                    <div className="space-y-4 text-sm text-foreground/70 sm:text-base">
                        <p>
                            O escritório Luciano Mazarão Advocacia destaca-se pela atuação estratégica
                            e altamente qualificada na prestação de serviços jurídicos,
                            oferecendo soluções seguras e alinhadas às necessidades de cada
                            cliente.
                        </p>
                        <p>
                            Sob a direção do Dr. Luciano Neves Mazarão, OAB/SP nº 412.077, o
                            escritório atua com foco em inventários, regularização imobiliária,
                            questões familiares e consultoria preventiva.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {PRACTICE_AREAS.map((area) => (
                            <span
                                key={area}
                                className="rounded-full border border-header-primary/10 bg-white/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-header-primary sm:text-xs"
                            >
                                {area}
                            </span>
                        ))}
                    </div>
                    <ul className="grid gap-3 text-xs text-foreground/70 sm:grid-cols-2 sm:text-sm">
                        {HIGHLIGHTS.map((item) => (
                            <li key={item} className="flex gap-2">
                                <span className="mt-1 h-2 w-2 rounded-full bg-accent-primary" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="/sobre"
                        className="inline-flex rounded-md bg-header-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-secundary sm:text-sm"
                    >
                        Conheça o escritório
                    </Link>
                </div>
            </div>
        </section>
    )
}
