import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Flex, Link, Tag } from '@chakra-ui/react';

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
        <Flex fontSize="lg" pl="40px">
            <Box>
            {award !== "" && <Tag mr="10px" colorScheme={award_color}>{award}</Tag>}     
            </Box>
            <Box>
                {detail}
            {link_text !== "" &&  <>: <Link color="blue.400" href={link} isExternal>{link_text}<ExternalLinkIcon /></Link></>}
            </Box>
        </Flex>
    )
}

export default HistoryDetail;