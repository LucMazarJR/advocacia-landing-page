import Image from 'next/image'

export default function Hero() {
    return (
        <section id="inicio" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,var(--color-hero-gradient-secundary),var(--color-hero-gradient-primary))]" />
            <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(184,168,138,0.35),transparent)]" />
            <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
                <div className="space-y-6">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-primary sm:text-xs sm:tracking-[0.4em]">
                        Advocacia estratégica
                    </span>
                    <h1 className="font-cinzel text-3xl leading-tight sm:text-4xl lg:text-5xl">
                        Defendendo seus direitos com excelência
                    </h1>
                    <p className="max-w-xl text-sm text-foreground/70 sm:text-base">
                        Atuação especializada em Direito Sucessório, Imobiliário, de Família e Consultoria Jurídica, oferecendo suporte completo para proteção patrimonial e resolução eficiente de conflitos.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                        <a
                            href="#contato"
                            className="w-full rounded-md bg-header-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-secundary sm:w-auto sm:text-sm items-center flex justify-center"
                        >
                            Quero ser atendido
                        </a>
                        <a
                            href="#especialidades"
                            className="w-full rounded-md border border-header-primary/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-header-primary sm:w-auto sm:text-sm  flex justify-center"
                        >
                            Ver especialidades
                        </a>
                    </div>
                    <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.25em] text-header-primary/70 sm:text-xs sm:tracking-[0.3em]">
                        <span>Atendimento personalizado</span>
                    </div>
                </div>
                <div className="relative mx-auto aspect-square w-full max-w-sm sm:max-w-md lg:max-w-none">
                    <Image
                        alt="luciano-advogado"
                        src="/images/luciano-perfil.jpeg"
                        fill
                        className="rounded-[28px] shadow-[0_30px_60px_rgba(24,25,35,0.15)]"
                    />
                </div>
            </div>
        </section>
    )
}