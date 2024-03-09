import { Box, Flex, Tag } from "@chakra-ui/react";
import { ReactElement } from "react";

interface Props {
    author: list;
    title: string;
    conference: string;
    year: int;
    award: string;
    pages: string;
    peer_review: boolean;
    international: boolean;
    other: ReactElement;
}

const peerReview = {
    true: "査読あり",
    false: "査読なし"
}

const international = {
    true: "国際会議",
    false: "国内会議"
}

function PublicationsDetail(props: Props){
    // const {isOpen, onOpen, onClose} = useDisclosure()

    return(
        <>
            <Flex fontSize="lg" pl="40px" margin="1.5">
                <Box>
                    <Tag mr="10px" colorScheme={props.peer_review ? "red" : "blue"}>{peerReview[props.peer_review]}</Tag>
                    <Tag mr="10px" colorScheme={props.international ? "green" : "yellow"}>{international[props.international]}</Tag>
                    {props.award!==null && <Tag borderRadius="full" colorScheme='teal'>{props.award}</Tag>}
                    {props.author.join(", ")}. {props.title}. {props.conference}, {props.pages} pages, {props.year}.
                    {props.other}
                </Box>
            </Flex>
        </>
    )
}

export default PublicationsDetail;
