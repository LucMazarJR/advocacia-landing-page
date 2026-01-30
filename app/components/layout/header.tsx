import WhatsappButton from '../buttons/whatsaap_button'
import HeaderNav from './header_nav'

export default function Header() {
    return (
        <header className="bg-header-primary fixed top-0 flex w-full items-center justify-end p-3">
            <div className="flex items-center gap-6">
                <HeaderNav />
                <WhatsappButton />
            </div>
        </header>
    )
}
