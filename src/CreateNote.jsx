import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function CreateNote(props) {

    const [expand, setExpand] = useState(false)

    const [note, setNote] = useState({
        title: "",
        content: ""
    });


    const InputEvent = (event) => {
        const value = event.target.value
        const name = event.target.name
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        })
    }

    const addEvent = () => {
        props.passNote(note)
        setNote({
            title: "",
            content: ""
        })
    }

    const expandIt = () => {
        setExpand(true)
    }

    const collapseIt = () => {
        setExpand(false)
    }


    return (
        <div className='main_note' onDoubleClick={collapseIt}>
            <form>
                {expand ?
                    <input type="text" name='title' value={note.title} onChange={InputEvent} placeholder='Title' autoComplete='off' /> : null}

                <textarea name="content" id="" cols="" rows="" value={note.content} onClick={expandIt} onChange={InputEvent} placeholder='Take a note...'></textarea>

                {expand ?
                    <Button onClick={addEvent}>
                        <AddIcon className='plus_sign' />
                    </Button> : null}

            </form>
        </div>
    )
}

export default CreateNote