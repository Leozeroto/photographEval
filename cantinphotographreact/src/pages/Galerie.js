import { useState } from 'react'
import React from 'react'
import Card from '../components/Card'


function Galerie() {

const [filtreGalerie, setFiltreGalerie] = useState ([]);

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
                    img={"/img/couple/couple-437968_640.jpg"}
                    h4={"Baptême"}
                    p={"Photos de baptême"}
                />
                <Card
                    img={"/img/famille/family-2485714_640.jpg"}
                    h4={"Famille"}
                    p={"Photos de famille"}
                />

                <Card
                    img={"/img/grossesse/pregnant-775036_640.jpg"}
                    h4={"Grossesse"}
                    p={"Photos de grossesse"}
                />

                <Card
                    img={"/img/portrait/child-817373_640.jpg"}
                    h4={"Portrait"}
                    p={"Photos de portrait"}
                />

                <Card
                    img={"/img/bebe/bebe1.jpg"}
                    h4={"Bébé"}
                    p={"Photos de bébé"}
                />


                <Card
                    img={"/img/couple/couple-437968_640.jpg"}
                    h4={"Couple"}
                    p={"Photos de couple"}
                />


                <Card
                    img={"/img/mariage/bride-1486004_640.jpg"}
                    h4={"Mariage"}
                    p={"Photos de mariage"}
                />

            </div>




        </>


    )
}

export default Galerie