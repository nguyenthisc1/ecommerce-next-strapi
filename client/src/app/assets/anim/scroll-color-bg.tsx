'use client'

import { useGSAP } from '@gsap/react'
import classNames from 'classnames'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { ElementRef, useRef, useState } from 'react'

type Props = {
    children: React.ReactNode
    color: string
}

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function ScrollColorBG({ children, color, ...props }: Props) {
    const container = useRef<ElementRef<'section'>>(null)
    const [active, setActive] = useState<boolean>(false)
    useGSAP(
        () => {
            gsap.to(container.current, {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top center',
                    onEnter: () => setActive((state) => true),
                    onLeaveBack: () => setActive((state) => false),
                    onEnterBack: () => setActive((state) => true),
                },
            })
        },
        { scope: container }
    )

    return (
        <section className={classNames({ 'active-scroll': active })} ref={container} data-scroll-background-color={color}>
            {children}
        </section>
    )
}
