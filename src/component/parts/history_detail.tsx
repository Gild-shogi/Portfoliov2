import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, HStack, Link, Tag } from '@chakra-ui/react';

type Props = {
    detail : string,
    award : string,
    award_color : string,
    link : string,
    link_text : string,
}

function HistoryDetail(props: Props) {
    const { detail, award, award_color, link, link_text } = props

    return (
        <HStack>
            <Box fontSize="lg" pl="40px">
            {award !== "" && <Tag mr="10px" colorScheme={award_color}>{award}</Tag>}     
                {detail}
            {link_text !== "" &&  <>: <Link color="blue.400" href={link} isExternal>{link_text}<ExternalLinkIcon /></Link></>}
            </Box>
        </HStack>
    )
}

export default HistoryDetail;