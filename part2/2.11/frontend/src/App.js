import { useState } from 'react';

function App() {
  const baseURL = process.env.REACT_APP_BACKEND_URL || '/api'

  const [notes, setNotes] = useState([])

  const getNotes = async () => {
    const response = await fetch(`${baseURL}/api/notes`)
    const notes = await response.json()

    setNotes(notes)
  }
  
  return (
    <div>
      <h1>Welcome to frontend</h1>
      <button type="submit" onClick={getNotes}>Show notes</button>
      <ul>
        {notes.length > 0 && notes.map(note => (
          <li key={note.id}>{note.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
