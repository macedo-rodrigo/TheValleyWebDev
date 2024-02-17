import { NavLink } from "react-router-dom";
import { Button, Flex, Heading, Text } from '@chakra-ui/react';

const News = () => {


    return (
        <Flex className="page">
            <Heading>What do you wanna know?</Heading>
            <Text>Pick a topic and stay up to date!</Text>
            <NavLink to="/news/sport"><Button>Sports</Button></NavLink>
            <NavLink to="/news/economics"><Button>Economy</Button></NavLink>
            <NavLink to="/news/tech"><Button>Tecnology</Button></NavLink>
        </Flex>
    )
}

export default News;