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
    title: '',
    description: '',
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html className={`${cinzel.variable} ${inter.variable}`}>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
