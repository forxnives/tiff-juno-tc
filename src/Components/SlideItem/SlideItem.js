import React from 'react';
import { Slide } from 'pure-react-carousel';





const SlideItem = ({index, image, setSelectedMovie, title}) => {

    return (
        // <div onClick={() => setSelectedMovie(title)}><Slide index={1}><img src={`https://image.tmdb.org/t/p/w185${image}`} alt=""/></Slide></div>        
        // <Slide index={index}><img src={`https://image.tmdb.org/t/p/w185${image}`} alt=""/></Slide>        

        <div style={{ height: 278, width: 185, overflow: 'hidden', background: '#EEE' }}> <img src={`https://image.tmdb.org/t/p/w185${image}`} alt={title}/>    </div>        
    )
}

export default SlideItem;