import WhatsappButton from '../buttons/whatsaap_button'
import HeaderNav from './header_nav'
import Image from 'next/image'

export default function Header() {
    return (
        <header className="bg-header-primary fixed top-0 flex w-full items-center justify-between p-5 px-8 h-24">
            <div className="flex gap-4 items-center">
                <Image src={"/logo.png"} width={70} height={70} alt='logo-advocacia-mazarao'></Image>
                <div className='text-accent-secundary'>
                    <h1 className='font-cinzel text-3xl font-bold '>MAZARÃO</h1>
                    <h2 className='font-inter text-sm font-light tracking-widest'>ADVOCACIA & CONSULTORIA JURÍDICA</h2>
                </div>
            </div>
            <div className="flex items-center gap-12">
                <HeaderNav />
                <WhatsappButton />
            </div>
        </header>
    )
}
