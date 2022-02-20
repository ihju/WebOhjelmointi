import React from 'react';

const Note = ({note}) => {
    return (
        <div>
            <img  style={{ margin: "20px 0" }}
        width="100px" src = {note.kuva} alt = {note.nimi}/>
        <li>Tuotteen nimi: {note.nimi}</li>
        <li>Hinta:  {note.hinta}</li>
        <li> Saatavuus: {note.varastossa}</li>
        <br></br>
        <br></br>
        </div>

    )
}
export default Note
