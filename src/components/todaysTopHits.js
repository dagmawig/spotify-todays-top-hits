import React, { useEffect, useState } from 'react';
import './todaysTopHits.css';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from 'swiper';
import { useStateValue } from './StateWrap';
import 'swiper/swiper-bundle.css'
import axios from 'axios';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Legend } from 'recharts';

// Selecting the type of swiper effect to be used.
SwiperCore.use([EffectCoverflow]);

// App's main function
function TodaysTop() {

    //declaring state variables.
    const [{ data, features }, dispatch] = useStateValue();
    const [trackName, setTName] = useState("");
    var trackFeature = null;
    var trackNameArr = [];
    var tData = [
        { parameter: 'Danceability', A: features[0], limit: 1, domain: [0, 1] },
        { parameter: 'Energy', A: features[1], limit: 1, domain: [0, 1] },
        { parameter: 'Speechiness', A: features[2], limit: 1, domain: [0, 1] },
        { parameter: 'Acousticness', A: features[3], limit: 1, domain: [0, 1] },
        { parameter: 'Instrumentalness', A: features[4], limit: 1, domain: [0, 1] },
        { parameter: 'Liveness', A: features[5], limit: 1, domain: [0, 1] },
    ];

    // function used to determine the color of track popularity flame on green to red range.
    function getColor(value) {
        value = value / 100
        var hue = ((1 - value) * 120).toString(10);
        return ["hsl(", hue, ",100%,50%)"].join("");
    }

    // function used to handle changes when user swipes to the next track.
    function handleSlide() {
        let index = document.getElementsByClassName('swiper-slide-active')[0].getAttribute("itemRef");

        setTName(trackNameArr[index]);

        if (trackFeature) {

            let tFeature = trackFeature.audio_features[index];
            dispatch({
                type: 'UPDATE_FEATURES',
                data: [tFeature.danceability, tFeature.energy, tFeature.speechiness, tFeature.acousticness, tFeature.instrumentalness, tFeature.liveness]
            });
        }
    };

    // function to define each slide html element based on track data.
    const trackDiv = data.tracks.items.map((track, i) => {

        return (
            <SwiperSlide className="swiper-slide" key={i} itemRef={i}>
                <a href={track.track.external_urls.spotify} target="_blank"><img alt="track cover" src={track.track.album.images[0].url} /></a>
                <h5 className="track-name">{track.track.name} </h5>
                <i className="fas fa-fire" style={{
                    color: getColor(track.track.popularity)
                }}></i>
                <h6>{track.track.artists[0].name}</h6>
            </SwiperSlide>
        );
    });

    // hook used to load data from spotify api.
    useEffect(() => {
        async function loadData() {
            let res = await axios.get("https://spotifytophits.glitch.me/todaysTop");
            return res;
        }
        async function loadFeature(IDArray) {
            let res = await axios.post("https://spotifytophits.glitch.me/trackFeature", { trackID: IDArray });
            return res;
        }
        dispatch({
            type: 'TOGGLE_LOADING',
            loadingDisplay: 'block'
        })
        loadData()
            .then(res => {
                dispatch({
                    type: 'LOAD_DATA',
                    data: res.data.data
                })
                return res.data.data;
            }).then((res) => {
                let IDArray = res.tracks.items.map((track) => {
                    return track.track.id;
                })
                let nameArray = res.tracks.items.map((track) => {
                    return track.track.name;
                })
                return [IDArray, nameArray];
            }).then((res) => {
                trackNameArr = res[1];
                loadFeature(res[0])
                    .then(res => {
                        trackFeature = res.data.data;
                        handleSlide();
                        dispatch({
                            type: 'TOGGLE_LOADING',
                            loadingDisplay: 'none'
                        })
                    })
            })
    }, [])

    return (
        <div className="todaysTop container">
            <div className="todaysTop_row row">
                <div className="todaysTop_title col-12">
                    <h5>Spotify Today's Top Hits</h5>
                </div>
                <Swiper className="swiper col-12"
                    effect="coverflow"
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{
                        el: '.swiper-pagnation'
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onTransitionEnd={handleSlide}
                >
                    {trackDiv}
                </Swiper>
                <div className="todaysTop-track-feature col-12">
                    <ResponsiveContainer height={.25 * window.innerHeight} width="95%" style={{ margin: "auto" }} >
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" width="80%" data={tData} >
                            <PolarGrid stroke="tomato" />
                            <Legend iconType="wye" verticalAlign="top" />
                            <PolarAngleAxis dataKey="parameter" />
                            <Radar name={trackName} dataKey="A" stroke="black" fill="black" fillOpacity={0.6}></Radar>
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default TodaysTop;