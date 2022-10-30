import React, {useContext} from 'react';
import * as Styled from './Styled';
import {Modal} from '../../../GlobalStates/contexts';

export default function Cards({data}) {
	const {setShowRemoveModal, setShowNewCardModal, setEditCard} = useContext(Modal);

	function openEditCard(name) {
		setShowNewCardModal(true);
		setEditCard(name);
	}
	return (
		<Styled.Container>
			{data.name ? (
				<Styled.Card key={data.id}>
					<Styled.Picture>
						<img src={data.sprites.front_default} alt='' width='90' />
					</Styled.Picture>
					<Styled.Divider />
					<Styled.Title>{data.name}</Styled.Title>
					<Styled.Options>
						<Styled.Button mright type='button' onClick={() => setShowRemoveModal(true)}>
							<Styled.Icon src='img/icons/trash.svg' alt='Excluir' /> Excluir
						</Styled.Button>
						<Styled.Button type='button' onClick={() => openEditCard(data.name)}>
							<Styled.Icon src='img/icons/edit.svg' alt='Editar' /> Editar
						</Styled.Button>
					</Styled.Options>
				</Styled.Card>
			) : (
				data &&
				data?.map((item) => {
					return (
						<Styled.Card key={item.data.id}>
							<Styled.Picture>
								<img src={item.data.sprites.front_default} alt='' width='90' />
							</Styled.Picture>
							<Styled.Divider />
							<Styled.Title>{item.data.name}</Styled.Title>
							<Styled.Options>
								<Styled.Button mright type='button' onClick={() => setShowRemoveModal(true)}>
									<Styled.Icon src='img/icons/trash.svg' alt='Excluir' /> Excluir
								</Styled.Button>
								<Styled.Button type='button' onClick={() => openEditCard(item.data.name)}>
									<Styled.Icon src='img/icons/edit.svg' alt='Editar' /> Editar
								</Styled.Button>
							</Styled.Options>
						</Styled.Card>
					);
				})
			)}
		</Styled.Container>
	);
}
