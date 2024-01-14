'use client'

import Image from 'next/image'
import { useState } from 'react'
import classNames from 'classnames'
import Nav from './nav'
import TransitionLink from '../transitionLink'
import { activeStore } from '../../zustand/activeNav.store'
export default function Header() {
    const { active, toggleActive } = activeStore()

    return (
        <>
            <header className={classNames('header', { active: active })}>
                <div className="wrapper">
                    <div className="logo">
                        <TransitionLink href="/">
                            <Image className="object-contain" width={100} height={100} src="images/logo.svg" alt="logo" />
                        </TransitionLink>
                    </div>

                    <div className={classNames('hamburger', { active: active })} onClick={(state) => toggleActive(!active)}>
                        <div className="hamburger-wrapper magnetic-item">
                            <div className="hamburger-wrapper__line">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Nav active={active} />
        </>
    )
}
