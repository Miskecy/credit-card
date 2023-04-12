import React from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import InputMask from '../../components/Form/InputMask';

//? Images
import Shield from '../../assets/shield.svg';

//? Styles
import * as S from './styles';

//? Hooks
import { useCreditCardInfo } from '../../hooks/useCreditCardInfo';
import CreditCard from '../../components/CreditCard';

const AddCard: React.FC = () => {
    const formRef = React.useRef<FormHandles>(null);
    const { cardName, cardNumber, cardValidity, cardCvv } = useCreditCardInfo();

    const [showBack, setShowBack] = React.useState(false);

    const handleSubmit: SubmitHandler<FormData> = data => {
        formRef.current?.setErrors({});
        let Errors: any = {};

        if (formRef.current?.getFieldValue('cardNumber').length < 16) {
            Errors = {
                ...Errors,
                cardNumber: 'Insira um número de cartão válido',
            };
        }

        if (formRef.current?.getFieldValue('cardName').length < 3) {
            Errors = { ...Errors, cardName: 'Insira um nome válido' };
        }

        if (formRef.current?.getFieldValue('cardDate').length < 4) {
            Errors = { ...Errors, cardDate: 'Insira uma data válida' };
        }

        if (formRef.current?.getFieldValue('cardCvv').length < 3) {
            Errors = { ...Errors, cardCvv: 'CVV inválido' };
        }

        if (
            Errors.cardNumber ||
            Errors.cardName ||
            Errors.cardDate ||
            Errors.cardCvv
        ) {
            formRef.current?.setErrors(Errors);
            return;
        }

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
                                name="cardNumber"
                                placeholder={'**** **** **** ****'}
                                mask={{ mask: '0000 0000 0000 0000' }}
                            />
                        </S.InputGroup>

                        <S.InputGroup>
                            <label htmlFor="cardName">Nome do titular</label>
                            <InputMask
                                type="text"
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
                                    name="cardDate"
                                    placeholder={'mm/aa'}
                                    mask={{
                                        mask: '00/00',
                                    }}
                                />
                            </S.InputGroup>

                            <S.InputGroup>
                                <label htmlFor="cardCvv">
                                    CVV <span>?</span>
                                </label>
                                <InputMask
                                    type="text"
                                    name="cardCvv"
                                    className="cardCvv"
                                    placeholder={'***'}
                                    mask={{ mask: '000' }}
                                    onFocus={() => setShowBack(true)}
                                    onBlur={() => setShowBack(false)}
                                />
                            </S.InputGroup>
                        </S.WrapperSecurityCard>
                    </S.WrapperInputs>

                    <S.WrapperCard>
                        <CreditCard
                            cardNumber={cardNumber}
                            cardHolderName={cardName}
                            cardValidity={cardValidity}
                            cardCvv={cardCvv}
                            showback={showBack}
                        />

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

export default AddCard;
