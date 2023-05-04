import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({ note }) => {
	return (
		<Link to={`/edit-note/${note.id}`} className="note">
			<h4 className='note__title'>{note.title.length > 40 ? note.title.substr(0, 40) + '...' : note.title}</h4>
			<p className='note__date'>{note.date}</p>
		</Link>
	)
}

export default NoteItem
