import React, { useEffect, useState, useMemo } from 'react';
import { useField } from '@unform/core';
import { useIMask } from 'react-imask';

import { useCreditCardInfo } from '../../../hooks/useCreditCardInfo';

import * as S from './styles';

import Warning from '../../../assets/warning.svg';

interface Props {
    name: string;
    label?: string;
    mask?: any;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

export default function InputMask({ name, label, mask, ...rest }: InputProps) {
    //const inputRef = useRef<HTMLInputElement>(null);
    const [opts, setOpts] = useState({} as any);
    const {
        ref,
        maskRef,
        value,
        setValue,
        unmaskedValue,
        setUnmaskedValue,
        typedValue,
        setTypedValue,
    } = useIMask(opts /* { onAccept, onComplete } */);

    const {
        fieldName,
        defaultValue = unmaskedValue,
        registerField,
        error,
    } = useField(name);

    const { setCardName, setCardNumber, setCardValidity, setCardCvv } =
        useCreditCardInfo();

    React.useEffect(() => {
        if (name == 'cardName') setCardName(value);
        if (name == 'cardNumber') setCardNumber(unmaskedValue);
        if (name == 'cardDate') setCardValidity(unmaskedValue);
        if (name == 'cardCvv') setCardCvv(value);
    }, [value]);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: maskRef,
            getValue: ref => {
                return ref.current.unmaskedValue;
            },
            setValue: (ref, value) => {
                console.log(value);
                ref.current.value = value;
            },
            clearValue: ref => {
                ref.current.value = '';
            },
        });
    }, [fieldName, registerField]);

    useMemo(() => {
        if (mask) {
            setOpts(mask);
        }
    }, [mask, setOpts]);

    return (
        <S.Container isErrored={!!error}>
            {label && <label htmlFor={fieldName}>{label}</label>}

            <input
                id={fieldName}
                ref={ref}
                defaultValue={defaultValue}
                {...rest}
            />

            {error && (
                <div>
                    <img src={Warning} alt="Shield" />
                    <span>{error}</span>
                </div>
            )}
        </S.Container>
    );
}
