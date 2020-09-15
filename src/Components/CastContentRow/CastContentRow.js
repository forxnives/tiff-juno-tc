import React from 'react';

const CastContentRow = ({profileImg, name, character, catalog}) => {


    // render 'known for' movies //

    const knownFor = catalog.map( movie => (
        movie  + ', '
    ) )



    return (

        <div className='actor-row'>

            <table>

                <tbody>
                    <tr>
                    <td>
                        <div className='pic-name'>  

                            <table>
                                <tbody>
                                    <tr>
                                        <td style={{border: 'none'}}>

                                            {
                                                profileImg ? 
                                                (<div className='pic'> 
                                                    <img src={`http://image.tmdb.org/t/p/w185${profileImg}`}></img>
                                                </div>):
                                                (<div className='pic'>
                                                    <div className='pic-missing'>
                                                        <span>NOT AVAILABLE</span>

                                                    </div> 
                                                    
                                                </div>)
                                            }


                                        </td>
                                        <td style={{border: 'none'}}>
                                            <div className='name'>
                    
                                                <span>{name}</span>
                                                <span>{ '"'+character+'"'}</span>

                                            </div>
                                        </td>    

                                    </tr>
                                </tbody>
                            </table>          


                        </div>
                    </td>

                    <td>
                        <div className='knownfor'>

                            <span>Known For:</span>
                
                            <span>{knownFor}</span>

                        </div>
                    </td>

                    </tr>

                </tbody>
            </table>

        </div>
    )
}

export default CastContentRow;