'use client'

import Image from 'next/image'

export default function Loading() {
    return (
        <div id="loading" className="loading">
            <div className="loading-wrapper">
                <div className="logo-symbol">
                    <Image width={500} height={500} className="logo-symbol__image" src="/images/symbol_white.svg" alt="symbol" />
                </div>

                <div className="loading-wrapper__inner">
                    <div className="loading-logo">
                        <Image width={100} height={100} className="loading-icon" src="/images/logo_icon.svg" alt="logo" />
                        <div className="logo-circle">
                            <div className="logo-circle__image anim-spin-out bg-[url('/images/logo_circle.svg')]"></div>
                        </div>
                    </div>

                    <div className="loading-text h1-secondary">Xin chào</div>
                    <div className="loading-desc h3">We are brand storytellers.</div>
                </div>
            </div>
        </div>
    )
}
