import Image from 'next/image'

export default function WhatsappButton() {
    return (
        <a
            href={
                'https://wa.me/5516982020132?text=Olá!%20Estou%20falando%20com%20Luciano%20Mazarão%20advogado%3F'
            }
            className="text-accent flex gap-2 border rounded-lg bg-header-secundary p-2 px-6"
        >
            <div className="relative aspect-square w-[1.5em]">
                <Image src={'/icons/whatsapp.png'} alt={'whatsapp-icon'} fill />
            </div>
            <span className="font-semibold">{`(16) 98202-0132`}</span>
        </a>
    )
}
