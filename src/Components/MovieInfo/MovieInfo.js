import React from 'react';

const MovieInfo = ({title, poster, backdrop, overview}) => {

    const backdropUrl = `https://image.tmdb.org/t/p/w1280${backdrop}`

    const sectionStyle = {
        width: "100%",
        height: "94vh",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.79), rgba(0, 0, 0, 0.99)), url(" + backdropUrl + ")" 
        };

    

    return (

        <section className='info' style={ sectionStyle }>


            <div className='info-container'>

                <div className='info-container-box' >

                    <div className='box'>
                        <img src={`https://image.tmdb.org/t/p/w342${poster}`} ></img>


                        <div className='details'>
                            <div className='details-inner'>
                                <h1>{title}</h1>

                                <span>{overview}</span>
                            </div>


                        </div>


                    </div>




                </div>


            </div>



            <div className='info-dummy'>

            </div>


            {/* <h1>{title}</h1> */}
        </section>

    )

}

export default MovieInfo

