import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/sass/styles.sass'
import { restaurants } from './mock.js'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App data={restaurants} />
    </StrictMode>
)
