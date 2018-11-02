import React from 'react'
import PropTypes from 'prop-types'
import  "./Spacelist.css";


spacelist.propTypes ={
    date        : PropTypes.string.isRequired,
    explanation : PropTypes.string.isRequired,
    media_type  : PropTypes.string.isRequired,
    title       : PropTypes.string.isRequired,
    url         : PropTypes.string.isRequired   
}
//이미지 동영상 확인 함수필요.



function spacelist({date,explanation,media_type,title,url}) {
    return(
        <div className="space_main">
        <h2>NASA 오늘의 사진{date}</h2>
            <div className="space_Image">
            {media_type === 'image' ? (
            <img onClick={() => window.open(url)} src={url} alt="space"/>
            ) : (
            <iframe title="space-video" src={url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
            )
            }             
            </div>
            <div className="space_etc">
                <h3>{title}</h3>
                <h5>{explanation}</h5>
            </div>          
        </div>
    )
}

//api구조
/*
const spacelist={
    "date":"2018-11-01",
    "explanation":"Will spacecraft Hayabusa2 be able to land safely on asteroid Ryugu? Since arriving in June, pictures show that the surface of kilometer-sized Ryugu is covered with boulders, so that finding a flat enough area for the bus-sized spacecraft to touch down is proving a challenge. In the featured video, the shadow of Japan's robotic Hayabusa2 can be seen on the rugged face of Ryugu while ascending last week from a touchdown rehearsal only 20 meters over the surface.  Previously, small frisbee-sized landers detached from Hayabusa2, made contact with the diamond-shaped asteroid's surface, and started hopping around.  Studying Ryugu could tell humanity not only about the minor planet's surface and interior, but about what materials were available in the early Solar System for the development of life.  The touchdown of the Hayabusa2 mother ship is slated for early next year, hopefully followed by a soil sample collection for return to Earth.",
    "media_type":"video",
    //"service_version":"v1",
    "title":"Hayabusa2 Ascends from Asteroid Ryugu",
    "url":"https://www.youtube.com/embed/tEPQ-DuSViQ?rel=0"
}
*/


export default spacelist;