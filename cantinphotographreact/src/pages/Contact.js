import React from 'react'
import { Input } from '@material-tailwind/react'
import { Textarea } from "@material-tailwind/react";


function Contact() {
    return (
        <form>
            <div className='text-sm w-72  
                              mr-3 py-5 px-4 h-2 items-center justify-center'>
                <Input variant="standard" label="Prénom" />
            </div>

            <div className='TextInput flex w-72 flex-row gap-6'>
                <Input variant="standard" label="Nom" />
            </div>

            <div className='TextInput flex w-72 flex-row gap-6'>
                <Input variant="standard" label="Email" />
            </div>

            <div className='w-96'>
                <Textarea label="Message" />
            </div>

        </form>

    )
}

export default Contact