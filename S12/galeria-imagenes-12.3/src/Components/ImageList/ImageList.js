import React, { useMemo } from "react";
import useFetch from "../../Hooks/useFetch";
import "./ImageList.css";


const API_URL = `https://api.pexels.com/v1/search?query=`

const ImageList = () => {

    const [searchText, setSearchText] = React.useState("")

    const [info] = useFetch(API_URL, searchText); // Este es el CustomHook

    console.log("La API", info)
    const inputReference = React.useRef(null)

    const onSubmit = React.useCallback((event) => {
        event.preventDefault();
        setSearchText(inputReference.current.value);

        inputReference.current.value = "";
    })

    /*const alphabeticalOrder = useMemo(() => {
        return info.photos && info.photos.map((image) => image.alt).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'accent' }));
    }, [info.photos]); //busque una expresion regular en internet*/

    return (
        <div>
            <div className="header">
                <form onSubmit={onSubmit}>
                    <input ref={inputReference} type="text" placeholder="Your search" className="input" />
                </form>
                <button className="theme-button">Change theme</button>
            </div>
            <div className="main">
                {searchText !== "" ? (
                    <>
                        <h2 className="results-title">Your results:</h2>
                        <div className="card_container">
                            {info.photos && info.photos.map((image) => {
                                return (
                                    <div className="card_info" key={image.id}>
                                        <img className="card_img" src={image.src.original} alt={image.alt} />
                                        <p className="card_alt">{image.alt}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                ) : (<p className="default-copy">Feels empty... Discover images by typing into the input field! 🖼️🔍</p>)}
            </div>
        </div>
    )
}

export default ImageList;