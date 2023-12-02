import React from 'react'
import Card from '../components/Card'


function Galerie() {
    return (
        <>
            <h1 className='titreGalerie'>Voici ma galerie photo</h1>

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

            <div className='cardRow'>
                <Card
                    img={"img/bapt1.jpg"}
                    h4={"Baptême"}
                    p={"Photos de baptême"}
                />
                <Card
                    h4={"Famille"}
                    p={"Photos de famille"}
                />

                <Card
                    h4={"Grossesse"}
                    p={"Photos de grossesse"}
                />

                <Card
                    h4={"Portrait"}
                    p={"Photos de portrait"}
                />

                <Card
                    h4={"Bébé"}
                    p={"Photos de bébé"}
                />


                <Card
                    h4={"Couple"}
                    p={"Photos de couple"}
                />


                <Card
                    h4={"Mariage"}
                    p={"Photos de mariage"}
                />

            </div>




        </>


    )
}

export default Galerie