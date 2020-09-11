import React from 'react';

const MovieInfo = ({title, backdrop}) => {

    const backdropUrl = `https://image.tmdb.org/t/p/w1280${backdrop}`

    const sectionStyle = {
        width: "100%",
        height: "100vh",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.79), rgba(0, 0, 0, 0.99)), url(" + backdropUrl + ")" 
        };


    return (

        <section className='info' style={ sectionStyle }>
            {/* <h1>{title}</h1> */}
        </section>

    )

}

export default MovieInfo

