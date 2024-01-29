import "./CharacterCard.css";

// 

const CharacterCard = ({imageUrl, name, handleClick}) => {

    return (
        <button onClick={handleClick} className="character-container">
            <img alt="Disney character" src={imageUrl} />
            <p>{name}</p>
        </button>
    )
}

export default CharacterCard;