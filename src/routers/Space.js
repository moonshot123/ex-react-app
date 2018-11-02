import React, {Component} from 'react'
import Spacelist from './Spacelist';
//나사 api 받아오기
//사진 뿌리기




class Space extends Component{

    state={}

    componentDidMount(){
        this._getSpace();
    }

    _getSpace = async () => {
        const spacelist = await this._getNasaImageapi();
        console.log("정보확인"+spacelist.date)
        this.setState({
            spacelist
        });
    }

    _getNasaImageapi = () => {
        return fetch("https://api.nasa.gov/planetary/apod?api_key=5q6uswo7lQPq6HcC05xDRdcoikRkPCVdIqk6mbxe&date=")
        .then(spacerespones => spacerespones.json())              
        .then(json => json)
        .catch(err => console.log(err));
    }

    _getSpaceReder = () => {
       
       console.log("prop값확인:"+this.state.spacelist.date) 
        return (                
            <Spacelist
            
                 date={this.state.spacelist.date}
                 explanation={this.state.spacelist.explanation}
                 media_type={this.state.spacelist.media_type}
                 title={this.state.spacelist.title}
                 url={this.state.spacelist.url}            
            />
                 
             
        );
        
    }

    
    
    render(){
        const {spacelist} = this.state;
        return(
            <div>
            {console.log("확인"+spacelist)}
            {spacelist ? this._getSpaceReder() : "Loding"}
            </div>
        )
    }
}

//Your API key for whwjddn200@naver.com is:
//나사 api 키 :  dRqm1VGhCIjwyiy5B3q5dgTHDYOERFcrQKCBw5TI


export default Space