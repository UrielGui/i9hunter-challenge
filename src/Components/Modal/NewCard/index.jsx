import React, {useState, useContext, useEffect} from 'react';
import * as Styled from './Styled';
import {Modal} from '../../../GlobalStates/contexts';

export default function NewCard() {
	const {showNewCardModal, setShowNewCardModal, editCard, setEditCard} = useContext(Modal);
	const [startAnimation, setStartAnimation] = useState(100);
	const [endAnimation, setEndAnimation] = useState(0);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		if (showNewCardModal) {
			setShowModal(true);
			setStartAnimation(100);
			setEndAnimation(0);
		} else {
			setStartAnimation(0);
			setEndAnimation(100);
			if (editCard) {
				setEditCard('');
			}
		}
	}, [editCard, setEditCard, showNewCardModal]);

	useEffect(() => {
		const keyDownHandler = (event) => {
			if (event.key === 'Escape' || event.key === 'Esc') {
				event.preventDefault();
				setShowNewCardModal(false);
			}
		};
		document.addEventListener('keydown', keyDownHandler);
		return () => {
			document.removeEventListener('keydown', keyDownHandler);
		};
	}, [setShowNewCardModal]);

	return (
		<Styled.FullScreen show={showModal} newCardWidth1={startAnimation} newCardWidth2={endAnimation}>
			<Styled.CloseNewCard type='button' onClick={() => setShowNewCardModal(false)}>
				X
			</Styled.CloseNewCard>
			<Styled.NewCard>
				<Styled.Title>
					<img src='img/icons/create.svg' alt='Criar novo Card' />
					<h1>{editCard ? 'Editar Card' : 'Criar Card'}</h1>
				</Styled.Title>
				<Styled.Divider />
				<Styled.InputTitle>Digite um nome para o card</Styled.InputTitle>
				<Styled.Input name='title' placeholder='Digite o título' defaultValue={editCard} />
				<Styled.InputTitle>Inclua uma imagem para aparecer no card</Styled.InputTitle>
				<Styled.FileInput placeholder='Selecionar arquivo' type='file' name='file' />
				<Styled.Divider />
				<Styled.Button type='submit' onClick={() => alert('Funcionalidade ainda não implementada!')}>
					{editCard ? 'Editar Card' : 'Criar Card'}
				</Styled.Button>
			</Styled.NewCard>
		</Styled.FullScreen>
	);
}
