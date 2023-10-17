import React from 'react'
import Prestations from '../components/Prestations'

function Tarifs() {
    return (
        <div className='tarifs'>
            <h1>Tarifs et Prestations</h1>

            < Prestations
                h2={'"Juste pour moi" 130 euros'}
                p={'Séance pour une personne, en extérieur ou en studio'}
            />

            < Prestations
                h2={'"Pour deux" 195 euros'}
                p={'Pour deux personnes, en extérieur ou en studio'}
            />

        </div>
    )
}

export default Tarifs