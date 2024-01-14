'use client'

import React, { useEffect } from 'react'
import Loading from './assets/components/loading'
import { useGSAP } from '@gsap/react'
import { hideLoad } from './assets/anim/transition-page'

export default function Template({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        hideLoad()
    })

    return (
        <>
            <Loading />
            {children}
        </>
    )
}
