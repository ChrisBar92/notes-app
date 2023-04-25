import React from 'react'
import { CiSearch } from 'react-icons/ci'

const Notes = () => {
	return (
		<section>
			<header className="notes__header">
				<h2 className="notes__heading">My Notes</h2>
				<input className="notes__input" type="text" autoFocus placeholder="Keyword..." />
				<button className="notes__btn">
					<CiSearch />
				</button>
			</header>
			<div className="notes__container"></div>
		</section>
	)
}

export default Notes
