const Note = ({note}) => {
    return (
        <div>
            <li> tähän kuva</li>
        <li>Tuotteen nimi: {note.nimi}</li>
        <li>Hinta:  {note.hinta}</li>
        <li> Saatavuus: {note.varastossa}</li>
        <br></br>
        <br></br>
        </div>

    )
}
export default Note