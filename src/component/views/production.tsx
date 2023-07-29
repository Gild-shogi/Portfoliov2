import { Flex } from "@chakra-ui/react";
import Cookri from "../templates/Production/cook_ri";
import Travel from "../templates/Production/travel";

function Production(){
    return(
        <Flex flexWrap="wrap" gap={1}>
            <Cookri />
            <Travel />
        </Flex>
    )
}
export default Production;