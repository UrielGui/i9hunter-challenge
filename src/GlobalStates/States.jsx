import React, {useState} from 'react';
import {Pokemon, Modal} from './contexts';

export default function States({children}) {
	const [pokemon, setPokemon] = useState('');
	const [offset, setOffset] = useState(0);
	const [showRemoveModal, setShowRemoveModal] = useState(false);
	const [showNewCardModal, setShowNewCardModal] = useState(false);
	const [editCard, setEditCard] = useState('');
	return (
		<>
			<Pokemon.Provider value={{pokemon, setPokemon, offset, setOffset}}>
				<Modal.Provider
					value={{showNewCardModal, setShowNewCardModal, showRemoveModal, setShowRemoveModal, editCard, setEditCard}}
				>
					{children}
				</Modal.Provider>
			</Pokemon.Provider>
		</>
	);
}
