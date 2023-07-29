import { Flex } from "@chakra-ui/react";
import SkillDetail from "../parts/skill_detail";

function Skills() {
    const python:string[] = ["FastAPI", "Pytorch", "Keras", "Polars"]
    const js:string[] = ["TypeScript", "React"]
    
    return (
        <Flex flexWrap="wrap" gap={1}>
            <SkillDetail name="Python" set={python} color="blue" />
            <SkillDetail name="JavaScript" set={js} color="yellow" />
            <SkillDetail name="Go" set={[]} color="" />
            <SkillDetail name="Terraform" set={[]} color="" />
            <SkillDetail name="Docker" set={[]} color="" />
        </Flex>
    )
}
export default Skills;