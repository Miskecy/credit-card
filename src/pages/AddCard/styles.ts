import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
	
	display: flex;
	align-items: center;
	justify-content: center;

	color: var(--text);	

	@media (max-width: 726px) {
		margin: 4rem;
		min-height: 71.9rem;
		height: 100%;
	}
`;

export const WrapperContent = styled.div`	
	width: 736px;
	background-color: #1F2937;
	padding: 3.2rem;
	border-radius: 0.8rem;
	
	display: flex;
	flex-direction: column;
	gap: 4.8rem;

	form {
		display: flex;
		
		gap: 6.4rem;

		@media (max-width: 726px) {
			flex-direction: column;				
		}		
	}	
`;

export const WrapperInputs = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
	
	
`;

export const WrapperSecurityCard = styled.div`
	display: flex;
	gap: 1.6rem;

	div:first-child {
		flex: 2;	
	}

	div:last-child {
		flex: 1;		
	}

	@media (max-width: 444px) {
		flex-direction: column;
	}
`;

export const InputGroup = styled.div`
	display: flex;
	flex-direction: column;	
	gap: 0.4rem;

	label {
		font-size: 1.4rem;
		font-weight: 600;
		line-height: 1.6rem;

		display: flex;
		align-items: center;
		gap: 0.4rem;

		//! corrigir bug do span
		span {
			font-size: 0.9rem;				
			background-color: var(--text);
			color: var(--background);
			font-weight: 700;

			height: 11px;
			width: 11px;
			border-radius: 444rem;
			display: inline-block;

			display: flex;
			align-items: center;
			justify-content: center;

			transition: background-color 0.4s;

			&:hover {
				cursor: help;
				color: var(--purple);
			}
		}		
	}

	input {
		outline: none;
		
		border: 1px solid var(--border-input);
		background-color: var(--background);
		padding: 1.2rem;
		font-size: 1.6rem;
		line-height: 2.4rem;
		color: var(--text);
		border-radius: 0.4rem;
		width: 100%;

		transition: border 0.4s;

		&:hover {
			border-width: 1px;
			border-color: #4B5563;
		}

		&:focus {
			border-width: 1.5px;
			border-color: var(--purple);
		}
		
		&::placeholder {
			color: #9CA3AF;
		}
	}
`;

export const WrapperCard = styled.div`
	flex: 1;

	display: flex;
	flex-direction: column;

	@media (max-width: 726px) {
		order: -1;
		position: relative;
		
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;


export const Info = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.05rem;

	span {
		font-size: 1.4rem;
		line-height: 1.6rem;
	}
`;

export const WrapperSubmit = styled.div`
	button {
		width: 100%;
		padding-block: 1.6rem;
		background-color: var(--purple);
		outline: none;
		border: none;
		color: var(--text);
		font-weight: 600;
		font-size: 1.8rem;
		line-height: 2.4rem;
		box-shadow: 0px .4rem 1.6rem rgba(0, 0, 0, 0.1);
		border-radius: 0.4rem;

		transition: background-color 0.4s;
		cursor: pointer;

		&:hover {
			background-color: #A855F7;
		}

		&:focus {
			background-color: #9333EA;
		}
	}
`;



