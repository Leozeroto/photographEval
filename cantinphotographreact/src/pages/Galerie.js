import React from 'react'
import Card1 from '../components/Card1'
import Card2 from '../components/Card2'


function Galerie() {
    return (
        <div className='galerie'>
            <h1>Galerie</h1>

            <select name='categorie' id='categorie'>
                <option value="">Choisir une catégorie</option>
                <option value="mariage">Mariage</option>
                <option value="grossesse">Grossesse</option>
                <option value="bebe">Bébé</option>
                <option value="famille">Famille</option>
                <option value="bapteme">Baptême</option>
                <option value="couple">Couple</option>
                <option value="portrait">Portrait</option>
            </select>

            <div>
                <Card1 />
                <Card2 />
            </div>

        </div>
    )
}

export default Galerie