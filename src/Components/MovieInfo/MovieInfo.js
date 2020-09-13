import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';

const MovieInfo = ({title, poster, id}) => {


    const [ currentMovie, setCurrentMovie ] = useState(id)



    const API_KEY = 'd17532e59bebbbee29d974df5c3772d7';

    async function movieFetch(id) {
        console.log(id)
        let response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
        let json = await response.json()
        return json
        
    }

    useEffect(() => {


        async function onIdChange() {
            let movieObj = await movieFetch(id);
            setCurrentMovie(movieObj)
        }

        onIdChange()

    }, [id])



    useEffect(() => {
        console.log(currentMovie)



    }, [currentMovie]) 



    useEffect(() => {

        console.log('refreshed')
        
    }) 

    const backdroptest = `https://image.tmdb.org/t/p/w1280${currentMovie.backdrop_path}`

    const sectionStyle = {
        width: "100%",
        height: "94vh",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.79), rgba(0, 0, 0, 0.99)), url(" + backdroptest + ")" 
        };



    return (

        <section className='info' style={ sectionStyle }>

            <div className='info-container'>

                <div className='info-container-box' >

                    <div className='box'>

                        <img src={`https://image.tmdb.org/t/p/w342${poster}`} ></img>

                        <div className='details'>

                            <Details 
                                    id={id}
                                    title={title} 
                                    overview={currentMovie.overview} 
                                    genres={currentMovie.genres}  
                                    tagline={currentMovie.tagline}
                                    runtime={currentMovie.runtime}
                            />

                            

                        </div>

                    </div>

                </div>

            </div>

            <div className='info-dummy'>

            </div>

        </section>

    )

}

export default MovieInfo

