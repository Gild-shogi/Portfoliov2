import { Box, Heading } from '@chakra-ui/react';

interface Props {
    name : string,
    id: string,
}

function Content(props: Props){
    return(
      <Box w="100%" bg="blackAlpha.200">
        <Heading as="h3" ml="15px" pt="5px" pb="5px" size="xl" color="blackAlpha.800" id={props.id}>{props.name}</Heading>
      </Box>
    )
}

export default Content;