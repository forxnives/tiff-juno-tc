import React from 'react';

const ContentRow = ({cat, content}) => {

    return (
        <div className='row'>
            <div className='col col-category'>  
                {cat}
            
            </div>

            <div className='col col-info'> 
            {content}
            </div>
        

        </div>
    )
}

export default ContentRow;