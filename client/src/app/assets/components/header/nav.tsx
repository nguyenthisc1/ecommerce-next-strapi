import classNames from 'classnames'
import Link from 'next/link'
import TransitionLink from '../transitionLink';

const menu: { name: string; path: string }[] = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/products' },
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
                            <TransitionLink href={item.path}>{item.name}</TransitionLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
