import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Link} from 'react-router-dom';
import Main from './routers/Main'
import Weather from './routers/Weather'
import Sapce from './routers/Space'
import Movie from './routers/Movie'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <div className="">
        <div className="jumbotron">
            Hello react project here!<br/>
            <Link to ="/"><button type="button" className="btn btn-primary mainbutton">HOME</button></Link>           
            <Link to ="/weather"><button type="button" className="btn btn-primary">오늘의 날씨</button></Link>
            <Link to ="/movie"><button type="button" className="btn btn-primary">영화정보</button></Link>
            <Link to ="/space"><button type="button" className="btn btn-primary">오늘의 사진</button></Link>           
        </div> 
        <Route exact path='/'component={Main}/>
        <Route path='/weather'component={Weather}/>
        <Route path='/space'component={Sapce}/>
        <Route path='/movie'component={Movie}/>                
        </div>

        </Router>
      </div>
    );
  }
}

export default App;
