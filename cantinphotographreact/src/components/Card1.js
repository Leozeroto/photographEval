import React from 'react'

function Card1(props) {
    return (
        <div className='card'>
            <img alt=''>{props.img}</img>
            <p>{props.p}</p>
        </div>
    )
}

export default Card1

