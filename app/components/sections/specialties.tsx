const SPECIALTIES = [
    {
        title: 'Direito Civil',
        items: [
            'Divorcios e partilhas de bens',
            'Acoes de danos morais e materiais',
            'Contratos e obrigacoes',
            'Inventarios e planejamento patrimonial',
        ],
    },
    {
        title: 'Direito Trabalhista',
        items: [
            'Reclamacoes trabalhistas',
            'Rescisoes e verbas rescisorias',
            'Horas extras e adicionais',
            'Acordos entre empregado e empregador',
        ],
    },
    {
        title: 'Direito Penal',
        items: [
            'Defesa em inqueritos e processos',
            'Atuacao em crimes financeiros',
            'Medidas cautelares e recursos',
            'Habeas corpus preventivo',
        ],
    },
    {
        title: 'Direito Empresarial',
        items: [
            'Assessoria em contratos e societario',
            'Recuperacao de credito e cobrancas',
            'Litigios empresariais',
            'Negociacao e compliance',
        ],
    },
]

export default function Specialties() {
    return (
        <section id="especialidades" className="bg-background">
            <div className="mx-auto max-w-6xl px-6 py-20">
                <div className="text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent-primary">
                        Areas de especializacao
                    </span>
                    <h2 className="mt-3 font-cinzel text-3xl md:text-4xl">
                        Foco em excelencia nas principais areas do direito
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm text-foreground/70">
                        Use este bloco para detalhar o escopo de atendimento e o perfil dos
                        casos que voce acompanha.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {SPECIALTIES.map((group) => (
                        <div key={group.title} className="rounded-2xl border border-header-primary/10 bg-white/70 p-6 shadow-[0_20px_40px_rgba(24,25,35,0.08)]">
                            <h3 className="font-cinzel text-xl text-header-primary">
                                {group.title}
                            </h3>
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
