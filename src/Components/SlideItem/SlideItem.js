import React from 'react';




const SlideItem = ({key, image, title}) => (

        
            image ?
            (        
                <div className='slick-slide' key={key} >

                    <img className='slick-slide-image' src={`https://image.tmdb.org/t/p/w185${image}`} alt={title} title={title}/>
        
                </div>
            ):
            (                
                <div className='slick-slide missing' key={key} >

                    <div className='slick-slide-image' title={title}>
                        <span>{title}</span><br/>
                        <span>IMAGE NOT AVAILABLE</span>
                    </div>

                </div>
            )
        
)


export default SlideItem;