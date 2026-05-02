export default function Contact() {
    return (
        <section
            id="contato"
            className="relative bg-[linear-gradient(135deg,rgba(230,222,220,0.6),rgba(240,240,245,0.9))]"
        >
            <div className="mx-auto max-w-6xl px-6 py-20">
                <div className="text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent-primary">
                        Contato
                    </span>
                    <h2 className="mt-3 font-cinzel text-3xl md:text-4xl">
                        Entre em contato conosco
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm text-foreground/70">
                        Estrutura pronta para formulario e mapa. Basta conectar o envio e
                        adicionar seu endereco.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
                    <form className="rounded-2xl bg-header-primary p-8 text-header-text-primary shadow-[0_25px_50px_rgba(0,0,0,0.2)]">
                        <div className="grid gap-4">
                            <label className="text-xs uppercase tracking-[0.3em] text-accent-secundary">
                                Nome
                                <input
                                    type="text"
                                    placeholder="Seu nome completo"
                                    className="mt-2 w-full rounded-md border border-white/10 bg-header-secundary/70 px-4 py-3 text-sm text-header-text-primary placeholder:text-header-text-primary/40"
                                />
                            </label>
                            <label className="text-xs uppercase tracking-[0.3em] text-accent-secundary">
                                E-mail
                                <input
                                    type="email"
                                    placeholder="seuemail@dominio.com"
                                    className="mt-2 w-full rounded-md border border-white/10 bg-header-secundary/70 px-4 py-3 text-sm text-header-text-primary placeholder:text-header-text-primary/40"
                                />
                            </label>
                            <label className="text-xs uppercase tracking-[0.3em] text-accent-secundary">
                                Telefone
                                <input
                                    type="tel"
                                    placeholder="(00) 00000-0000"
                                    className="mt-2 w-full rounded-md border border-white/10 bg-header-secundary/70 px-4 py-3 text-sm text-header-text-primary placeholder:text-header-text-primary/40"
                                />
                            </label>
                            <label className="text-xs uppercase tracking-[0.3em] text-accent-secundary">
                                Mensagem
                                <textarea
                                    rows={4}
                                    placeholder="Descreva brevemente sua necessidade"
                                    className="mt-2 w-full rounded-md border border-white/10 bg-header-secundary/70 px-4 py-3 text-sm text-header-text-primary placeholder:text-header-text-primary/40"
                                />
                            </label>
                        </div>
                        <button
                            type="button"
                            className="mt-6 w-full rounded-md bg-accent-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-header-primary"
                        >
                            Enviar mensagem
                        </button>
                    </form>
                    <div className="relative overflow-hidden rounded-2xl border border-header-primary/10 bg-white/70 shadow-[0_25px_50px_rgba(24,25,35,0.12)]">
                        <div className="flex h-full min-h-[320px] w-full items-center justify-center text-xs uppercase tracking-[0.4em] text-header-primary/50">
                            Mapa e localizacao
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
