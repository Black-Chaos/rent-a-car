import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './components/App/App';
import { persistor, store } from './redux/store';
import { Loader } from 'components/Loader/Loader';

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={<Loader/>} persistor={persistor}>
                <BrowserRouter basename="/rent-a-car">
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    // </React.StrictMode>
);
