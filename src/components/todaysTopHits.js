import React, { PureComponent, useEffect } from 'react';
import './todaysTopHits.css';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from 'swiper';
import { useStateValue } from './StateWrap';
import 'swiper/swiper-bundle.css'
import axios from 'axios';

SwiperCore.use([EffectCoverflow]);



function TodaysTop() {

    const [{ data, loadingDisplay }, dispatch] = useStateValue();

    useEffect(() => {
        async function loadData() {
            let res = await axios.get("http://localhost:3001/todaysTop");
            return res;
        }
        dispatch({
            type: 'TOGGLE_LOADING',
            loadingDisplay: 'block'
        })
        loadData()
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: 'LOAD_DATA',
                    data: res.data.data
                })
                dispatch({
                    type: 'TOGGLE_LOADING',
                    loadingDisplay: 'none'
                })
            })
    }, [])

    function getColor(value) {
        value = value / 100
        var hue = ((1 - value) * 120).toString(10);
        return ["hsl(", hue, ",100%,50%)"].join("");
    }


    const trackDiv = data.tracks.items.map((track, i) => {

        return (
            <SwiperSlide className="swiper-slide" key={i + 'tl'}>
                <a href={track.track.external_urls.spotify} target="_blank"><img src={track.track.album.images[0].url} /></a>
                <h5 className="track-name">{track.track.name} <i className="fas fa-fire" style={{
                    color: getColor(track.track.popularity)
                }}></i></h5>
                <h6>{track.track.artists[0].name}</h6>
            </SwiperSlide>
        );
    });



    return (
        <div className="todaysTop container">
            <div className="todaysTop_row row">
                <Swiper className="swiper"
                    effect="coverflow"
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true
                    }}
                    pagination={{
                        el: '.swiper-pagnation'
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {trackDiv}
                </Swiper>
            </div>
        </div>

    );
};

export default TodaysTop;