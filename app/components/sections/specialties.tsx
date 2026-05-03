const SPECIALTIES = [
    {
        title: 'Direito Sucessório',
        description: 'Planejamento e resolução de questões envolvendo heranças:',
        items: [
            'Inventários judiciais e extrajudiciais',
            'Planejamento sucessório',
            'Partilha de bens',
            'Regularização de herança',
        ],
    },
    {
        title: 'Direito Imobiliário',
        description: 'Segurança em todas as etapas envolvendo imóveis:',
        items: [
            'Regularização de imóveis',
            'Contratos de compra e venda',
            'Usucapião',
            'Análise documental',
        ],
    },
    {
        title: 'Direito Possessório',
        description: 'Proteção da posse e resolução de conflitos:',
        items: [
            'Reintegração de posse',
            'Manutenção de posse',
            'Defesa em invasões',
        ],
    },
    {
        title: 'Direito de Família',
        description: 'Soluções jurídicas com sensibilidade e segurança:',
        items: [
            'Divórcio',
            'Pensão alimentícia',
            'Guarda de filhos',
            'União estável',
        ],
    },
]

export default function Specialties() {
    return (
        <section id="especialidades" className="bg-background">
            <div className="mx-auto max-w-5xl px-6 py-20">
                <div className="text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent-primary">
                        Áreas de especialização
                    </span>
                    <h2 className="mt-3 font-cinzel text-3xl md:text-4xl">
                        Foco em excelencia nas principais areas do direito
                    </h2>
                    <p className="mx-auto mt-4 text-sm text-foreground/70">
                        Oferecemos soluções jurídicas especializadas e personalizadas para proteger seus direitos e patrimônio em cada etapa da vida.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {SPECIALTIES.map((group) => (
                        <div key={group.title} className="rounded-2xl border border-header-primary/10 bg-white/70 p-6 shadow-[0_20px_40px_rgba(24,25,35,0.08)]">
                            <h3 className="font-cinzel text-2xl text-header-primary">
                                {group.title}
                            </h3>
                            {group.description && (
                                <p className="mt-2 text-sm text-foreground/60 font-light">
                                    {group.description}
                                </p>
                            )}
                            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                                {group.items.map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
