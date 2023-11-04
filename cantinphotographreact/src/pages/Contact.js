import React from 'react'
// import { Input } from '@material-tailwind/react'
// import { Textarea } from "@material-tailwind/react";


function Contact() {
    return (
        <>
            <form> Formulaire de contact
                <div className='TextInput' >
                    <label>
                        Prénom :
                        <input typeof='text' />
                    </label>
                </div>

                <div className='TextInput' >

                    <label>
                        Nom :
                        <input typeof='text' />
                    </label>
                </div>

                <div className='TextInput' >

                    <label>
                        Email :
                        <input typeof='text' />
                    </label>
                </div>

                <div className='textArea' >

                    <label>
                        Écrivez votre message :
                        <textarea typeof='text' />
                    </label>
                </div>
            </form>
        </>

    )
}

export default Contact