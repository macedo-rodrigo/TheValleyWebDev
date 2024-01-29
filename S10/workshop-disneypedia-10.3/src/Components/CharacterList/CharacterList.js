import React, { useEffect } from "react";
import "./CharacterList.css";
import ButtonBar from "../ButtonBar/ButtonBar";
import CharacterCard from "../CharacterCard/CharacterCard";
import CustomModal from "../CustomModal/CustomModal";

const API_URL = "https://api.disneyapi.dev/character?page="

const CharacterList = () => {

    // Lista de personajes
    const [characterList, setCharacterList] = React.useState([])
    // Página actual
    const [currentPage, setCurrentPage] = React.useState(1)
    // Personagem clicado
    const [clickedCharacter, setClickedCharacter] = React.useState(0)
    // Modal visible: true o falso
    const [modalOpen, setModalOpen] = React.useState(false)

    useEffect(() => {
        // LLAMADA AL API (P1)
        //setLoading(true)

        fetch(API_URL + currentPage)
            .then((response) => response.json())
            .then((data) => {
                /*setBookList(data.items)
                setLoading(false)*/
                setCharacterList(data);
                console.log('DATA:', data);
            })
            .catch((error) => {
                
                alert("Oops! Ha ocurrido un error inesperado.")
                console.log('Error fetching the API: ' + error)
            })

    }, [currentPage, modalOpen]);

    // Funcion página actual
    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else {
            alert("Keep calm: you are on first page alredy")
        }
    }

    const nextPage = () => {
        if (currentPage >= 1 && characterList.nextPage !== null) {
            setCurrentPage(currentPage + 1);
        }
    }

    // Função handleClick
    const handleClick = (characterId) => {
        setClickedCharacter(characterId);
        setModalOpen(true);
        console.log("El id del personaje es " + characterId)
    }

    return (
        <>

            <ButtonBar
                currentPage={currentPage}
                goPrevious={previousPage}
                goNext={nextPage} />

            <h1>DISNEYPEDIA</h1>

            {characterList.data && characterList.data.map((character) => {
                return (
                    <CharacterCard
                        key={character._id}
                        imageUrl={character.imageUrl}
                        name={character.name}
                        handleClick={() => handleClick(character._id)} />
                );
            })}

            <CustomModal
                isOpen={modalOpen}
                characterId={clickedCharacter}
                closeModal={()=>{setModalOpen(false)}}
            />

        </>
    )
}

export default CharacterList;