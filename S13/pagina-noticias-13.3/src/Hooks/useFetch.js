import { useEffect, useState } from "react";

const useFetch = (topic, page) => {

    const apiUrl = `https://raw.githubusercontent.com/The-Valley-School/react-w5-newspaper/main/api/${topic}/${page}.json`;
    const [sections, setSections] = useState([]);

    useEffect(() => {
        console.log(apiUrl)
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => setSections(data))
            .catch(error => {
                console.error('Error fetching the API:', error);
            });
    }, [apiUrl]);

    return sections;
};

export default useFetch;