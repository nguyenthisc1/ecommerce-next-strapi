'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { ElementRef, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import classNames from 'classnames'
import Script from 'next/script'
import { Span } from 'next/dist/trace'
import { log } from 'console'
type Props = {
    text: string
}

export default function SplitText({ text }: Props) {
    const el = useRef<ElementRef<'div'> | any>(null)

    useGSAP(
        () => {
            if (el.current) {
                gsap.set(el.current.children, {
                    y: '120%',
                    rotate: 0,
                })
            }
        },
        { scope: el }
    )

    return (
        <>
            <div data-split-text ref={el}>
                {text.split(/(\s+)/).map((word) => (
                    <>
                        {word === ' ' ? (
                            ' '
                        ) : (
                            <span>
                                <span className="word">{word}</span>
                            </span>
                        )}
                    </>
                ))}
            </div>
        </>
    )
}
