import {useState } from 'react'
import Alku from './components/Alku'
import Note from './components/Note'

const App = (props) => {

  const [notes, setNotes] = useState(props.notes)
  //const [newNote, setNewNote] = useState('' )
  const [showAll, setShowAll] = useState(true)
  const [newNote2, setNewNote2] = useState('' )
  

  /*const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }*/

 /* const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }*/

  const handleNoteChange2 = (event) => {
    console.log(event.target.value)
    setNewNote2(event.target.value)
  }
  const notesToShow = showAll
    ? notes
    :notes.filter(note => note.ryhma.includes(newNote2))

  return (
    <div>
      <Alku/>
      <div>
        <button onClick= {() => setShowAll(!showAll)}>
         {showAll ? 'Näyttää kaikki' : 'Suodattaa kategoriat' }
        </button>
        <form>
        <input value = {newNote2}
        onChange = {handleNoteChange2}/>
      </form>
      </div>
      <ul>
        {notesToShow.map(note => 
        <Note key ={note.id} note={note} />
        )}
      </ul>
      
      
    </div>
    
  )
  
}


export default App


/* Lisänappi
<form onSubmit={addNote}>
        <input value = {newNote}
        onChange = {handleNoteChange}/>
        <button type="submit">save</button>
      </form>

      */