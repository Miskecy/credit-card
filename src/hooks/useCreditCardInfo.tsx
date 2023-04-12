import React from 'react';
import {
    CreditCardInfoContext,
    CreditCardInfoContextData,
} from '../context/creditCardInfo';

export function useCreditCardInfo(): CreditCardInfoContextData {
    const context = React.useContext(CreditCardInfoContext);

    if (!context) {
        throw new Error(
            'useCreditCardInfo must be used within an CreditCardInfoProvider'
        );
    }

    return context;
}
