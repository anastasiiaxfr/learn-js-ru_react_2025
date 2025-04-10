'use client';
import { store } from '../../../redux/store';
import { Provider } from 'react-redux';
import ThemeProvider from '../../../components/Context/ThemeContext';
import AuthProvider from '../../../components/Context/AuthContext';



export const Providers = ({ children }) => {
    return <Provider store={store}>
        <ThemeProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </ThemeProvider>
    </Provider>;
};