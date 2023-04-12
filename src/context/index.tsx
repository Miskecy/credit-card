import React from 'react';
import { CreditCardInfoProvider } from './creditCardInfo';

type Props = {
    children?: React.ReactNode;
};

const ContextsProvider: React.FC<Props> = ({ children }) => {
    return <CreditCardInfoProvider>{children}</CreditCardInfoProvider>;
};

export default ContextsProvider;
