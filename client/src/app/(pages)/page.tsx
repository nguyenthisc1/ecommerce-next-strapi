import Hero from '../assets/components/hero'
import List from '../assets/components/list'

export default function Home() {
    return (
        <>
            <Hero title="Chúng tôi là nhà thiết kế cảm xúc cho thương hiệu" />
            <List
                color="white"
                type="chuyên môn"
                title="Đồng hành cùng đối tác hiện thực hóa tầm nhìn thương hiệu và chinh phục những mục tiêu lớn."
                data={[]}
            />
        </>
    )
}
