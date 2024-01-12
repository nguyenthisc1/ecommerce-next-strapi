import { Children } from 'react'

export default function Each({ render, of }: any) {
    return Children.toArray(of.map((item: React.ReactNode, index: Number) => render(item, index)))
}
