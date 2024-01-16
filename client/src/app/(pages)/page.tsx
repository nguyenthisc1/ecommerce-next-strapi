import Hero from '../assets/components/hero'
import List from '../assets/components/list'

export default async function HomePage() {
    const getProducts = await fetch(`${process.env.HOST}/products?populate=*`, {
        next: { tags: ['products'] },
    }).then((res) => res.json())

    return (
        <>
            <Hero title="Chúng tôi là nhà thiết kế cảm xúc cho thương hiệu" />
            <List color="white" type="Dự án" title="Đồng hành cùng đối tác hiện thực hóa tầm nhìn thương hiệu và chinh phục những mục tiêu lớn." data={getProducts.data} />
        </>
    )
}
