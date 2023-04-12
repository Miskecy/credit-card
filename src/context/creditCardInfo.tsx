import React from 'react';

export interface CreditCardInfoContextData {
    cardName: string;
    setCardName: React.Dispatch<React.SetStateAction<string>>;
    cardNumber: string;
    setCardNumber: React.Dispatch<React.SetStateAction<string>>;
    cardValidity: string;
    setCardValidity: React.Dispatch<React.SetStateAction<string>>;
    cardCvv: string;
    setCardCvv: React.Dispatch<React.SetStateAction<string>>;
}

type Props = {
    children?: React.ReactNode;
};

const CreditCardInfoContext = React.createContext<CreditCardInfoContextData>(
    {} as CreditCardInfoContextData
);

const CreditCardInfoProvider: React.FC<Props> = ({ children }) => {
    const [cardName, setCardName] = React.useState('');
    const [cardNumber, setCardNumber] = React.useState('');
    const [cardValidity, setCardValidity] = React.useState('');
    const [cardCvv, setCardCvv] = React.useState('');

    return (
        <CreditCardInfoContext.Provider
            value={{
                cardName,
                setCardName,
                cardNumber,
                setCardNumber,
                cardValidity,
                setCardValidity,
                cardCvv,
                setCardCvv,
            }}
        >
            {children}
        </CreditCardInfoContext.Provider>
    );
};

export { CreditCardInfoProvider, CreditCardInfoContext };
