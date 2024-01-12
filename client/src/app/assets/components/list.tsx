import Image from 'next/image'
import ScrollColorBG from '../anim/scroll-color-bg'
import FadeInItem from '../anim/fade-in-item'
import Link from 'next/link'
import Each from './each'

type Props = {
    color: string
    type: string
    title: string
    data: Project[]
}

export default function List({ color, type, title, data }: Props) {
    return (
        <ScrollColorBG color={color}>
            <div className="container projects-section py-section">
                <div className="space-y-section">
                    <Title type={type}>{title}</Title>
                    <div className="project-list">
                        <div className="project-list__col">
                            <Each
                                of={data}
                                render={(item: Project, index: number) => (
                                    <div className="project-list__item">
                                        <FadeInItem>
                                            <div className="item-image">
                                                <div className="anim-hover-clip-image item-image__inner">
                                                    <Link href={`/detail/${item.id}`} data-cursor="<div class='cursor-pn-discover'><span>Chi tiết</span></div>">
                                                        <Image width={300} height={150} src={item.image} alt={item.id} />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="item-text mix-blend-difference text-primary">
                                                <h4 className="h4">
                                                    <Link href={`/detail/${item.id}`}>{item.name}</Link>
                                                </h4>
                                                <div className="item-text__position">
                                                    <Each of={item.description} render={(item: string) => <p> {item}</p>} />
                                                </div>
                                            </div>
                                        </FadeInItem>
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </ScrollColorBG>
    )
}

function Title({ type, children }: { type: string; children: React.ReactNode }) {
    return (
        <div className="title-section">
            <div className="tag uppercase" data-split-text="words" data-rotate="10" data-stagger="0.05">
                {type}
            </div>
            <h2 className="h1" data-split-text="lines">
                {children}
            </h2>
        </div>
    )
}

function Item() {
    return <div></div>
}
