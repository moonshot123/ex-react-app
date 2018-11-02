import React, { Component } from 'react';
import Movielist from './Movielist';


//1.영화페이지 랜딩할때 api정보 가져옴(데이터 없으면 로딩페이지잠깐 나옴)
//2.json파일 가져와서 정보 뿌림 
//3.sorting하기, 평점,최신순


class Movie extends Component{

    state = {};

    //render끝나면 함수 실행
    componentDidMount(){
        this._getMovie();
    }

    //
    _renderMovie = () => {
        const movies = this.state.movies.map(movie => {
            return (
              <Movielist
                title={movie.title_english}
                poster={movie.large_cover_image}
                key={movie.id}
                genres={movie.genres}
                synopsis={movie.synopsis}
              />
            );
          });
          return movies;
    }

    //무비변수에 데이터를 담고 setState해라
    _getMovie = async () => {
        const movies = await this._callMovieApi();
        this.setState({
        movies
    });
    }

    //영화api데이터 가져옴
    _callMovieApi =() =>{

        return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
            .then(response => response.json())
            .then(json => json.data.movies)
            .catch(err => console.log(err));
          
    } 

    render(){
        const { movies } = this.state;
        
        return(
            console.log("renderdid"),
            <div>
                <h2>영화정보</h2>
                 {movies ? this._renderMovie() :"Loding"}   
            </div>
        )
    }

}

export default Movie