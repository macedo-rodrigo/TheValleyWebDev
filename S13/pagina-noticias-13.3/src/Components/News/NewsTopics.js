import { Box, Button, Container, Flex, Heading, Text, Image, Input } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";



const NewsTopics = () => {
    const { topic } = useParams();
    const [currentPage, setCurrentPage] = React.useState(1)
    const info = useFetch(topic, currentPage);
    const [searchText, setSearchText] = React.useState("");


    const onClickNext = useCallback(() => {
        currentPage >= 1 && currentPage < 5 ?
            (setCurrentPage(currentPage + 1)) :
            alert("Already on the last page!")
    }, [currentPage])

    const onClickPrevious = useCallback(() => {
        currentPage > 1 ?
            (setCurrentPage(currentPage - 1)) :
            alert("You're on the first page!")
    }, [currentPage])
    

    const filteredArticles = info.articles?.filter((article) => {
        return article.title.toLowerCase().includes(searchText.toLocaleLowerCase())
    })

    const searchReference = React.useRef(null)

    const onSubmit = React.useCallback((e) => {
        e.preventDefault();
        setSearchText(searchReference.current.value);

        //searchReference.current.value = "";

    }, [searchText]);

    return (
        <div className="page" display="flex">
            <form onSubmit={onSubmit}>
                <input ref={searchReference} type="text" placeholder="Search an article..."></input>
            </form>
            <Flex>
                <Button onClick={() => onClickNext()}>Next</Button>
                <Container>
                    {filteredArticles?.map((article) => {
                        return (
                            <Box key={article._id} width="400px" p={4}>
                                <Text>{article.published_date}</Text>
                                <Heading size="md">{article.title}</Heading>
                                <Text>{article.excerpt}</Text>
                            </Box>
                        )
                    })}
                </Container>
                <Button onClick={() => onClickPrevious()}>Previous</Button>
            </Flex>
        </div>
    )
}

export default NewsTopics;