import React from 'react';

const ContentRow = ({cat, content}) => (
    
        <div className='row'>
            <div className='col col-category'>  
                <span style={{'fontSize': '16px'}}>{cat}</span>
            
            </div>

            <div className='col col-info'> 
                <span>{content}</span>
            </div>
        

        </div>
)


export default ContentRow;