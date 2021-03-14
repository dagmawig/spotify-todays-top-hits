import React, { useEffect } from 'react';
import './todaysTopHits.css';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from 'swiper';

import 'swiper/swiper-bundle.css'
// import 'swiper/components/effect-coverflow/effect-coverflow.css'

SwiperCore.use([EffectCoverflow]);

const trackName = "Save Your Tears";
const artistNames = ["The Weeknd"];
const explicit = true;
const trackLink = "https://open.spotify.com/track/7MAibcTli4IisCtbHKrGMh";
const popularity = 96;
const trackImage = "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36";

const Img1 = "https://i.scdn.co/image/ab67616d0000b2736f9e6abbd6fa43ac3cdbeee0";
const Img2 = "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36";
const Immg3 = "https://i.scdn.co/image/ab67616d0000b273f4b8a43495c6172243cf16f4"

function TodaysTop() {

    // var swiper = new Swiper('.swiper-container', {
    //     effect: 'coverflow',
    //     grabCursor: true,
    //     centeredSlides: true,
    //     slidesPerView: 'auto',
    //     coverflowEffect: {
    //         rotate: 50,
    //         stretch: 0,
    //         depth: 100,
    //         modifier: 1,
    //         slideShadows: true,
    //     },
    //     pagination: {
    //         el: '.swiper-pagination',
    //     },
    // });

    // useEffect(() => {
    //     return () => swiper
    // }, [swiper])

    return (
        <div className="todaysTop container">
            <div classname="todaysTop_row row">
                <Swiper className="swiper"
                    effect="coverflow"
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth:100,
                        modifier: 1,
                        slideShadows: true
                    }}
                    pagination= {{
                        el: '.swiper-pagnation'
                    }}
                    // spaceBetween={50}
                    // slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className="swiper-slide"><img src="https://i.scdn.co/image/ab67616d0000b273f4b8a43495c6172243cf16f4" /></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src="https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36" /></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src="https://i.scdn.co/image/ab67616d0000b2736f9e6abbd6fa43ac3cdbeee0" /></SwiperSlide>
                </Swiper>
            </div>
        </div>

    );
};

export default TodaysTop;