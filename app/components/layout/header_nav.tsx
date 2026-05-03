import { ReactNode } from 'react'

interface navItem {
    children: ReactNode
    href: string
}

const NAV_ITEMS: navItem[] = [
    { children: 'INÍCIO', href: '/#inicio' },
    { children: 'SOBRE', href: '/#sobre' },
    { children: 'ESPECIALIDADES', href: '/#especialidades' },
    { children: 'SERVIÇOS', href: '/#servicos' },
    { children: 'CONTATO', href: '/#contato' },
]

function NavElement(props: navItem) {
    return (
        <a
            href={props.href}
            className="text-header-text-primary/80 transition hover:text-header-text-primary"
        >
            {props.children}
        </a>
    )
}

export default function HeaderNav() {
    return (
        <nav className="hidden items-center gap-6 text-xs tracking-[0.18em] lg:flex lg:gap-8 lg:text-sm lg:tracking-[0.2em]">
            {NAV_ITEMS.map((item) => (
                <NavElement {...item} key={item.href} />
            ))}
        </nav>
    )
}
