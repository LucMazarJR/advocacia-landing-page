import { ReactNode } from 'react'

interface navItem {
    children: ReactNode
    href: string
}

const NAV_ITEMS: navItem[] = [
    { children: 'INICIO', href: '1' },
    { children: 'SOBRE', href: '2' },
    { children: 'ESPECIALIDADES', href: '3' },
    { children: 'SERVIÇOS', href: '4' },
    { children: 'CONTATO', href: '5' },
]

function NavElement(props: navItem) {
    return (
        <a href={props.href} className="text-header-text-primary">
            {props.children}
        </a>
    )
}

export default function HeaderNav() {
    return (
        <nav className="flex gap-8">
            {NAV_ITEMS.map((item) => (
                <NavElement {...item} key={item.href} />
            ))}
        </nav>
    )
}
