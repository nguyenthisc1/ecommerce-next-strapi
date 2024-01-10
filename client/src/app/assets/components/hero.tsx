import Image from 'next/image'
import React from 'react'

type Props = {
    title: string
}

export default function Hero({ title }: Props) {
    return (
        <section className="hero">
            <div className="logo-symbol">
                <Image className="logo-symbol__image" width={500} height={500} src="/images/symbol.svg" alt="symbol" />
            </div>
            <div className="container">
                <h2 className="hero-title h3-secondary" data-split-text="wordchars" data-stagger="0.5" data-duration="1" data-rotate="5" data-delay="5.4">
                    {title}
                </h2>
            </div>
        </section>
    )
}
