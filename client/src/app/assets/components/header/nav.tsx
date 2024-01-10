import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'

const menu: { name: string; path: string }[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Product', path: '/product' },
]

type Props = {
    active: boolean
}

export default function Nav({ active }: Props) {
    return (
        <nav className={classNames('nav', { active })}>
            <div className="wrapper">
                <ul className="nav-menu">
                    {menu.map((item) => (
                        <li key={item.name}>
                            <Link href={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
