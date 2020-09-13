import React, { useEffect } from 'react';

const Cast = ({id}) => {


    
    const API_KEY = 'd17532e59bebbbee29d974df5c3772d7';

    async function castFetch(id) {

        let response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
        let json = await response.json()
        return json
        
    }

    useEffect(()=>{
        async function onIdChange () {

        }

        onIdChange()
    },[id])




    return (
        <div>
            

        </div>
    )
}

export default Cast