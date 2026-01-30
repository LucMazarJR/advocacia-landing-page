import type { Metadata } from 'next'
import './globals.css'
import Header from './components/layout/header'
import Footer from './components/layout/footer'

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
        <html>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
