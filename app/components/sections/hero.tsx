import Image from 'next/image'

export default function Hero() {
    return (
        <section id="inicio" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,var(--color-hero-gradient-secundary),var(--color-hero-gradient-primary))]" />
            <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(184,168,138,0.35),transparent)]" />
            <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
                <div className="space-y-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent-primary">
                        Advocacia estratégica
                    </span>
                    <h1 className="font-cinzel leading-tight text-5xl">
                        Defendendo seus direitos com excelencia
                    </h1>
                    <p className="max-w-xl text-base text-foreground/70">
                        Atuação especializada em Direito Sucessório, Imobiliário, de Família e Consultoria Jurídica, oferecendo suporte completo para proteção patrimonial e resolução eficiente de conflitos.
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
                    </div>
                </div>
                <div className="aspect-square w-full backdrop-blur bg-none">
                    <Image alt='luciano-advogado' src={"/images/luciano-perfil.jpeg"} fill className='rounded-[28px] shadow-[0_30px_60px_rgba(24,25,35,0.15)]'></Image>
                </div>
            </div>
        </section>
    )
}