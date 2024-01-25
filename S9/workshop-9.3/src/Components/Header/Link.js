
const Link = (props) => {

    const linkStyle = props.linkStyle

    const renderLink = () => {
        return (
            linkStyle === "button" ?
                <button className="button">{props.text}</button> :
                <a className="link">{props.text}</a>
        );

    }
    return (

        renderLink()
    );
}

export default Link;