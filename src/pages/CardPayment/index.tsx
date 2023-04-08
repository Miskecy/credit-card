import React from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import InputMask from '../../components/form/inputMask';

//? Images
import Shield from '../../assets/shield.svg';
import Contactless from '../../assets/ContactlessPayment.svg';
import VisaFlag from '../../assets/flag/Visa.svg';

//? Styles
import * as S from './styles';

const CardPayment: React.FC = () => {
    const formRef = React.useRef<FormHandles>(null);

    const handleSubmit: SubmitHandler<FormData> = data => {
        console.log(data);
    };

    return (
        <S.Container>
            <S.WrapperContent>
                <Form id="cardForm" ref={formRef} onSubmit={handleSubmit}>
                    <S.WrapperInputs>
                        <S.InputGroup>
                            <label htmlFor="cardNumber">Número do cartão</label>
                            <InputMask
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                placeholder={'**** **** **** ****'}
                                mask={{ mask: '0000 0000 0000 0000' }}
                            />
                        </S.InputGroup>

                        <S.InputGroup>
                            <label htmlFor="cardName">Nome do titular</label>
                            <InputMask
                                type="text"
                                id="cardName"
                                name="cardName"
                                placeholder={'Nome como está no cartão'}
                                mask={{
                                    mask: /^[A-Z ]+$/i,
                                    prepare: function (str: String) {
                                        return str.toUpperCase();
                                    },
                                    // commit: function (value: any, masked: any) {
                                    // Don't change value manually! All changes should be done in mask!
                                    // This example helps to understand what is really changes, only for demo
                                    //     masked._value = value.toLowerCase(); // Don't do it
                                    // },
                                }}
                            />
                        </S.InputGroup>

                        <S.WrapperSecurityCard>
                            <S.InputGroup>
                                <label htmlFor="cardDate">Validade</label>
                                <InputMask
                                    type="text"
                                    id="cardDate"
                                    name="cardDate"
                                    placeholder={'mm/aa'}
                                    mask={{ mask: '00/00' }}
                                />
                            </S.InputGroup>

                            <S.InputGroup>
                                <label htmlFor="cardCvv">
                                    CVV <span>?</span>
                                </label>
                                <InputMask
                                    type="text"
                                    id="cardCvv"
                                    name="cardCvv"
                                    placeholder={'***'}
                                    mask={{ mask: '000' }}
                                />
                            </S.InputGroup>
                        </S.WrapperSecurityCard>
                    </S.WrapperInputs>

                    <S.WrapperCard>
                        {/* <S.FlipCard>
                            <S.FlipCardInner>
                                <S.FlipCardBack>
                                    <img src={CardBack} alt="Card Back" />
                                </S.FlipCardBack>
                                <S.FlipCardFront>
                                    <img src={CardFront} alt="Card Front" />
                                </S.FlipCardFront>
                            </S.FlipCardInner>
                        </S.FlipCard> */}
                        <S.CreditCard>
                            <S.CardFront>
                                <S.CardFrontTop>
                                    <img src={VisaFlag} alt="Visa" />
                                    <img src={Contactless} alt="Contactless" />
                                </S.CardFrontTop>
                                <S.CardFrontMiddle>
                                    <S.CardFrontNumber>
                                        <p>•••• •••• •••• ••••</p>
                                    </S.CardFrontNumber>
                                </S.CardFrontMiddle>
                                <S.CardFrontBottom>
                                    <S.CardFrontName>
                                        Seu nome aqui
                                    </S.CardFrontName>
                                    <S.CardFrontDate>
                                        <p>••</p>
                                        <span>/</span>
                                        <p>••</p>
                                    </S.CardFrontDate>
                                </S.CardFrontBottom>
                            </S.CardFront>
                            <S.CardBack></S.CardBack>
                        </S.CreditCard>

                        <S.Info>
                            <img src={Shield} alt="Shield" />
                            <span>Seus dados estão seguros</span>
                        </S.Info>
                    </S.WrapperCard>
                </Form>

                <S.WrapperSubmit>
                    <button form="cardForm" type="submit">
                        Adicionar cartão
                    </button>
                </S.WrapperSubmit>
            </S.WrapperContent>
        </S.Container>
    );
};

export default CardPayment;
