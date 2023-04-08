import React, { useEffect, useState, useMemo } from 'react';
import { useField } from '@unform/core';
import { useIMask } from 'react-imask';

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

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: maskRef,
            getValue: ref => {
                return ref.current.unmaskedValue;
            },
            setValue: (ref, value) => {
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
        <>
            {label && <label htmlFor={fieldName}>{label}</label>}

            <input
                id={fieldName}
                ref={ref}
                defaultValue={defaultValue}
                {...rest}
            />

            {error && <span>{error}</span>}
        </>
    );
}
