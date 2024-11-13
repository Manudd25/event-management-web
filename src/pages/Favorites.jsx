import { useContext } from 'react';
import FavoritesContext from '../store/FavoriteContext'
import MeetupList from '../components/meetups/MeetupList';
import classes from './layout/Layout.module.css'


function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext)

    let content; 

    if(favoritesCtx.totalFavorites === 0) {
        content = <p className={classes.fav}>You got no favorites yet. Start adding some?</p>  
    } else {
        content = <MeetupList meetups={favoritesCtx.favorites}/>

    }
    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )
}

export default FavoritesPage;