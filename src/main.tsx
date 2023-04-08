import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/GlobalStyles';

//? pages
import CardPayment from './pages/CardPayment';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <CardPayment />
        <GlobalStyles />
    </React.StrictMode>
);
