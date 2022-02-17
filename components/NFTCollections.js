import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';

function NFTCollections() {
    return (
        <section className="mt-14" >
            <div className="container">
                <div className="bg-white/20 md:px-5 pb-0 pt-10 md:py-10 rounded-2xl">
                    <div className="mb-7 px-5 md:px-0" >
                        <h2 className="heading_md mb-4" >TEXT TEXT TEXT</h2>
                        <p className="text-gray-eee" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel sollicitudin tellus, sit amet venenatis ante. Curabitur id fermentum est.</p>
                    </div>
                    <div>
                        <Swiper
                            spaceBetween={25}
                            slidesPerView={3.8}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.2,
                                },
                                600: {
                                    slidesPerView: 2.2,
                                },
                                950: {
                                    slidesPerView: 3.2,
                                },
                                1200: {
                                    slidesPerView: 3.8,
                                },
                            }}
                        >
                            <SwiperSlide><Card imgSrc="/img/albert.png" /></SwiperSlide>
                            <SwiperSlide><Card imgSrc="/img/mystiquepng.png" /></SwiperSlide>
                            <SwiperSlide><Card imgSrc="/img/punkpng.png" /></SwiperSlide>
                            <SwiperSlide><Card imgSrc="/img/albert.png" /></SwiperSlide>
                            <SwiperSlide><Card imgSrc="/img/mystiquepng.png" /></SwiperSlide>
                            <SwiperSlide><Card imgSrc="/img/punkpng.png" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NFTCollections
