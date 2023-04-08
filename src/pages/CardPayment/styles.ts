import styled from 'styled-components';

import CardBackImg from '../../assets/card/card-back.png';
import CardFrontImg from '../../assets/card/card-front.png';

export const Container = styled.div`
	height: 100vh;
	
	display: flex;
	align-items: center;
	justify-content: center;

	color: var(--text);	
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
	}
`;

// export const Form = styled.form`
// 	display: flex;
// 	gap: 6.4rem;
// `;

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
`;

export const CardFront = styled.div`
	background: url(${CardFrontImg}) no-repeat center center;

	margin-top: .7rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const CardBack = styled.div`
	background: url(${CardBackImg}) no-repeat center center;
	
	transform: rotateY(-180deg);
`;

export const CreditCard = styled.div`
	width: 100%;
	height: 21rem;		

	perspective: 6000rem;

	> div {
		width: inherit;
		height: inherit;

		position: absolute;
		top: 0;
		right: 0;
		z-index: 100;		

		backface-visibility: hidden;
		transform-style: preserve-3d;
		transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	&:hover ${CardFront} {
		transform: rotateY(180deg);
	}

	&:hover ${CardBack} {
		transform: rotateY(0deg);
	}
`;

export const CardFrontTop = styled.div`
	display: flex;
	justify-content: space-between;
	padding-inline: 2.4rem;	
	
	width: 28rem;

	img {
		width: 3.2rem;
		height: 3.2rem;
	}
`;

export const CardFrontMiddle = styled.div`
	display: flex;
	justify-content: start;
	padding-inline: 2.4rem;
	width: 28rem;
	margin-top: 3rem;
`;

export const CardFrontNumber = styled.div`	
	font-size: 1.4rem;
	letter-spacing: 0.6rem;

	p {
		opacity: 0.5;
	}
`;

export const CardFrontBottom = styled.div`
	display: flex;
	justify-content: space-between;
	padding-inline: 2.4rem;
	width: 28rem;
	margin-top: 1.4rem;
	margin-bottom: 1.4rem;
`;

export const CardFrontName = styled.div`
	opacity: 0.5;
	font-size: 1.4rem;
	line-height: 1.6rem;
`;

export const CardFrontDate = styled.div`	
	display: flex;

	font-size: 1.4rem;
	line-height: 1.6rem;
	letter-spacing: 0.6rem;

	p {
		opacity: 0.5;
	}	
`;



// export const FlipCardInner = styled.div`	
// 	transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
// 	transform-style: preserve-3d;
// `;

// export const FlipCard = styled.div`
// 	perspective: 6000;

// 	width: 100%;
// 	height: 80%;
// 	//! corrigir area do cartão
// 	/* background-color: red; */

// 	&:hover ${FlipCardInner} {
// 		transform: rotateY(180deg);
// 	}
// `;

// export const FlipCardFront = styled.div`
// 	margin-top: .5rem;

// 	position: absolute;
// 	width: 100%;
// 	height: 100%;

// 	backface-visibility: hidden;
// `;

// export const FlipCardBack = styled.div`
// 	position: absolute;
// 	width: 100%;
// 	height: 100%;
// 	backface-visibility: hidden;

// 	transform: rotateY(180deg);
// `;

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



