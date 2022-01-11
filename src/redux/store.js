
// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import logger from "redux-logger";

// // const initialState = {
// //     contacts: [],
// // }

// // const reducer = (state = initialState, { type, payload }) => {
// //     switch (type) {
// //         case 'contact/add':
// //             return {
// //                 contacts: [...state.contacts + payload],
// //             };
// //         case 'contact/delete':
// //             return {
// //                 contacts: [...state.contacts - payload],
// //             };
// //         default:
// //             return state;
// //     }
// // };
// const middleware = [...getDefaultMiddleware(), logger]
// const store = configureStore({
//     reducer: {
//         contactsReducer,
//     },
//     middleware,
//     devTools: process.env.NODE_ENV === 'development'
// });

// export default store;
import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducers from './contacts/contacts-reducer';

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

export const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducers),

    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    ],
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);