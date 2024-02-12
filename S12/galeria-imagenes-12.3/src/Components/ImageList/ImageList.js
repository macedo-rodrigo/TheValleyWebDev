import React, { useMemo } from "react";
import useFetch from "../../Hooks/useFetch";
import "./ImageList.css";


const API_URL = `https://api.pexels.com/v1/search?query=`

const reducer = (state, action) => {
    const newState = { ...state };
    switch (action.type) {
        case "ADD_FAVORITE":
            return {
                ...newState,
                favorites: [...newState.favorites, action.payload.img]
            };
        case "REMOVE_FAVORITE":
            return {
                ...newState,
                favorites: newState.favorites.filter(favorite => favorite !== action.payload.img)
            };

        default:
            console.error("ACTION TYPE NOT SUPPORTED");

    }
}

const themes = {
    light: {
        name: "Light",
        background:"#d0bdf4",
        fontColor: "#202020",

    },
    dark: {
        name: "Dark",
        background:"#301934",
        fontColor: "#e5eaf5",
    }
}

const ImageList = () => {


    // Estados
    const [searchText, setSearchText] = React.useState("");
    const [themeState, setThemeState] = React.useState(themes.dark)

    // Custom Hook
    const [info] = useFetch(API_URL, searchText);
    let newInfo = { ...info }; // Duplicando el array actual para poder usarlo adentro de otras funciones

    // Reducer
    const [state, dispatch] = React.useReducer(reducer, { favorites: [] });

    // Referencias
    const inputReference = React.useRef(null)

    const onSubmit = React.useCallback((event) => {
        event.preventDefault();
        setSearchText(inputReference.current.value);

        inputReference.current.value = "";
    })

    const clickedElement = React.useCallback((image) => {
        const payloadToAdd = { img: image, };
        dispatch({ type: "ADD_FAVORITE", payload: payloadToAdd });
    }, []);

    const clickedFavorite = React.useCallback((image) => {
        const payloadToRemove = { img: image, };
        dispatch({ type: "REMOVE_FAVORITE", payload: payloadToRemove });
    }, []);

    const sortedList = React.useMemo(() => {
        if (info.photos) {
            console.log("ordenando");
            return info.photos.sort((a, b) => a.alt < b.alt ? -1 : 1);
        }
        return undefined;
    }, [info.photos]); //busque una expresion regular en internet

    const themeChange = () => {
        return setThemeState(themeState ===  themes.light ? themes.dark : themes.light)
    };

    return (
        <div className="wrapper" style={{background: themeState.background, color: themeState.fontColor}}>
            <div className="header">
                <form onSubmit={onSubmit}>
                    <input ref={inputReference} type="text" placeholder="Your search" className="input" />
                </form>
                <button className="theme-button" onClick={themeChange} >Change theme</button>
            </div>
            <div className="main">
                {searchText !== "" ? (
                    <>
                        <h2 className="results-title">Your results:</h2>
                        <div className="card_container">
                            {info.photos && info.photos.map((image) => {
                                return (
                                    <div onClick={() => clickedElement(image)} className="card_info" key={image.id}>
                                        <img className="card_img" src={image.src.medium} alt={image.alt} />
                                        <p className="card_alt">{image.alt}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                ) : (<p className="default-copy">Feels empty... Discover images by typing into the input field! 🖼️🔍</p>)}
            </div>
            <div>
                {state.favorites.length !== 0 ? (
                    <div>
                        <h2 className="results-title">Your favorite ones:</h2>
                        <p className="results-subtitle">(Click again to unlove! ❤️)</p>
                    </div>
                ) : ""}
            </div>
            <div className="card_container">
                {state.favorites && state.favorites.map((favorite) => {
                    return (
                        <div onClick={() => clickedFavorite(favorite)} className="card_info" key={favorite.id}>
                            <img className="card_img" src={favorite.src.medium} alt={favorite.alt} />
                            <p className="card_alt">{favorite.alt} ❤️</p>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}


export default ImageList;