import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { v4 as uuid } from 'uuid'
import useCreateDate from '../components/useCreateDate'

const CreateNote = ({ setNotes }) => {
	const [title, setTitle] = useState('')
	const [details, setDetails] = useState('')
	const date = useCreateDate()
	const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()

		if (title && details) {
			const note = { id: uuid(), title, details, date }
			// add tgus bite ti tge Bites array
			setNotes(prevNotes => [note, ...prevNotes])

			//redirect to home page
			navigate('/notes-app')
		}
	}

	return (
		<section>
			<header className="create-note__header">
				<Link to="/notes-app" className="btn">
					<IoIosArrowBack />
				</Link>
				<button className="create-note__btn btn" onClick={handleSubmit}>
					Save
				</button>
			</header>
			<form className="create-note__form" onSubmit={handleSubmit}>
				<input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} autoFocus />
				<textarea
					rows="28"
					placeholder="Note Details..."
					value={details}
					onChange={e => setDetails(e.target.value)}></textarea>
			</form>
		</section>
	)
}

export default CreateNote
