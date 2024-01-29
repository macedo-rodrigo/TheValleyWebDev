import React, { useEffect } from "react";
import "./CustomModal.css";

const URL_API_CHARACTER = "https://api.disneyapi.dev/character/";


const CustomModal = ({ isOpen, characterId, closeModal }) => {

    // Variable para el objeto con la info del personaje
    const [character, setCharacter] = React.useState({})

    useEffect(() => {
        fetch(URL_API_CHARACTER + characterId).
            then((response) => response.json())
            .then((data) => {
                /*setBookList(data.items)
                setLoading(false)*/
                setCharacter(data);
                console.log('DATA:', data);
                console.log('El id:', characterId);
            })
            .catch((error) => {
                /*setError(true)
                setLoading(false)*/
                alert("Oops! Ha ocurrido un error al cargar tu personaje.")
                console.log('Error fetching the API: ' + error)
            })

    }, [characterId, isOpen])

    return (
        <div className={`custom-modal ${isOpen ? "open" : "closed"}`}>
            {isOpen && (
                <div className="modal-content">
                    <h3>{character?.data?.name || 'Unknown Character'}</h3>
                    <img src={character?.data?.imageUrl || ''} alt={character?.data.name || 'Character Image'} />
                    <p>Allies: {character?.data?.allies?.length ? character.data.allies.join(", ") : 'N/A'}</p>
                    <p>Enemies: {character?.data?.enemies?.length ? character.data.enemies.join(", ") : 'N/A'}</p>
                    <p>Movies: {character?.data?.films?.length ? character.data.films.join(", ") : 'N/A'}</p>
                    <p>Park Attractions: {character?.data?.parkAttractions?.length ? character.data.parkAttractions.join(", ") : 'N/A'}</p>
                    <p>Short Films: {character?.data?.shortFilms?.length ? character.data.shortFilms.join(", ") : 'N/A'}</p>
                    <p>TV Shows: {character?.data?.tvShows?.length ? character.data.tvShows.join(", ") : 'N/A'}</p>
                    <p>Video Games: {character?.data?.videoGames?.length ? character.data.videoGames.join(", ") : 'N/A'}</p>
                    <button onClick={closeModal}>Close</button>
                </div>
            )}
        </div>
    );
};

export default CustomModal;