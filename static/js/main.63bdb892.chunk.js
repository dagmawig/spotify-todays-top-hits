(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{215:function(e,t,a){},216:function(e,t,a){},218:function(e,t,a){},372:function(e,t,a){},373:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(54),i=a.n(c),s=(a(215),a(216),a(43)),o=a.n(s),l=a(112),d=a(24),u=(a(218),a(376)),p=a(381),j=a(48),f=a(131),m=a(11),b=Object(n.createContext)(),h=function(e){var t=e.reducer,a=e.initialState,r=e.children;return Object(m.jsx)(b.Provider,{value:Object(n.useReducer)(t,a),children:r})},O=function(){return Object(n.useContext)(b)},y=(a(220),a(114)),x=a.n(y),v=a(383),g=a(384),k=a(380),w=a(71),A=a(184),T=a(188);j.a.use([f.a]);var D=function(){var e=O(),t=Object(d.a)(e,2),a=t[0],r=a.data,c=a.features,i=t[1],s=Object(n.useState)(""),j=Object(d.a)(s,2),f=j[0],b=j[1],h=null,y=[],D=[{parameter:"Danceability",A:c[0],limit:1,domain:[0,1]},{parameter:"Energy",A:c[1],limit:1,domain:[0,1]},{parameter:"Speechiness",A:c[2],limit:1,domain:[0,1]},{parameter:"Acousticness",A:c[3],limit:1,domain:[0,1]},{parameter:"Instrumentalness",A:c[4],limit:1,domain:[0,1]},{parameter:"Liveness",A:c[5],limit:1,domain:[0,1]}];function N(){var e=document.getElementsByClassName("swiper-slide-active")[0].getAttribute("itemRef");if(b(y[e]),h){var t=h.audio_features[e];i({type:"UPDATE_FEATURES",data:[t.danceability,t.energy,t.speechiness,t.acousticness,t.instrumentalness,t.liveness]})}}var E=r.tracks.items.map((function(e,t){return Object(m.jsxs)(u.a,{className:"swiper-slide",itemRef:t,children:[Object(m.jsx)("a",{href:e.track.external_urls.spotify,target:"_blank",children:Object(m.jsx)("img",{alt:"track cover",src:e.track.album.images[0].url})}),Object(m.jsxs)("h5",{className:"track-name",children:[e.track.name," "]}),Object(m.jsx)("i",{className:"fas fa-fire",style:{color:(a=e.track.popularity,["hsl(",(120*(1-(a/=100))).toString(10),",100%,50%)"].join(""))}}),Object(m.jsx)("h6",{children:e.track.artists[0].name})]},t);var a}));return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://spotifytophits.glitch.me/todaysTop");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("https://spotifytophits.glitch.me/trackFeature",{trackID:t});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i({type:"TOGGLE_LOADING",loadingDisplay:"block"}),function(){return e.apply(this,arguments)}().then((function(e){return i({type:"LOAD_DATA",data:e.data.data}),e.data.data})).then((function(e){return[e.tracks.items.map((function(e){return e.track.id})),e.tracks.items.map((function(e){return e.track.name}))]})).then((function(e){y=e[1],function(e){return t.apply(this,arguments)}(e[0]).then((function(e){h=e.data.data,N(),i({type:"TOGGLE_LOADING",loadingDisplay:"none"})}))}))}),[]),Object(m.jsx)("div",{className:"todaysTop container",children:Object(m.jsxs)("div",{className:"todaysTop_row row",children:[Object(m.jsx)("div",{className:"todaysTop_title col-12",children:Object(m.jsx)("h5",{children:"Spotify Today's Top Hits"})}),Object(m.jsx)(p.a,{className:"swiper col-12",effect:"coverflow",centeredSlides:!0,slidesPerView:3,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:{el:".swiper-pagnation"},onSwiper:function(e){return console.log(e)},onTransitionEnd:N,children:E}),Object(m.jsx)("div",{className:"todaysTop-track-feature col-12",children:Object(m.jsx)(v.a,{height:.25*window.innerHeight,width:"95%",style:{margin:"auto"},children:Object(m.jsxs)(g.a,{cx:"50%",cy:"50%",outerRadius:"80%",width:"80%",data:D,children:[Object(m.jsx)(k.a,{stroke:"tomato"}),Object(m.jsx)(w.a,{iconType:"wye",verticalAlign:"top"}),Object(m.jsx)(A.a,{dataKey:"parameter"}),Object(m.jsx)(T.a,{name:f,dataKey:"A",stroke:"black",fill:"black",fillOpacity:.6})]})})})]})})};a(372);var N=function(){var e=O(),t=Object(d.a)(e,1)[0].loadingDisplay;return Object(m.jsx)("div",{className:"loading",style:{display:t},children:Object(m.jsxs)("div",{className:"loading_row row",children:[Object(m.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw col-12"}),Object(m.jsx)("div",{className:"col-12 text",children:"Loading . . . "})]})})};var E=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(N,{}),Object(m.jsx)(D,{})]})},_=a(49),S=function(e,t){switch(t.type){case"TOGGLE_LOADING":return Object(_.a)(Object(_.a)({},e),{},{loadingDisplay:t.loadingDisplay});case"LOAD_DATA":return Object(_.a)(Object(_.a)({},e),{},{data:t.data});case"UPDATE_FEATURES":return Object(_.a)(Object(_.a)({},e),{},{features:t.data});default:return e}};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(h,{initialState:{features:[0,0,0,0,0,0],data:{tracks:{items:[]}},loadingDisplay:"none"},reducer:S,children:Object(m.jsx)(E,{})})}),document.getElementById("root"))}},[[373,1,2]]]);
//# sourceMappingURL=main.63bdb892.chunk.js.map