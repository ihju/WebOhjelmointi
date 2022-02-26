import React from 'react';

const Note = ({note}) => {
    return (
        <div>
    <img  src = {`/kuvat/${note.kuva}`} />
        <li>Tuotteen nimi: {note.nimi}</li>
        <li>Hinta:  {note.hinta}</li>
        <li> Saatavuus: {note.varastossa}</li>
        <br></br>
        <br></br>
        </div>

    )
}
export default Note