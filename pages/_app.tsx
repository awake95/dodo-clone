import '../css/style.css'
import React from 'react';
import {initializeApp} from 'firebase/app';
import type {AppProps} from 'next/app'
import {Provider} from 'react-redux'
import {store} from "../store";

function MyApp({Component, pageProps}: AppProps) {
    const firebaseConfig = {
        apiKey: "AIzaSyCsI0GVpSyGfk7y8Hx4-0CGbsA3BQt2KL4",
        authDomain: "dodo-e25c2.firebaseapp.com",
        projectId: "dodo-e25c2",
        storageBucket: "dodo-e25c2.appspot.com",
        messagingSenderId: "777392114007",
        appId: "1:777392114007:web:321bfe6351619868a0d612"
    }

    initializeApp(firebaseConfig);

    return (
        <Provider store={store}>
            <Component {...pageProps}/>
        </Provider>
    )
}

export default MyApp
