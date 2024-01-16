'use client'

import Each from '@/app/assets/components/each'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Props = {
    data: Project
}

export default function Hero({ data }: Props) {
    return (
        <section className="hero-subpage">
            <div className="hero-shape-wrapper">
                <div className="hero-shape">{data ? <Image width={500} height={500} className="hero-image" src={`${process.env.URL ? process.env.URL : 'http://localhost:1337'}${data?.attributes?.images.data[0].attributes.url}`} alt={data?.attributes?.name} /> : null}</div>
            </div>

            <div className="container text-white">
                <div className="space-y-10">
                    <h1 className="h3-secondary">{data ? data?.attributes?.name : null}</h1>
                    {/* <ul className="flex flex-col gap-10 md:flex-row">
                        <li className="space-y-4">
                            <div>Deliverables</div>
                            <ul className="space-y-2 font-medium">
                                <Each of={data?.attributes?.description} render={(item: string) => <li> {item}</li>} />
                            </ul>
                        </li>
                    </ul> */}
                </div>
            </div>
        </section>
    )
}
