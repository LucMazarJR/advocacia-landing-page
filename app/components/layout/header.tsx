import WhatsappButton from '../buttons/whatsaap_button'
import HeaderNav from './header_nav'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-header-primary/95 fixed top-0 z-50 flex h-24 w-full items-center justify-between border-b border-white/10 px-8 backdrop-blur">
            <Link href="/" className="flex items-center gap-4">
                <Image src="/logo.png" width={70} height={70} alt="logo-advocacia-mazarao" />
                <div className="text-accent-secundary">
                    <h1 className="font-cinzel text-3xl font-bold">MAZARÃO</h1>
                    <h2 className="font-inter text-sm font-light tracking-widest">
                        ADVOCACIA & CONSULTORIA JURIDICA
                    </h2>
                </div>
            </Link>
            <div className="flex items-center gap-12">
                <HeaderNav />
                <WhatsappButton />
            </div>
        </header>
    )
}
