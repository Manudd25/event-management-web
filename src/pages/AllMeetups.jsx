import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from 'react';



function AllMeetupsPage() {
  const [meetups, setMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch('https://react-getting-started-ea48d-default-rtdb.firebaseio.com/meetups.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch meetups.')
      }
      return response.json()
    })
    .then((data) => {
      const loadedMeetups = [];

      for (const key in data) {
        loadedMeetups.push({
          id: key, 
          title: data[key].title,
          image: data[key].image,
          address: data[key].address,
          description: data[key].description,
        });
      }

      setMeetups(loadedMeetups); // updating the meetups
      setIsLoading(false); // Set loading state to false once data is fetched
    })
    .catch((err) => {
      setError(err.message)
      setIsLoading(false);
    })
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>
  }


    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={meetups}/>
        </section>
    )
}

export default AllMeetupsPage;