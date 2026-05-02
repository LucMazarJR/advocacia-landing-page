import { ReactNode } from 'react'

interface navItem {
    children: ReactNode
    href: string
}

const NAV_ITEMS: navItem[] = [
    { children: 'INICIO', href: '#inicio' },
    { children: 'SOBRE', href: '#sobre' },
    { children: 'ESPECIALIDADES', href: '#especialidades' },
    { children: 'SERVICOS', href: '#servicos' },
    { children: 'CONTATO', href: '#contato' },
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
        <nav className="flex gap-8 text-sm tracking-[0.2em]">
            {NAV_ITEMS.map((item) => (
                <NavElement {...item} key={item.href} />
            ))}
        </nav>
    )
}
