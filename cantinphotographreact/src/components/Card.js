import React from 'react'

function Card(props) {
    return (
        <div className='card'>
            <img
                src={props.img}
                alt="Avatar"
            />
            <div class="container">
                <h4>
                    <b>{props.h4}</b>
                </h4>
                <p>{props.p}</p>
            </div>
        </div>
    )
}

export default Card

