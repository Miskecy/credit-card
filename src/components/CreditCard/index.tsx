import React from 'react';

import * as S from './styles';

import MastercardFlag from '../../assets/flag/Mastercard.svg';
import EloFlag from '../../assets/flag/Elo.svg';
import Contactless from '../../assets/ContactlessPayment.svg';
import VisaFlag from '../../assets/flag/Visa.svg';

type Props = {
    showback: boolean;
    cardNumber: string;
    cardHolderName: string;
    cardValidity: string;
    cardCvv: string;
};

const CreditCard: React.FC<Props> = ({
    showback,
    cardNumber,
    cardHolderName,
    cardValidity,
    cardCvv,
}) => {
    const setCurrentFlag = (currentFlag: any) => {
        if (currentFlag == '2' || currentFlag == '4') {
            return MastercardFlag;
        } else if (currentFlag == '5') {
            return EloFlag;
        }
        return VisaFlag;
    };

    const formatedValidity = (date: any) => {
        const formatedDate = date.padEnd(4, '•').match(/.{1,2}/g);
        return (
            <div>
                <h1>{formatedDate[0]}</h1>
                <p>/</p>
                <h1>{formatedDate[1]}</h1>
            </div>
        );
    };

    return (
        <S.CreditCard className={`${showback ? 'flip' : ''}`}>
            <S.CardFront>
                <S.CardFrontTop>
                    <img src={setCurrentFlag(cardNumber[0])} alt="Visa" />
                    <img src={Contactless} alt="Contactless" />
                </S.CardFrontTop>
                <S.CardFrontMiddle>
                    <S.CardFrontNumber>
                        {cardNumber
                            .padEnd(16, '•')
                            .match(/.{1,4}/g)
                            ?.map((subtring, index) => (
                                <div key={index}>
                                    {subtring
                                        .split('')
                                        .map((item, idx) =>
                                            item === '•' ? (
                                                <p key={idx}>{item}</p>
                                            ) : (
                                                <h1 key={idx}>{item}</h1>
                                            )
                                        )}
                                </div>
                            ))}
                    </S.CardFrontNumber>
                </S.CardFrontMiddle>
                <S.CardFrontBottom>
                    <S.CardFrontName>
                        {cardHolderName || 'Seu nome aqui'}
                    </S.CardFrontName>
                    <S.CardFrontDate>
                        {formatedValidity(cardValidity)}
                    </S.CardFrontDate>
                </S.CardFrontBottom>
            </S.CardFront>
            <S.CardBack>
                <S.CardCvv>
                    {cardCvv
                        .padEnd(3, '•')
                        .match(/.{1,3}/g)
                        ?.map((subtring, index) => {
                            return (
                                <div key={index}>
                                    {subtring
                                        .split('')
                                        .map((item, idx) =>
                                            item === '•' ? (
                                                <p key={idx}>{item}</p>
                                            ) : (
                                                <h1 key={idx}>{item}</h1>
                                            )
                                        )}
                                </div>
                            );
                        })}
                </S.CardCvv>
            </S.CardBack>
        </S.CreditCard>
    );
};

export default CreditCard;
