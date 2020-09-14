import React, { useState } from 'react';
import ContentRow from '../ContentRow/ContentRow';
import Cast from '../Cast/Cast';



const Details = ({id, title, overview, genres, tagline, runtime}) => {

    const [ tabToggle, toggleTabToggle ] =  useState(false)







    const genreList = genres => {
        if (genres) {
            return (genres.map(genre => (
                <span>{genre.name + ', '}</span>
            )))
        }
        return null
    }








    return (
        
        <div className='details-inner'>

            <div className='tabs'>

                <div onClick={()=> toggleTabToggle(false)} className={`tab ${

                    tabToggle ? 

                    'notselected':

                    'selected'

                }`} >
                    Details
                </div>


                <div onClick={() => toggleTabToggle(true)} className={`tab ${

                    tabToggle ? 
                    'selected':
                    'notselected'

                }`} >
                    Cast
                </div>

            </div>

            <div className='content'>


                {
                    tabToggle ? 
                    <Cast title={title} id={id} /> :
                    (                
                        <div>
                            {/* <ContentRow cat='Title' content={title} /> */}

                            <div> <h2>{title}</h2> </div>

                        {
                            tagline ?
                            (
                                <ContentRow cat='Tagline' content={tagline} />
                            ):
        
                            null
                        }
        
                        <ContentRow cat='Description' content={overview} />
                        <ContentRow cat='Genres' content={genreList(genres)} />
                        <ContentRow cat='Runtime' content={runtime + " minutes"} />

                        </div>
                    )
                }


                    
            </div>


        </div>

    )
}

export default Details