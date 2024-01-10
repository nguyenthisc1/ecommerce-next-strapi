import ScrollColorBG from '../anim/scroll-color-bg'

type Props = {
    color: string
    type: string
    title: string
    data: []
}

export default function List({ color, type, title, data }: Props) {
    return (
        <ScrollColorBG color={color}>
            <div className="container specialize-section py-section">
                <div className="space-y-section">
                    <Title type={type}>{title}</Title>
                    <div className="specialize-list">
                        <div className="specialize-list__col">
                            <div className="specialize-list__item cursor-page-nav" data-scroll-fade-in>
                                <div className="cursor-pn-image">
                                    <img className="lazy" data-src="./assets/images/img_specialize_hover_1.jpeg" alt="img_specialize_hover_1" />
                                </div>

                                <div className="item-image">
                                    <img className="lazy" data-src="./assets/images/img_specialize_1.svg" alt="img_specialize_1" />
                                </div>

                                <div className="item-text">
                                    <h3 className="h3">Xây dựng thương hiệu</h3>
                                    <p>Trong thời đại vàng son của ngành du lịch nghỉ dưỡng, xây dựng hình ảnh hay cảm xúc cho thương hiệu sẽ quan trọng hơn? Điều tuyệt vời là chúng tôi kết hợp nhịp nhàng cả hai để thương hiệu không hòa lẫn trên thị trường.</p>
                                </div>
                            </div>

                            <div className="specialize-list__item cursor-page-nav" data-scroll-fade-in>
                                <div className="cursor-pn-image">
                                    <img className="lazy" data-src="./assets/images/img_specialize_hover_3.jpeg" alt="img_specialize_hover_3" />
                                </div>

                                <div className="item-image">
                                    <img className="lazy" data-src="./assets/images/img_specialize_3.svg" alt="img_specialize_3" />
                                </div>

                                <div className="item-text">
                                    <h3 className="h3">Thiết kế kỹ thuật số</h3>
                                    <p>Qua việc khắc hoạ trọn vẹn cá tính và thông điệp của thương hiệu, chúng tôi khẳng định các sản phẩm thiết kế là những tác phẩm nghệ thuật chân thực, và đội ngũ sáng tạo là những nghệ sĩ luôn đam mê với điều mình đang làm.</p>
                                </div>
                            </div>

                            <div className="specialize-list__item cursor-page-nav" data-scroll-fade-in>
                                <div className="cursor-pn-image">
                                    <img className="lazy" data-src="./assets/images/img_specialize_hover_4.jpeg" alt="img_specialize_hover_4" />
                                </div>

                                <div className="item-image">
                                    <img className="lazy" data-src="./assets/images/img_specialize_4.svg" alt="img_specialize_4" />
                                </div>

                                <div className="item-text">
                                    <h3 className="h3">Phát triển nội dung</h3>
                                    <p>Giữa xu thế kỹ thuật số, điều quan trọng là có thể làm ai đó dừng bước, để đắm mình trong câu chuyện và cảm nhận về thương hiệu. Đó cũng là phương thức để kết nối hiệu quả và để lại ấn tượng sâu sắc với khách hàng.</p>
                                </div>
                            </div>
                        </div>

                        <div className="specialize-list__col">
                            <div className="specialize-list__item cursor-page-nav" data-scroll-fade-in>
                                <div className="cursor-pn-image">
                                    <img className="lazy" data-src="./assets/images/img_specialize_hover_1.jpeg" alt="img_specialize_hover_1" />
                                </div>

                                <div className="item-image">
                                    <img className="lazy" data-src="./assets/images/img_specialize_1.svg" alt="img_specialize_1" />
                                </div>

                                <div className="item-text">
                                    <h3 className="h3">Xây dựng thương hiệu</h3>
                                    <p>Trong thời đại vàng son của ngành du lịch nghỉ dưỡng, xây dựng hình ảnh hay cảm xúc cho thương hiệu sẽ quan trọng hơn? Điều tuyệt vời là chúng tôi kết hợp nhịp nhàng cả hai để thương hiệu không hòa lẫn trên thị trường.</p>
                                </div>
                            </div>
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
