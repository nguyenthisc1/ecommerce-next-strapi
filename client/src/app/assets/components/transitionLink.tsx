'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { revealLoad } from '../anim/transition-page'
import { activeStore } from '../zustand/activeNav.store'

type Props = { href: string; children: React.ReactNode; className?: string }

export default function TransitionLink({ href, children, className }: Props) {
    const router = useRouter()
    const { toggleActive } = activeStore()

    const handleClick = () => {
        revealLoad(href, router)
        setTimeout(() => {
            toggleActive(false)
        }, 1000)
    }

    return (
        <button onClick={handleClick} className={className}>
            {children}
        </button>
    )
}
