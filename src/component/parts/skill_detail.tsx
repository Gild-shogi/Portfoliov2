import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, Collapse, Tag, useDisclosure, WrapItem } from '@chakra-ui/react';

interface Props {
    name : string,
    set: Array<string>,
    color: string,
}

function SkillDetail(props: Props) {
    const { name, set, color } = props
    const {isOpen, onToggle} = useDisclosure()
    const sets:string[] = []
    for (let i = 0; i < set.length; i++) {
        sets.push(<Tag ml="10px" colorScheme={color}>{set[i]}</Tag>)
    }
    if (sets.length!==0) {
    return (
        <Box>
            <Button w="100%" justifyContent="left" onClick={onToggle} colorScheme='gray' variant="outline" rightIcon={<ChevronDownIcon />}>{name}</Button>
            <Collapse in={isOpen} animateOpacity>
            <Box
                as="span"
                p="100%"
                
                w="100%"
                bg="blackAlpha.100"
                mt="20px"
                rounded="md"
                shadow="md"
            >
            
            <WrapItem>
                {sets.length!==0 && isOpen && sets}
            </WrapItem>
            </Box>
            </Collapse>
        </Box>
    )}else{
        return (
            <Box>
                <Button w="100%" justifyContent="left" colorScheme='gray' variant="outline">{name}</Button>
            </Box>
        )
    }
}
export default SkillDetail;