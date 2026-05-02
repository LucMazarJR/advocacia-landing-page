export default function Hero() {
    return (
        <section id="inicio" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,var(--color-hero-gradient-secundary),var(--color-hero-gradient-primary))]" />
            <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(184,168,138,0.35),transparent)]" />
            <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
                <div className="space-y-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent-primary">
                        Advocacia estrategica
                    </span>
                    <h1 className="font-cinzel text-4xl leading-tight md:text-5xl">
                        Defendendo seus direitos com excelencia e compromisso
                    </h1>
                    <p className="max-w-xl text-base text-foreground/70">
                        Estrutura pronta para voce preencher com a sua narrativa, suas
                        conquistas e o diferencial do escritorio.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#contato"
                            className="rounded-md bg-header-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-secundary"
                        >
                            Quero ser atendido
                        </a>
                        <a
                            href="#especialidades"
                            className="rounded-md border border-header-primary/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-header-primary"
                        >
                            Ver especialidades
                        </a>
                    </div>
                    <div className="flex items-center gap-6 text-xs uppercase tracking-[0.3em] text-header-primary/70">
                        <span>Atendimento personalizado</span>
                        <span>Etica e confianca</span>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -right-10 top-8 h-24 w-24 rounded-full border border-header-primary/15" />
                    <div className="relative aspect-[4/5] w-full rounded-[28px] border border-header-primary/10 bg-white/60 shadow-[0_30px_60px_rgba(24,25,35,0.15)] backdrop-blur">
                        <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.4em] text-header-primary/60">
                            Foto principal
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}