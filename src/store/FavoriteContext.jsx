/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider({ children }) {
    // Load favorites from localStorage when the component mounts
    const loadFavoritesFromStorage = () => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
        return storedFavorites ? storedFavorites : [];
    };

    const [userFavorites, setUserFavorites] = useState(loadFavoritesFromStorage);

    useEffect(() => {
        // Save favorites to localStorage whenever they change
        localStorage.setItem('favorites', JSON.stringify(userFavorites));
    }, [userFavorites]);

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => [...prevUserFavorites, favoriteMeetup]);
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites((prevUserFavorites) =>
            prevUserFavorites.filter((meetup) => meetup.id !== meetupId)
        );
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some((meetup) => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    };

    return <FavoritesContext.Provider value={context}>
        {children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;