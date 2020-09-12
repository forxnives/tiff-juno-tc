import React from 'react';






const SlideItem = ({index, image, setSelectedMovie, title}) => {

    return (
        // <div onClick={() => setSelectedMovie(title)}><Slide index={1}><img src={`https://image.tmdb.org/t/p/w185${image}`} alt=""/></Slide></div>        
        // <Slide index={index}><img src={`https://image.tmdb.org/t/p/w185${image}`} alt=""/></Slide>        

        <div className='slick-slide' key={index} >

            <img className='slick-slide-image' src={`https://image.tmdb.org/t/p/w185${image}`} alt={title}/>

        
        
        
        
        </div>        
    )
}

export default SlideItem;