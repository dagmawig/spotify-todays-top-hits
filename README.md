# Spotify Today's Top Hits App
This app uses spotify api to retrieve todays top hits tracks and displays them in a cover flow slideshow style. Each track has a popularity flame the color of which ranges from green to red based on the spotify's popularity rating of the track that ranges from 0-100.

Underneath the track slideshow there is a radar chart that uses the track's features such as danceability, liveness etc.. and shows that in the chart for the active track in the slideshow.

# App is published at https://dagmawig.github.io/spotify-todays-top-hits/

## Server side
Server side code is located at https://glitch.com/edit/#!/spotifytophits?path=server.js

### Services and Functions Used
I used axios method to make https request to server side
I used glitch.com to host server code.
I used useState hook to manage app state.

### Backend
Backend git commits located at https://github.com/dagmawig/spotify-todays-top-hits-backend