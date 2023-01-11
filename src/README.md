# React Weather
A simple weather app built with React Native

# Inspiration
I wanted to learn how to make apps using React Native. Instead of inventing an app, I wanted to try and see how hard would it be to implement one of my favourite weather apps: [Pocket Weather Australia](https://itunes.apple.com/au/app/pocket-weather-australia/id546266910?mt=8). Full credits for user experience goes to them.

The app architecture/structure is mostly based on ideas I've seen in the Facebook's F8 app. You can read more about it on their web site: http://makeitopen.com/.  

# Development stack
+ [Flow](http://flowtype.org/) was enabled to catch typing errors in React Native JavaScript code
+ [Realm](https://realm.io/) for React Native is used to persist data
+ I used [Nuclide](http://nuclide.io/) and [Visual Studio Code](https://code.visualstudio.com/) on OSX, both have great support for React Native app development
+ I used git for version control, and stored progress on GitHub.
+ Currently only tested on an iOS device

# APIs
+ Weather data is retrieved from http://openweathermap.org/
+ Australia postcode and suburb data is retrieved from http://postcodeapi.com.au/
+ You can see examples of API data in [react-weather/api](https://github.com/stage88/react-weather/tree/master/api)

# Note about API data
The weather data retrived from Open Weather is not very accurate. Most of the time, the weather forecast is not correct.
The most reliable Australian weather data is hosted by Australian Bureau of Meteorology, however it is not very API friendly.  

# External packages
+ [react-native-parallax-scroll-view](https://github.com/jaysoo/react-native-parallax-scroll-view): A ScrollView-like component with parallax and sticky header support. I use a customised version of the component to modify behaviour of animations.
+ [react-swipeable-views](https://github.com/oliviertassinari/react-swipeable-views): A React component for swipeable views

# Weather images
Images are used _without permission_ from Google Weather, for example: [Canberra Weather](https://www.google.com.au/?gws_rd=ssl#safe=active&q=Canberra+weather).



imges
-------------- | --------------
<img src="https://raw.githubusercontent.com/stage88/react-weather/master/screenshots/pw-1.PNG" width="300"> | <img src="https://raw.githubusercontent.com/stage88/react-weather/master/screenshots/rw-1.PNG" width="300">
<img src="https://raw.githubusercontent.com/stage88/react-weather/master/screenshots/pw-2.PNG" width="300"> | <img src="https://raw.githubusercontent.com/stage88/react-weather/master/screenshots/rw-2.PNG" width="300">
<img src="https://raw.githubusercontent.com/stage88/react-weather/master/screenshots/pw-3.PNG" width="300"> | <img src="https://raw.githubusercontent.com/stage88/react-weather/master/screenshots/rw-3.PNG" width="300">
<img src="https://raw.githubusercontent.com/stage88/react-weather/master/screenshots/pw-4.PNG" width="300"> | <img src="https://raw.githubusercontent.com/stage88/react-weather/master/screenshots/rw-4.PNG" width="300">

# Running

## Clone & install

+ Clone this repo `https://github.com/lior92/weather_app.git`
+ run `npm install`

## API 
+ API source https://developer.accuweather.com/
+ I used three endpoints: location autocomplete, current weather, 5-day daily forecast
+ The API requests is limited to 50 requests per day!! Use wisely ;)




# Feedback

Feedback is always welcome. Feel free to contact me, I would love to know if you notice something that can be done better. Please be nice, this is my first React app.