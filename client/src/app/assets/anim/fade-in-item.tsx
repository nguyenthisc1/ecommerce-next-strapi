'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { ElementRef, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import classNames from 'classnames'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}


export default function FadeInItem({ children }: { children: React.ReactNode }) {
    const el = useRef<ElementRef<'div'>>(null)
    const [active, setActive] = useState<boolean>(false)
    useGSAP(
        () => {
            gsap.to(el.current, {
                scrollTrigger: {
                    trigger: el.current,
                    start: 'top bottom',
                    once: true,
                    onEnter: () => setActive(true),
                },
            })
        },
        { scope: el }
    )
    return (
        <div className={classNames({ 'fade-in': active })} data-scroll-fade-in ref={el}>
            {children}
        </div>
    )
}
