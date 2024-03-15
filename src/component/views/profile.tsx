import { Box, Center, Heading, Image, Link, Text } from '@chakra-ui/react';
import myicon from '../../assets/gild-icon_s.webp';
import Contact from '../parts/contact';

function Profile() {
    return (
        <Box w="100%" h="100%" mb="5px" bg="blackAlpha.100">
            <Center>
                <Image mt="80px" borderRadius="full" boxSize="xs" src={myicon} alt="myicon" className="lazyload"/>
            </Center>
            <Center>
            <Heading as="h2" mt="50px" size='3xl' color="blackAlpha.700">Keito Oishi</Heading>
            </Center>
            <Center><Text as="b" fontFamily="heading" mt="5px" ml="5%" mr="5%" size='sm' color="blackAlpha.700" align="center">
                筑波大学 情報学群 知識情報・図書館学類 4年 <Text as="u"><Link href="https://fusioncomplab.org/index.html" isExternal>融合知能デザイン研究室所属</Link></Text>
            </Text></Center>
            <Center><Text as="b" fontFamily="heading"  m="5" w="75%" size='sm' color="blackAlpha.700">豊田高専からの3年次編入、高専時代は手話における読話認識の研究を行い、現在はプロジェクト型クラウドソーシングの研究の傍ら、研究室のマイクロタスク型クラウドソーシングサービスの開発に従事。主にインフラ、時々バックエンドを担当。</Text></Center>
            <Center>
                <Contact />
            </Center>
        </Box>
    )
}
export default Profile;
