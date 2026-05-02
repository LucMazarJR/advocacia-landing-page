const SERVICES = [
    {
        title: 'Direito Civil',
        description:
            'Atuacao em familia, contratos, responsabilidade civil e solucoes preventivas.',
    },
    {
        title: 'Direito Trabalhista',
        description:
            'Defesa estrategica para trabalhadores e empresas em demandas trabalhistas.',
    },
    {
        title: 'Direito Penal',
        description:
            'Atendimento em processos criminais, inqueritos e medidas urgentes.',
    },
    {
        title: 'Direito Empresarial',
        description:
            'Apoio juridico a empresas, contratos societarios e recuperacao de credito.',
    },
]

export default function Services() {
    return (
        <section id="servicos" className="bg-header-primary text-header-text-primary">
            <div className="mx-auto max-w-6xl px-6 py-20">
                <div className="text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent-secundary">
                        Servicos
                    </span>
                    <h2 className="mt-3 font-cinzel text-3xl md:text-4xl">
                        Principais areas de atuacao
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm text-header-text-primary/70">
                        Estrutura de cards pronta para voce inserir descricoes completas e
                        diferenciar cada especialidade.
                    </p>
                </div>
                <div className="mt-12 grid gap-6 md:grid-cols-4">
                    {SERVICES.map((service) => (
                        <div
                            key={service.title}
                            className="rounded-2xl border border-white/10 bg-header-secundary/60 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                        >
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-xs text-accent-secundary">
                                Icone
                            </div>
                            <h3 className="font-cinzel text-lg">{service.title}</h3>
                            <p className="mt-3 text-sm text-header-text-primary/70">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <a
                        href="#especialidades"
                        className="inline-flex rounded-md border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent-secundary"
                    >
                        Ver todas as especialidades
                    </a>
                </div>
            </div>
        </section>
    )
}
