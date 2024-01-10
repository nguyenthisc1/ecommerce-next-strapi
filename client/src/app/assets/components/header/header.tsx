'use client'

import Image from 'next/image'
import { useState } from 'react'
import classNames from 'classnames'
import Nav from './nav'
export default function Header() {
    const [useActiveNav, setUseActiveNav] = useState<boolean>(false)

    return (
        <>
            <header className={classNames('header', { active: useActiveNav })}>
                <div className="wrapper">
                    <div className="logo">
                        <a href="/">
                            <Image className="object-contain" width={100} height={100} src="images/logo.svg" alt="logo" />
                        </a>
                    </div>

                    <div className={classNames('hamburger', { active: useActiveNav })} onClick={() => setUseActiveNav((state) => !state)}>
                        <div className="hamburger-wrapper magnetic-item">
                            <div className="hamburger-wrapper__line">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Nav active={useActiveNav} />
        </>
    )
}
