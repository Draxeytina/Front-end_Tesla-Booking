import React from 'react'


const Dashbaord = props => {

    return (
        <div>
            <div>
                <h1>Dashbaord</h1>
                <h1>Status: {props.loggedInStatus}</h1>
            </div>
        </div>
    );
}

export default Dashbaord;