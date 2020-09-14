import React from 'react';

const CastContentRow = ({profileImg, name, character, catalog}) => {

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
                            <div className='pic'> 
                                <img src={`http://image.tmdb.org/t/p/w185${profileImg}`}></img>
                            </div>
                            <div className='name'>
                    
                                <span>{name}</span>
                                <span>{ '"'+character+'"'}</span>

                            </div>

                        </div>
                    </td>


                    {/* <td>

                    </td> */}




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