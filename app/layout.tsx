import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Header from './components/layout/header'
import Footer from './components/layout/footer'

const playfair = Playfair_Display({ 
    subsets: ['latin'], 
    weight: ['600', '700'],
    variable: '--font-playfair'
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
        <html className={`${playfair.variable} ${inter.variable}`}>
            <body className="font-inter">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
