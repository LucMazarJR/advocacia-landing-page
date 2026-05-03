import WhatsappButton from '../buttons/whatsaap_button'
import HeaderNav from './header_nav'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="fixed top-0 z-50 flex h-20 w-full items-center justify-between border-b border-white/10 bg-header-primary/95 px-4 backdrop-blur sm:h-24 sm:px-6 md:h-20 lg:h-24 lg:px-8">
            <Link href="/" className="flex items-center gap-3 sm:gap-4">
                <Image
                    src="/logo.png"
                    width={64}
                    height={64}
                    alt="logo-advocacia-mazarao"
                    className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
                />
                <div className="text-accent-secundary">
                    <h1 className="font-cinzel text-xl font-bold sm:text-2xl lg:text-3xl">
                        MAZARÃO
                    </h1>
                    <h2 className="font-inter text-[10px] font-light tracking-[0.18em] sm:text-xs sm:tracking-[0.22em] lg:text-sm">
                        ADVOCACIA & CONSULTORIA JURÍDICA
                    </h2>
                </div>
            </Link>
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-10">
                <HeaderNav />
                <WhatsappButton />
            </div>
        </header>
    )
}
