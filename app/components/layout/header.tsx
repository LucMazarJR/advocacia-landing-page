import WhatsappButton from '../buttons/whatsaap_button'
import HeaderNav from './header_nav'
import Image from 'next/image'

export default function Header() {
    return (
        <header className="bg-header-primary fixed top-0 flex w-full items-center justify-between p-5 px-8">
            <div className="flex gap-4 items-center">
                <Image src={"/logo.png"} width={70} height={70} alt='logo-advocacia-mazarao'></Image>
                <h1 className='font-playfair text-3xl font-semibold text-accent-secundary'>MAZARÃO ADVOCACIA</h1>
            </div>
            <div className="flex items-center gap-12">
                <HeaderNav />
                <WhatsappButton />
            </div>
        </header>
    )
}
