import gsap from 'gsap'
import { Expo } from 'gsap/gsap-core'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export const revealLoad = (href: string, router: AppRouterInstance) => {
    const loading = document.querySelector('#loading')!

    const tl = gsap.timeline()

    tl.set(loading, {
        autoAlpha: 1,
    }).set(loading.querySelector('.loading-logo'), {
        y: 0,
    })

    tl.to(loading.querySelector('.loading-wrapper'), {
        duration: 1.5,
        scaleY: 1,
        transformOrigin: 'center bottom',
        ease: Expo.easeInOut,
        onComplete: () => {
            router.push(href)
        },
    })
        .to(
            loading.querySelector('.logo-symbol'),
            {
                opacity: 1,
            },
            1
        )
        .to(
            loading.querySelector('.loading-logo'),
            {
                opacity: 1,
            },
            1
        )
        .to(
            loading.querySelector('.logo-symbol'),
            {
                opacity: 0,
                duration: 0.5,
            },
            1.5
        )
        .to(
            loading.querySelector('.loading-logo'),
            {
                opacity: 0,
                y: -60,
            },
            2.65
        )
        .to(
            loading.querySelector('.loading-wrapper'),
            {
                scaleY: 0,
                duration: 1.5,
                ease: Expo.easeInOut,
                transformOrigin: 'top',
            },
            3
        )
        .to(loading, {
            autoAlpha: 0,
            duration: 0,
        })
}

export const hideLoad = () => {
    const loading = document.querySelector('#loading')!
    const tl = gsap.timeline()

    tl.to(
        loading.querySelector('.loading-logo'),
        {
            opacity: 0,
            y: -60,
        },
        0.5
    )
        .to(loading.querySelector('.loading-text'), {
            opacity: 1,
            y: 0,
        })
        .to(
            loading.querySelector('.loading-text'),
            {
                opacity: 0,
                y: -60,
            },
            2
        )
        .to(loading.querySelector('.loading-desc'), {
            opacity: 1,
            y: 0,
        })
        .to(
            loading.querySelector('.loading-desc'),
            {
                opacity: 0,
                y: -60,
            },
            3.5
        )
        .to(
            loading.querySelector('.logo-symbol'),
            {
                opacity: 0,
                duration: 0.5,
            },
            3.6
        )
        .to(
            loading.querySelector('.loading-wrapper'),
            {
                scaleY: 0,
                duration: 1.5,
                ease: Expo.easeInOut,
            },
            3.75
        )
        .to(loading, {
            autoAlpha: 0,
            duration: 0,
        })
}
