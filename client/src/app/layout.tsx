import type { Metadata } from 'next'
import Header from './assets/components/header/header'
import './assets/fonts/fonts.css'
import { LenisProvider } from './assets/provider/lenis-provider'
import { ThemeProvider } from './assets/provider/theme-provider'
import './assets/styles/index.scss'

export const metadata: Metadata = {
    title: 'E-commerce App',
    description: 'E-commerce App',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <LenisProvider options={{ lerp: 0.1, wheelMultiplier: 0.8, smoothWheel: true }}>
                <body>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                        <Header />
                        <main>{children}</main>
                    </ThemeProvider>

                </body>
            </LenisProvider>
        </html>
    )
}
