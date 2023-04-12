import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/GlobalStyles';

//? pages
import AddCard from './pages/AddCard';

//? contexts
import ContextsProvider from './context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ContextsProvider>
            <AddCard />
        </ContextsProvider>
        <GlobalStyles />
    </React.StrictMode>
);
