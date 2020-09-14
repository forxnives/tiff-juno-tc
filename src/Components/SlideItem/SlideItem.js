import React from 'react';




const SlideItem = ({index, image, title}) => {

    return (
     
        <div className='slick-slide' key={index} >

            <img className='slick-slide-image' src={`https://image.tmdb.org/t/p/w185${image}`} alt={title} title={title}/>
        
        </div>        
    )
}

export default SlideItem;