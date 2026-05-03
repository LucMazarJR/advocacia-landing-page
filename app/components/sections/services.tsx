import { DynamicIcon, type IconName } from 'lucide-react/dynamic';

type ServiceItem = {
    title: string
    icon: IconName
    description: string
}

const SERVICES: ServiceItem[] = [
    {
        title: 'Direito Sucessório',
        icon: 'scroll',
        description:
            'Planejamento e regularização de herança, inventários e partilhas com orientação clara.',
    },
    {
        title: 'Direito Imobiliário',
        icon: 'home',
        description:
            'Análise de contratos, compra e venda, locações e regularização de imóveis.',
    },
    {
        title: 'Direito Possessório',
        icon: 'shield',
        description:
            'Ações de reintegração, manutenção e interdito com foco na segurança da posse.',
    },
    {
        title: 'Direito de Família',
        icon: 'users',
        description:
            'Divórcios, guardas, pensões e acordos familiares com atendimento humanizado.',
    },
    {
        title: 'Consultoria Jurídica',
        icon: 'scale',
        description:
            'Consultoria preventiva, análise de riscos e orientação estratégica recorrente.',
    },
]

export default function Services() {
    return (
        <section id="servicos" className="bg-header-primary text-header-text-primary">
            <div className="mx-auto w-[90%] lg:w-[95%] px-6 py-16 sm:py-20">
                <div className="text-center">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-secundary sm:text-xs sm:tracking-[0.4em]">
                        Serviços
                    </span>
                    <h2 className="mt-3 font-cinzel text-2xl sm:text-3xl md:text-4xl">
                        Principais áreas de atuação
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-xs text-header-text-primary/70 sm:text-sm">
                        Atuação focada em soluções claras e eficientes, com atendimento
                        personalizado em cada especialidade.
                    </p>
                </div>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {SERVICES.map((service) => (
                        <div
                            key={service.title}
                            className="rounded-2xl border border-white/10 bg-header-secundary/60 p-5 shadow-[0_20px_40px_rgba(0,0,0,0.2)] sm:p-6"
                        >
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-xs text-accent-secundary">
                                <DynamicIcon name={service.icon} className="h-5 w-5" />
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
                        className="inline-flex rounded-md border border-white/20 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-secundary sm:text-xs sm:tracking-[0.3em]"
                    >
                        Ver todas as especialidades
                    </a>
                </div>
            </div>
        </section>
    )
}
