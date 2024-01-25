import "./main.css";

const MainContent = (props) => {

    return (
        <div className="main-container">
            <h1 className="text title">{props.title}</h1>
            <p className="text">{props.content}</p>
        </div>
    );
}

export default MainContent;