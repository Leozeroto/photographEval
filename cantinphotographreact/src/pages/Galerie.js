import React from 'react'
import Card from '../components/Card'


function Galerie() {
    return (
        <div className='galerie'>
            <h1>Galerie</h1>

            <div className='select'>
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
            </div>
            
            <div className="carte">
                <Card />
            </div>
        </div>
    )
}

export default Galerie