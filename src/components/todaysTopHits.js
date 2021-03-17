import React, { PureComponent, useEffect } from 'react';
import './todaysTopHits.css';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from 'swiper';
import { useStateValue } from './StateWrap';
import 'swiper/swiper-bundle.css'
import axios from 'axios';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Cell, Legend} from 'recharts';

SwiperCore.use([EffectCoverflow]);

// test track data
const danceability = .808;
const energy = .626;
const loudness = -12.733;
const speechiness = .168;
const acousticness = .00187;
const instrumentalness = .159;
const liveness = .376;
const tempo = 123.99;

const tData = [
    { parameter: 'Danceability', A: .808, limit: 1, domain: [0, 1] },
    { parameter: 'Energy', A: .626, limit: 1, domain: [0, 1] },
    { parameter: 'Speechiness', A: .168, limit: 1, domain: [0, 1] },
    { parameter: 'Acousticness', A: .00187, limit: 1, domain: [0, 1] },
    { parameter: 'Instrumentalness', A: .159, limit: 1, domain: [0, 1] },
    { parameter: 'Liveness', A: .376, limit: 1, domain: [0, 1] },
]


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
                <a href={track.track.external_urls.spotify} target="_blank"><img alt="track image" src={track.track.album.images[0].url} /></a>
                <h5 className="track-name">{track.track.name} </h5>
                <i className="fas fa-fire" style={{
                    color: getColor(track.track.popularity)
                }}></i>
                <h6>{track.track.artists[0].name}</h6>
            </SwiperSlide>
        );
    });



    return (
        <div className="todaysTop container">
            <div className="todaysTop_row row">
                <div className="todaysTop_title col-12">
                    <h3>Today's Top Hits</h3>
                </div>
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
                <div className="todaysTop-track-feature col-12">
                    <ResponsiveContainer height={.25*window.innerHeight} width="95%" style={{margin: "auto"}} >
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" width="80%" data={tData} >
                            {/* <Radar name="Track Name" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}>
                                {
                                    tData.map((entry, index) => (
                                        <Cell domain={[0, entry.limit]} key={`cell-${index}`} />
                                    ))
                                }
                            </Radar> */}
                             <PolarGrid  stroke="tomato"/>
                            <Legend verticalAlign="top" />
                            <PolarAngleAxis dataKey="parameter" />
                           <Radar name="Track Name" dataKey="A" stroke="black" fill="black" fillOpacity={0.6}></Radar>
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>

    );
};

export default TodaysTop;