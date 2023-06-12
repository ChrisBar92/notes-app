import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import CreateNote from './pages/CreateNote'
import EditNote from './pages/EditNote'
import { useEffect, useState } from 'react'
import './base.scss'

function App() {
	const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])

	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes))
	}, [notes])

	return (
		<main className='app'>
			<BrowserRouter>
				<Routes>
					<Route path="/notes-app" element={<Notes notes={notes} />} />
					<Route path="/create-note" element={<CreateNote setNotes={setNotes} />} />
					<Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes} />} />
				</Routes>
			</BrowserRouter>
		</main>
	)
}

export default App
