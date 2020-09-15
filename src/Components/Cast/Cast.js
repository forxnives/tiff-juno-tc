import React, { useState, useEffect } from 'react';

import CastContentRow from '../CastContentRow/CastContentRow';




const Cast = ({id, title}) => {

    const [castData, setCastData] = useState(null)
    
    const API_KEY = 'd17532e59bebbbee29d974df5c3772d7';


    // fetch movie's cast //

    async function castFetch(movieId) {

        let response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`); 
        let json = await response.json()
        return json.cast
        
    }

    // fetch actor's catalog //

    async function catalogFetch(castId) {

        let response = await fetch(`https://api.themoviedb.org/3/person/${castId}/movie_credits?api_key=${API_KEY}&language=en-US`) 
        let json = await response.json()

        return mostPopular(json.cast)
    }

    // remove current movie from actor's catalog and return 7 most popular movie titles //

    const mostPopular = catalogArray => {

        catalogArray.splice(catalogArray.indexOf(catalogArray.find(movie => (movie.title === title))), 1)

        return catalogArray.sort((a, b) => (b.popularity - a.popularity)).slice(0,7).map(movie => (movie.title))

    } 

    // return data for first 7 cast members upon recieving new id prop //


    useEffect(()=>{
        async function onIdChange () {


            const cast = await castFetch(id);
            
            const promises = await cast.slice(0,7).map(async actor => {

                const catalog = await catalogFetch(actor.id)
                
                return { name: actor.name, character: actor.character, profileImg: actor.profile_path, catalog: catalog }
        
            })

            const castData = await Promise.all(promises)
            setCastData(castData)

        }

        onIdChange()
    },[id])




    return (


        <div>

            {
                castData ? 
                
                (
                    castData.map(actor => 
                        (<CastContentRow profileImg={actor.profileImg} name={actor.name} character={actor.character} catalog={actor.catalog} />)
                    )
                ):
                null
            }


        </div>
    )
}

export default Cast