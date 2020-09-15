import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';




const MovieInfo = ({title, poster, id}) => {


    const [ currentMovie, setCurrentMovie ] = useState(id)

    const API_KEY = 'd17532e59bebbbee29d974df5c3772d7';


    // fetch movie details //

    async function movieFetch(id) {

        let response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
        let json = await response.json()
        return json
        
    }

    // set current movie state upon recieving new id from App.js //

    useEffect(() => {


        async function onIdChange() {
            let movieObj = await movieFetch(id);
            setCurrentMovie(movieObj)
        }

        onIdChange()

    }, [id])



    // backdrop path //

    const backdrop =  currentMovie.backdrop_path ? (`https://image.tmdb.org/t/p/w1280${currentMovie.backdrop_path}`): null

    // inline style for background //

    const sectionStyle = {
        width: "100%",
        height: "94vh",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.79), rgba(0, 0, 0, 0.99)), url(" + backdrop + ")" 
        };



    return (

        <section className='info' style={ sectionStyle }>

            <div className='info-container'>

                <div className='info-container-box' >

                    <div className='box'>

                        {
                            poster ?
                            (<img title={title} src={`https://image.tmdb.org/t/p/w342${poster}`} ></img>):
                            (<div className='img-missing'>
                                <span>{title}</span>
                                <span>IMAGE NOT AVAILABLE</span>
                            </div>)
                        }

                        

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

