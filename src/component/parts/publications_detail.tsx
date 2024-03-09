import { Box, Flex, Tag } from "@chakra-ui/react";
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
    other: ReactElement;
}

const peerReview: {[name:string]: string} = {
    "0": "査読あり",
    "1": "査読なし"
}

const international: {[name:string]: string} = {
    "0": "国際会議",
    "1": "国内会議"
}

function PublicationsDetail(props: Props){
    // const {isOpen, onOpen, onClose} = useDisclosure()

    return(
        <>
            <Flex fontSize="lg" pl="40px" margin="1.5">
                <Box>
                    <Tag mr="10px" colorScheme={props.peer_review===1 ? "red" : "blue"}>{peerReview[props.peer_review]}</Tag>
                    <Tag mr="10px" colorScheme={props.international===1 ? "green" : "yellow"}>{international[props.international]}</Tag>
                    {props.award!==null && <Tag borderRadius="full" colorScheme='teal'>{props.award}</Tag>}
                    {props.author.join(", ")}. {props.title}. {props.conference}, {props.pages} pages, {props.year}.
                    {props.other}
                </Box>
            </Flex>
        </>
    )
}

export default PublicationsDetail;
