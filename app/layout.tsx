import type { Metadata } from 'next'
import { Cinzel, Inter } from 'next/font/google'
import './globals.css'
import Header from './components/layout/header'
import Footer from './components/layout/footer'

const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['600', '700'],
    variable: '--font-cinzel'
})

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-inter'
})

export const metadata: Metadata = {
    title: {
        default: 'Luciano Mazarão Advocacia',
        template: '%s | Luciano Mazarão Advocacia',
    },
    applicationName: 'Luciano Mazarão Advocacia',
    description:
        'Advogado em Franca/SP com atuação em Direito Sucessório, Imobiliário, de Família e Consultoria Jurídica. Atendimento presencial e online.',
    keywords: [
        'advogado em Franca',
        'advogado Franca SP',
        'Luciano Mazarão Advocacia',
        'direito sucessório Franca',
        'direito imobiliário Franca',
        'direito de família Franca',
        'consultoria jurídica Franca',
        'inventário Franca',
        'regularização de imóveis Franca',
    ],
    authors: [{ name: 'Luciano Neves Mazarão' }],
    metadataBase: new URL('https://mazaraoadvocacia.com.br'),
    icons: {
        icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
        apple: [{ url: '/logo.png', type: 'image/png' }],
        shortcut: '/favicon.ico',
    },
    openGraph: {
        title: 'Luciano Mazarão Advocacia',
        description:
            'Advogado em Franca/SP com atuação em Direito Sucessório, Imobiliário, de Família e Consultoria Jurídica.',
        url: '/',
        siteName: 'Luciano Mazarão Advocacia',
        locale: 'pt_BR',
        type: 'website',
        images: [
            {
                url: '/images/luciano-perfil.jpeg',
                alt: 'Luciano Mazarão Advocacia',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Luciano Mazarão Advocacia',
        description:
            'Advogado em Franca/SP com atuação em Direito Sucessório, Imobiliário, de Família e Consultoria Jurídica.',
        images: ['/images/luciano-perfil.jpeg'],
    },
    robots: {
        index: true,
        follow: true,
    },
    other: {
        'geo.region': 'BR-SP',
        'geo.placename': 'Franca',
    },
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html className={`${cinzel.variable} ${inter.variable}`}>
            <body className="bg-background font-inter text-foreground">
                <Header />
                <main className="pt-20 sm:pt-24 md:pt-20 lg:pt-24">{children}</main>
                <Footer />
            </body>
        </html>
    )
}
