import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { FavoritesContextProvider } from './store/FavoriteContext.jsx'

createRoot(document.getElementById('root')).render(
    <FavoritesContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </FavoritesContextProvider>
)
