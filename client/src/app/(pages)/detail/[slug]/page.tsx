import Hero from '../components/hero'
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { slug: string }
}

type PropsMeta = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: PropsMeta, parent: ResolvingMetadata): Promise<Metadata> {
    const { slug } = params

    const data = await getData(slug)

    return {
        title: data.data.attributes.name,
        description: `This is description ${data.data.attributes.description}`,
        openGraph: {
            title: data.data.attributes.name,
            description: `This is description ${data.data.attributes.name}`,
            type: 'website',
            images: `${process.env.URL}${data.data?.attributes?.images.data[0].attributes.url}`,
        },
    }
}

async function getData(slug: string) {
    const temp = slug?.split('.html') ?? []
    const getTempValue = (temp[0]?.split('-') ?? []) as string[]
    const id = getTempValue[getTempValue.length - 1]
    const res = await fetch(`${process.env.HOST}/products/${id}?populate=*`)
    return res.json()
}

export default async function DetailSlugPage({ params }: Props) {
    const { slug } = params

    const data = await getData(slug)
    return (
        <>
            <Hero data={data.data} />
        </>
    )
}
