import React from 'react'
import { CiSearch } from 'react-icons/ci'
import dummyNotes from '../dummyNotes'
import { Link } from 'react-router-dom'
import { BsPlusLg } from 'react-icons/bs'
import NoteItem from '../components/NoteItem'

const Notes = () => {
	return (
		<section>
			<header className="notes__header">
				<h2 className="notes__heading">My Notes</h2>
				{/* <input className="notes__input" type="text" autoFocus placeholder="Keyword..." /> */}
				<button className="notes__btn btn">
					<CiSearch />
				</button>
			</header>
			<div className="notes__container">
				{dummyNotes.map(note => (
					<NoteItem key={note.id} note={note} />
				))}
			</div>
			<Link className="notes__btn btn add__btn">
				<BsPlusLg />
			</Link>
		</section>
	)
}

export default Notes
