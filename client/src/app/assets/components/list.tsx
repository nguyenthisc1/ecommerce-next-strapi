import Image from 'next/image'
import ScrollColorBG from '../anim/scroll-color-bg'
import FadeInItem from '../anim/fade-in-item'
import Link from 'next/link'
import Each from './each'
import SplitText from '../anim/split-text'
import { convertSlugURL } from '../utils/convertSlugUrl'
import TransitionLink from './transitionLink'

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
                    <Title type={type}>
                        <SplitText text={title} />
                    </Title>
                    <div className="project-list">
                        <div className="project-list__col">
                            <Each
                                of={data}
                                render={(item: Project, index: number) => (
                                    <div className="project-list__item">
                                        <FadeInItem>
                                            <div className="item-image">
                                                <div className="anim-hover-clip-image item-image__inner">
                                                    <TransitionLink className='w-full' href={`/detail/${convertSlugURL(item.attributes.name)}-${item.id}.html`} data-cursor="<div class='cursor-pn-discover'><span>Chi tiết</span></div>">
                                                        <Image width={300} height={300} src={`${process.env.URL}${item.attributes.images.data[0].attributes.url}`} alt={item.id} />
                                                    </TransitionLink>
                                                </div>
                                            </div>
                                            <div className="item-text mix-blend-difference text-primary">
                                                <h4 className="h4">
                                                    <TransitionLink href={`/detail/${convertSlugURL(item.attributes.name)}-${item.id}.html`}>{item.attributes.name}</TransitionLink>
                                                </h4>
                                                {/* <div className="item-text__position">
                                                    <Each of={item.attributes.description} render={(item: string) => <p> {item}</p>} />
                                                </div> */}
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
