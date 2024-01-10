'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import classNames from 'classnames'

type Props = {
    children: React.ReactNode
    color: string
}

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function ScrollColorBG({ children, color, ...props }: Props) {
    const container = useRef<null | any>(null)
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
        <div className={classNames({ 'active-scroll': active })} ref={container} data-scroll-background-color={color}>
            {children}
        </div>
    )
}
