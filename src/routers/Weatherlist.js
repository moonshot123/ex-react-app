import React  from 'react'
import PropTypes from 'prop-types';
import Sun from './sun'
import Cloud from './cloud'
import Snow from './snow'
import Rain from './rain'

Weatherlist.propTypes={
    temp : PropTypes.number.isRequired,
    main : PropTypes.string.isRequired
}



// main => 맑음: Clear, 구름: Clouds, 비: Rain, 눈: Snow    
//          <Sun /> 
//          <Cloud />
//          <Rain />
//          <Snow />


 function _searchcomponent (main) {
    
    console.log("날씨정보 메인123"+main)

    switch (main) {
        case 'Clouds':
          return <Cloud />
          
        case 'Clear':
          return <Sun /> 
          
        case 'Rain':
          return <Rain />
         
        case 'Snow':
          return <Snow />
          
        default:
        console.log("여기로 빠졌어???")
        break;
         
      }
}


     //날씨 별로 다른 컴포넌트를 불러오도록 개발  (sun.js, cloud.js, rain.js, snow.js)
function Weatherlist( {temp,main} ) {
    console.log("확인확인1"+main)
    console.log("확인확인2"+temp)

    return(
        <div className="weather_main">
           <h4>오늘 서울의 날씨는</h4>
           <h3>{temp}도</h3>
           {_searchcomponent(main) }
           <h3>입니다.</h3>         
        </div>
    )
}

export default Weatherlist;
