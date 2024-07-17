import { Box, Flex, Link, Tag } from "@chakra-ui/react";
import { ReactElement } from "react";

interface Props {
    author: string[];
    title: string;
    conference: string;
    year: number;
    award: string;
    pages: string;
    peer_review: string;
    international: string;
    link: string
    other: ReactElement | null;
}

const peerReview: {[name:string]: string} = {
    "0": "査読なし",
    "1": "査読あり"
}

const international: {[name:string]: string} = {
    "0": "国内会議",
    "1": "国際会議"
}

function PublicationsDetail(props: Props){
    // const {isOpen, onOpen, onClose} = useDisclosure()
    if (props.link !== "" ){
    return(
        <>
            <Flex fontSize="lg" pl="40px" margin="1.5">
                <Box>
                    <Tag mr="10px" colorScheme={props.peer_review==="1" ? "red" : "blue"}>{peerReview[props.peer_review]}</Tag>
                    <Tag mr="10px" colorScheme={props.international==="1" ? "green" : "yellow"}>{international[props.international]}</Tag>
                    {props.award!==null && <Tag borderRadius="full" colorScheme='teal'>{props.award}</Tag>}
                    {props.author.join(", ")}.
                    <Link href={props.link} isExternal color='blue.400'> {props.title}. </Link>
                    {props.conference}, {props.pages} pages, {props.year}.
                    {props.other}
                </Box>
            </Flex>
        </>
    )
    }else{
        return(
            <>
                <Flex fontSize="lg" pl="40px" margin="1.5">
                    <Box>
                        <Tag mr="10px" colorScheme={props.peer_review==="1" ? "red" : "blue"}>{peerReview[props.peer_review]}</Tag>
                        <Tag mr="10px" colorScheme={props.international==="1" ? "green" : "yellow"}>{international[props.international]}</Tag>
                        {props.award!==null && <Tag borderRadius="full" colorScheme='teal'>{props.award}</Tag>}
                        {props.author.join(", ")}. {props.title}. {props.conference}, {props.pages} pages, {props.year}.
                        {props.other}
                    </Box>
                </Flex>
            </>
        )
    }
}

export default PublicationsDetail;
