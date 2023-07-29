import { Box, Card, CardBody, CardFooter, Center, Divider, Flex, HStack, Heading, Image, Stack, Tag, Text } from "@chakra-ui/react"
import { ReactElement } from 'react'
import cook_logo from "../../../assets/cookri/cookri-logo.webp"
import cook_mobile from "../../../assets/cookri/cookri-mobile.webp"
import cool_obj from "../../../assets/cookri/obj.webp"
import ProductionDetail from '../../parts/product_detail'

function Cookri() {
    const hoge: ReactElement = (
        <>
        <HStack>
        <Tag colorScheme="blue">Python</Tag>
        <Tag colorScheme="yellow">スクラム開発</Tag>
        <Tag colorScheme="green">deta.sh</Tag>
        </HStack>
        
        <Text mt="20px">
            「飽きず」に冷蔵庫の食材を使い切りたい自炊をするが、買い物に行くのが「面倒」を解決する「レシピ検索サービス」です。家にない食材をはじくことで、今ある食材でバリエーションに富んだレシピを提案できます。
        </Text>
        <Flex mt="40px">
            <Box>
                <Heading size="lg">技術構成</Heading>
                <Center><Image inlineSize="lg" src={cool_obj} alt="技術構成" /></Center>
            </Box>
            <Box>
                <Heading size="lg">プロダクトイメージ</Heading>
                <Center><Image inlineSize="xm" src={cook_mobile} alt="技術構成" /></Center>
            </Box>
        </Flex>
        </>
        )
    return (
        <Card maxW='330px'>
    <CardBody>
        <Image
        src={cook_logo}
        alt='Green double couch with wooden legs'
        borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
        <Heading size='md'>Cookりさん(コックリさん)</Heading>
        <Text>
        「飽きず」に冷蔵庫の食材を使い切りたい自炊をするが、買い物に行くのが「面倒」を解決する「レシピ検索サービス」です。家にない食材をはじくことで、今ある食材でバリエーションに富んだレシピを提案できます。
        </Text>
        </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
        <ProductionDetail title="Cookりさん" description={hoge} url="https://cookri-san-73qjv4wkwq-an.a.run.app"/>
    </CardFooter>
    </Card>
    )
}
export default Cookri;