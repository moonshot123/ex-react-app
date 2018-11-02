import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './movielist.css'

Movielist.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes ={
    genre: PropTypes.string.isRequired
}

function Movielist({title, poster, genres, synopsis}){
    return (

        <div className="col-mg-12">
            
        <div className="Movie">
            <div className="Movie__Column ">
                <MoviePoster poster={poster} alt={title} />
            </div>   
            <div className="Movie__Column ">
                <h1>{title}</h1>
                <div className="badge badge-primary ">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)} 
                </div>
                <div className="blockquote text-center">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />   
                </div>
            </div>
        </div>
        </div>



    )
}

function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}

function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}


export default Movielist