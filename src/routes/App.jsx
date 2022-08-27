import React from 'react'
import AppContext from '../context/AppContext';
import Layout from '@containers/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '@pages/login';
import Home from '@pages/Home'
import NotFound from '@pages/NotFound'
import RecoveryPassword from '@pages/RecoveryPassword'
import SendEmail from '@pages/SendEmail'
import Checkout from '@pages/Checkout'
import CreateAccount from '@pages/CreateAccount'
import MyAccount from '@pages/MyAccount'
import NewPassword from '@pages/NewPassword'
import useInitialState from '../hooks/useInitialState';
import '../styles/global.css'

const App = () => {
    const initialState = useInitialState()
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter >
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/password-recovery" element={<RecoveryPassword />} />
                        <Route path="/send-email" element={<SendEmail />} />
                        <Route path="/new-password" element={<NewPassword />} />
                        <Route path="/account" element={<MyAccount />} />
                        <Route path="/sign-up" element={<CreateAccount />} />
                        <Route path="https://630961f17ca5610aa69841c3--delightful-alfajores-c7b6f2.netlify.app/checkout" element={<Checkout/>} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
};
export default App;