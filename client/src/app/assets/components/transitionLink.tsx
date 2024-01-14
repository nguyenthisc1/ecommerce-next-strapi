import { useRouter } from 'next/navigation'
import React from 'react'
import { revealLoad } from '../anim/transition-page'
import { activeStore } from '../zustand/activeNav.store'

type Props = { href: string; children: React.ReactNode }

export default function TransitionLink({ href, children }: Props) {
    const router = useRouter()
    const { toggleActive } = activeStore()

    const handleClick = () => {
        revealLoad(href, router)
        setTimeout(() => {
            toggleActive(false)
        }, 1000)
    }

    return <button onClick={handleClick}>{children}</button>
}
