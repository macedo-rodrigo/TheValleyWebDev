import "./ButtonBar.css";

const ButtonBar = ({currentPage, goPrevious, goNext }) => {


    return (
        <div className="button-bar-container">
            <button className="button-back-forward" onClick={goPrevious}>PREVIOUS</button>
            <p className="current-page">{currentPage}</p>
            <button className="button-back-forward" onClick={goNext}>NEXT</button>
        </div>
    )

}

export default ButtonBar;