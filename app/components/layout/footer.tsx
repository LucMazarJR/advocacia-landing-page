import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="mt-20 bg-header-primary text-header-text-primary">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 text-center sm:py-14 sm:text-left md:grid-cols-4">
                <div className="space-y-4">
                    <h3 className="font-cinzel text-lg text-accent-secundary">LUCIANO MAZARÃO</h3>
                    <p className="text-sm text-header-text-primary/70">
                        Atuação estratégica em Direito Sucessório, Imobiliário e de Família,
                        com consultoria preventiva e atendimento dedicado.
                    </p>
                </div>
                <div className="space-y-3 text-sm">
                    <p className="font-semibold tracking-[0.2em] text-accent-secundary">INÍCIO</p>
                    <a className="block text-header-text-primary/70" href="#inicio">
                        Início
                    </a>
                    <a className="block text-header-text-primary/70" href="#sobre">
                        Sobre
                    </a>
                    <a className="block text-header-text-primary/70" href="#especialidades">
                        Especialidades
                    </a>
                    <a className="block text-header-text-primary/70" href="#contato">
                        Contato
                    </a>
                </div>
                <div className="space-y-3 text-sm">
                    <p className="font-semibold tracking-[0.2em] text-accent-secundary">ATENDIMENTO</p>
                    <p className="text-header-text-primary/70">Seg. a Sex.: 08:00 - 17:00</p>
                    <p className="text-header-text-primary/70">Franca/SP</p>
                </div>
                <div className="space-y-3 text-sm">
                    <p className="font-semibold tracking-[0.2em] text-accent-secundary">CONTATO</p>
                    <p className="text-header-text-primary/70">(16) 98202-0132</p>
                    <p className="text-header-text-primary/70">mazarao@uol.com.br</p>
                    <div className="flex justify-center gap-3 pt-2 sm:justify-start">
                        <a
                            className="relative flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-header-secundary text-accent-primary transition hover:border-accent-secundary/50 hover:bg-header-secundary/90"
                            href="https://www.facebook.com/lucianomazaraoadvogado/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                src="/icons/facebook.svg"
                                alt="Facebook"
                                fill
                                className="p-2 object-contain brightness-0 invert opacity-80"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10 py-6 text-center text-xs text-header-text-primary/60">
                Copyright 2026. Todos os direitos reservados.
            </div>
        </footer>
    )
}
