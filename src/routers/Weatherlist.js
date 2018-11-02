import React  from 'react'
import PropTypes from 'prop-types';
import Sun from './sun'
import Cloud from './cloud'
import Snow from './snow'
import Rain from './rain'

Weatherlist.prototypes={
    temp : PropTypes.string.isRequired,
    main : PropTypes.string.isRequired
}



// main     맑음: Clear, 구름: Clouds, 비: Rain, 눈: Snow    

//날씨 별로 다른 컴포넌트를 불러오도록 개발  (sun.js, cloud.js, rain.js, snow.js)
function Weatherlist(temp,main) {
    return(
        <div className="weather_main">
           <Sun /> 
           <Cloud />
           <Rain />
           <Snow />
        </div>
    )
}

export default Weatherlist;
