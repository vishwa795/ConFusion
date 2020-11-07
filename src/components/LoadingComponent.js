import React from 'react';
import Loader from 'react-loader-spinner';
export const Loading = () =>{
    return(
        <div className="col-12">
            <Loader type="Puff" color="#9575CD" height={45} width={45}/>
            <p>Loading . . .</p>
        </div>
    )
    

}