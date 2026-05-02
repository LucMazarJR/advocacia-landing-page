const HIGHLIGHTS = [
    'Mais de 10 anos de atuacao juridica',
    'Atendimento personalizado e dedicado',
    'Etica e comprometimento com cada cliente',
    'Resultados consistentes em casos estrategicos',
]

export default function About() {
    return (
        <section
            id="sobre"
            className="relative bg-[radial-gradient(900px_600px_at_10%_0%,rgba(184,168,138,0.12),transparent)]"
        >
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr]">
                <div className="relative">
                    <div className="absolute -left-6 top-10 h-20 w-20 rounded-full border border-header-primary/10" />
                    <div className="relative aspect-[4/5] w-full rounded-[24px] border border-header-primary/10 bg-white/70 shadow-[0_25px_50px_rgba(24,25,35,0.12)]">
                        <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.4em] text-header-primary/50">
                            Foto de perfil
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent-primary">
                        Sobre
                    </span>
                    <h2 className="font-cinzel text-3xl md:text-4xl">
                        Seu nome completo advogado experiente e respeitavel
                    </h2>
                    <p className="text-base text-foreground/70">
                        Use este bloco para contar sua historia, filosofia de trabalho e o
                        tipo de suporte que oferece aos clientes.
                    </p>
                    <ul className="grid gap-3 text-sm text-foreground/70 sm:grid-cols-2">
                        {HIGHLIGHTS.map((item) => (
                            <li key={item} className="flex gap-2">
                                <span className="mt-1 h-2 w-2 rounded-full bg-accent-primary" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="#contato"
                        className="inline-flex rounded-md bg-header-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-secundary"
                    >
                        Conheca minha historia
                    </a>
                </div>
            </div>
        </section>
    )
}
