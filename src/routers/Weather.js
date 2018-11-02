import React, {Component} from 'react';
import Weatherlist from './Weatherlist';



class Weather extends Component{

    state={}

    //랜딩후 api정보하도록 함수 생성
    componentDidMount(){
        this._getweather()
    }


    //setstatus부분
    _getweather = async () => {
        const weather = await this._getweatherAPI()
        console.log("API확인:"+weather)
        this.setState({
            weather
            
        })
        console.log("날씨 데이터 확인: "+weather)

    }

    //api 정보가져옴
    _getweatherAPI = () =>{
        return fetch("http://api.openweathermap.org/data/2.5/forecast?q=seoul&APPID=3de5fec001b92fae36593d2280811511") 
          .then(weatherResponse => weatherResponse.json())
          //.then(json => console.log(json))
          .then(json => json)
          .catch(err => console.log(err))        
      }
      
      // 데이터를 weatherlist에 보내줘서 화면에 보여줌
      _renderWeather = () =>{
        console.log("날씨 정보확인"+this.state.weather)
        console.log("날씨 정보확인2"+this.state.weather.list)
        console.log("날씨 정보확인3(기온정보)"+this.state.weather.list[0].main.temp)
        console.log("날씨 정보확인3(날씨정보)"+this.state.weather.list[0].weather[0].main)
        return (
            <Weatherlist 
            temp = {this.state.weather.list[0].main.temp}
            main = {this.state.weather.list[0].weather[0].main}
            />  
          )
       
         
      }
      


    render(){
        const {weather} = this.state
        return(            
            <div>
            {console.log("renderdid")}
            {console.log(weather)}
                {weather ? this._renderWeather() : "LODING"}
            </div>
        )
    }
}

export default Weather


//api키  3de5fec001b92fae36593d2280811511
//api call      http://api.openweathermap.org/data/2.5/forecast?q=seoul&APPID={APIKEY}

// http://api.openweathermap.org/data/2.5/forecast?q=seoul&APPID=3de5fec001b92fae36593d2280811511


            //날씨 api 구조 (json)
//{"cod":"200",
//"message":0.011,
//"cnt":37,
//"list":
//      [
//      {"dt":1541149200,
//      "main":
//          {"temp":279.16,
//          "temp_min":278.88,
//          "temp_max":279.16,
//          "pressure":1029.23,
//          "sea_level":1049.87,
//          "grnd_level":1029.23,
//          "humidity":88,
//          "temp_kf":0.28},
//          "weather":
//                      [
//                      {"id":500,
//                      "main":"Rain",
//                      "description":"light rain",
//                      "icon":"10d"}
//                      ],
//          "clouds":{"all":76},
//          "wind":{"speed":3.67,"deg":211.508},
//          "rain":{"3h":0.065},
//          "sys":{"pod":"d"},
//          "dt_txt":"2018-11-02 09:00:00"}
//          
//           ...
//
//          ]



