import "./App.css"
import { Route, Routes } from 'react-router-dom';
import AllMeetupPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from './pages/layout/Layout'

function App() {

  return(
    <Layout>
    
 
    <Routes>

     <Route path='/' element={<AllMeetupPage />} />

     <Route path="/new-meetup" element={<NewMeetupPage />} />
    

     <Route path="/favorites" element={<FavoritesPage />} />
     

    </Routes>

    
    </Layout>
  )
}


export default App
