import React from "react";

const useFetch = (apiUrl, searchText) => { // Los paràmetros que quiero que tenga mi hook

    const [info, setInfo] = React.useState([]); // El array que viene de la API

    const options = {
        headers: {
            'Authorization': "BDBDGqtIul17NF7ml3Pr7mn6bz9bP1lMEJmNvMudijggRpPzcjC70z1L",
        }
    };

    // useEffect para que la API se renderice una sola vez
    React.useEffect(() => {
        if (searchText !== "") {
            fetch(apiUrl + searchText, options)
                .then(response => response.json())
                .then(data => setInfo(data))
                .catch((error) => {
                    console.error('Error fetching the API: ' + error);
                    // Manejar el error adecuadamente en el componente que utiliza el hook
                });
        } else {
            setInfo([]); // Si searchText está vacío, establecer info en un array vacío
        }
    }, [searchText]);

    return [info]
}

export default useFetch;



