import styled from 'styled-components';

import CardBackImg from '../../assets/card/card-back.png';
import CardFrontImg from '../../assets/card/card-front.png';

export const CardFront = styled.div`
	background: url(${CardFrontImg}) no-repeat center center;

	margin-top: .7rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 28rem;
    height: 18.8rem;
`;

export const CardBack = styled.div`
	background: url(${CardBackImg}) no-repeat center center;
	
	transform: rotateY(-180deg);
`;

export const CreditCard = styled.div`	
    height: 18.8rem;	
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	perspective: 6000rem;

	h1 {
		font-size: 1.6rem;
	}

	> div {
		width: 28rem;
    	height: 18.8rem;

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

	&.flip ${CardFront} {
		transform: rotateY(180deg);
	}

	&.flip ${CardBack} {
		transform: rotateY(0deg);
	}

	@media (max-width: 726px) {
		height: 25vh;	
		width: 28rem;	
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
	

	display: flex;
	gap: 1rem;

	> div {
		letter-spacing: 0.3rem;
		display: flex;
		justify-content: start;
		align-items: center;
		padding-block: 0.5rem;

		p {
			opacity: 0.5;
			font-size: 2rem;
			line-height: 2rem;
		}

		h1 {
			font-size: 1.4rem;
			line-height: 2rem;
		}
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
`;

export const CardFrontDate = styled.div`	
	display: flex;

	font-size: 1rem;
	letter-spacing: 0.3rem;

	> div {
		display: flex;

		p {
			font-size: 2rem;
			line-height: 2rem;
			opacity: 0.5;
		}
		
		h1 {
			font-size: 1.4rem;
			line-height: 2rem;
		}
	}
`;

export const CardCvv = styled.div`
	position: absolute;
	right: 7rem;
	bottom: 6rem;

	font-size: 1.6rem;
	line-height: 1.6rem;
	letter-spacing: 0.2rem;
	color: var(--background);	

	> div {
		display: flex;

		h1 {
			color: var(--background);		
		}

		p {
			opacity: 0.8;
			font-size: 2rem;
		}
	}
`;
