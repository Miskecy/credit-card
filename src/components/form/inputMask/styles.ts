import styled from 'styled-components';

type Props = {
	isErrored: boolean;
}

export const Container = styled.div<Props>`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;

	div {
		display: flex;
		align-items: center;
		justify-content: start;
		gap: 0.5rem;
		color: #FB7185;
		font-size: 1.4rem;
		line-height: 1.6rem;

		img {
			width: 1.6rem;
		}
	}

	input {
		${props => props.isErrored && `border: 1px solid #FB7185;`}			

		&:focus, &:hover {
			${props => props.isErrored && `border-color: #FB7185;`}	
		}
	}
`;
