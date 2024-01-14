'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Back } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ElementRef, useRef } from 'react'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

type Props = {
    text: string
}

export default function SplitText({ text }: Props) {
    const el = useRef<ElementRef<'div'> | any>(null)

    useGSAP(
        () => {
            if (el.current) {
                const chars = el.current.querySelectorAll('.char')

                gsap.set(chars, {
                    y: '100%',
                    rotate: el.current.getAttribute('data-rotate') ? el.current.getAttribute('data-rotate') : 10,
                })

                gsap.to(chars, {
                    y: 0,
                    rotate: 0,
                    duration: el.current.getAttribute('data-duration') ? el.current.getAttribute('data-duration') : 0.5,
                    delay: el.current.getAttribute('data-delay') ? el.current.getAttribute('data-delay') : 0,
                    ease: Back.easeOut.config(0.8),
                    stagger: {
                        amount: el.current.getAttribute('data-stagger') ? el.current.getAttribute('data-stagger') : 1,
                    },
                    clearProps: 'all',
                    scrollTrigger: {
                        trigger: el.current,
                        start: 'top 90%',
                        end: 'bottom top',
                        markers: false,
                        once: true,
                    },
                })
            }
        },
        { scope: el }
    )

    return (
        <>
            <div data-split-text data-stagger="0.5" data-duration="1" data-rotate="5" ref={el}>
                {text.split(/(\s+)/).map((word, idx) => {
                    return word === ' ' ? (
                        ' '
                    ) : (
                        <span key={word} className="word">
                            <span className="char">{word}</span>
                        </span>
                    )
                })}
            </div>
        </>
    )
}
