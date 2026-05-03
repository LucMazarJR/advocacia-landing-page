import Image from 'next/image'

export default function WhatsappButton() {
    return (
        <a
            href={
                'https://wa.me/5516982020132?text=Olá!%20Estou%20falando%20com%20Luciano%20Mazarão%20advogado%3F'
            }
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-header-secundary px-3 py-2 text-xs text-accent-primary sm:px-5 sm:text-sm"
        >
            <div className="relative aspect-square w-5 sm:w-6">
                <Image src={'/icons/whatsapp.png'} alt={'whatsapp-icon'} fill />
            </div>
            <span className="hidden font-semibold sm:inline">{`(16) 98202-0132`}</span>
        </a>
    )
}
