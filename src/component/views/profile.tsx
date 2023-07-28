import { Box, Center, Heading, Image } from '@chakra-ui/react';
import myicon from '../../assets/gild-icon.jpg';
import Contact from '../parts/contact';

function Profile() {
    return (
        <Box w="100%" h="100%" mb="5px" bg="blackAlpha.100">
            <Center>
                <Image mt="80px" borderRadius="full" boxSize="150px" src={myicon} alt="myicon" />
            </Center>
            <Center>
            <Heading as="h2" mt="50px" size='3xl' color="blackAlpha.700">Keito Oishi</Heading>
            </Center>
            <Center>
                <Contact />
            </Center>
        </Box>
    )
}
export default Profile;