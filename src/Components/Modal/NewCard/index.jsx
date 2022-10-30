import React, {useState, useContext, useEffect, useCallback} from 'react';
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

	const closeModal = useCallback(() => {
		setShowNewCardModal(false);
		document.getElementById('form').reset();
	}, [setShowNewCardModal]);

	useEffect(() => {
		const keyDownHandler = (event) => {
			if (event.key === 'Escape' || event.key === 'Esc') {
				event.preventDefault();
				closeModal();
			}
		};
		document.addEventListener('keydown', keyDownHandler);
		return () => {
			document.removeEventListener('keydown', keyDownHandler);
		};
	}, [closeModal, setShowNewCardModal]);

	function onSubmit(e) {
		e.preventDefault();
		alert('Funcionalidade ainda não implementada!');
	}

	return (
		<Styled.FullScreen show={showModal} newCardWidth1={startAnimation} newCardWidth2={endAnimation}>
			<Styled.CloseNewCard type='button' onClick={() => closeModal()}>
				X
			</Styled.CloseNewCard>
			<Styled.NewCard>
				<Styled.Title>
					<img src='img/icons/create.svg' alt='Criar novo Card' />
					<h1>{editCard ? 'Editar Card' : 'Criar Card'}</h1>
				</Styled.Title>
				<Styled.Divider />
				<form id='form' onSubmit={onSubmit}>
					<Styled.InputTitle>Digite um nome para o card</Styled.InputTitle>
					<Styled.Input name='title' id='title' placeholder='Digite o título' defaultValue={editCard} />
					<Styled.InputTitle>Inclua uma imagem para aparecer no card</Styled.InputTitle>
					<Styled.FileInput placeholder='Selecionar arquivo' type='file' name='file' />
					<Styled.Divider />
					<Styled.Button type='submit'>{editCard ? 'Editar Card' : 'Criar Card'}</Styled.Button>
				</form>
			</Styled.NewCard>
		</Styled.FullScreen>
	);
}
