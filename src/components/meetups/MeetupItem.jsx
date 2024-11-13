/* eslint-disable react/prop-types */
import classes from './MeetupItem.module.css'
import { useContext } from 'react';
import FavoritesContext from '../../store/FavoriteContext';

function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext);

    function toggleFavoriteStatusHandler() {
        if (favoritesCtx.itemIsFavorite(props.id)) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id, 
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            })
        }

    }

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    return(
        <li className={classes.item}>
            <div>
                <img className={classes.image} src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatusHandler}>
                    {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
            </div>
        </li>
    )
}
export default MeetupItem;