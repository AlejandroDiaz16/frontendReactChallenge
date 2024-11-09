import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './currency';
import languageReducer from './language';

const store = configureStore({
    reducer: {
        language: languageReducer,
        currency: currencyReducer
    }
});

export default store