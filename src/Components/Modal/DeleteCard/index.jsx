import React, {useContext, useEffect} from 'react';
import * as Styled from './Styled';
import {Modal} from '../../../GlobalStates/contexts';

export default function DeleteCard() {
	const {showRemoveModal, setShowRemoveModal} = useContext(Modal);

	useEffect(() => {
		const keyDownHandler = (event) => {
			if (event.key === 'Escape' || event.key === 'Esc') {
				event.preventDefault();
				setShowRemoveModal(false);
			}
		};
		document.addEventListener('keydown', keyDownHandler);
		return () => {
			document.removeEventListener('keydown', keyDownHandler);
		};
	}, [setShowRemoveModal, showRemoveModal]);

	function closeModal() {
		setShowRemoveModal(false);
	}

	return (
		<Styled.FullScreen show={showRemoveModal} onKeyUp={() => alert('oLá')}>
			<Styled.Cancel onClick={() => closeModal()}>X</Styled.Cancel>
			<Styled.Container>
				<Styled.Picture>
					<img src='img/icons/trash-modal.svg' alt='Excluir' />
				</Styled.Picture>
				<Styled.Title>Excluir</Styled.Title>
				<small>
					<b>Certeza que deseja excluir?</b>
				</small>
				<Styled.Divider />
				<Styled.Button delete type='button' onClick={() => alert('Funcionalidade ainda não implementada!')}>
					Excluir
				</Styled.Button>
				<Styled.Button cancel type='button' onClick={() => closeModal()}>
					Cancelar
				</Styled.Button>
			</Styled.Container>
		</Styled.FullScreen>
	);
}
