import { Box, Card, CardBody, CardFooter, Center, Divider, Flex, HStack, Heading, Image, Stack, Tag, Text } from "@chakra-ui/react"
import { ReactElement } from 'react'
import logo from "../../../assets/Trabel/TrabelApp-display.png"
import mobile from "../../../assets/Trabel/TrabelApp.png"
import ProductionDetail from '../../parts/product_detail'

function Travel() {
    const discription: ReactElement = (
        <>
        <HStack>
        <Tag colorScheme="blue">React</Tag>
        <Tag colorScheme="yellow">インターンシップ</Tag>
        </HStack>
        
        <Text mt="20px">
        楽天エンジニアインターン時に6人チームで作成した楽天トラベルAPIを使用した宿検索アプリケーション。
        アクセスと同時にユーザの現在地を取得して現在地付近のホテルを検索、プランと距離、値段を表示する。
        金額と距離によってホテルの絞り込みも行うことが出来る。
        </Text>
        <Flex mt="40px">
            <Box>
                <Heading size="lg">技術構成</Heading>
                <Text>React+RakutenTravelAPI</Text>
            </Box>
            <Box ml="30">
                <Heading size="lg">プロダクトイメージ</Heading>
                <Center><Image inlineSize="sm" src={mobile} alt="モバイルイメージ" /></Center>
            </Box>
        </Flex>
        </>
        )
    return (
        <Card maxW='330px'>
    <CardBody>
        <Image
        src={logo}
        alt='Green double couch with wooden legs'
        borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
        <Heading size='md'>トマレルApp</Heading>
        <Text>
        楽天エンジニアインターン時に6人チームで作成した楽天トラベルAPIを使用した宿検索アプリケーション。
        アクセスと同時にユーザの現在地を取得して現在地付近のホテルを検索、プランと距離、値段を表示する。
        金額と距離によってホテルの絞り込みも行うことが出来る。
        </Text>
        </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
        <ProductionDetail title="トマレルApp" description={discription} url=""/>
    </CardFooter>
    </Card>
    )
}
export default Travel;