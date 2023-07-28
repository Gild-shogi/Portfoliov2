import { Grid, GridItem } from "@chakra-ui/react";
import SkillDetail from "../parts/skill_detail";

function Skills() {
    const python:string[] = ["FastAPI", "Pytorch", "Keras", "Polars"]
    const js:string[] = ["TypeScript", "React"]
    
    return (
        <Grid templateColumns="repeat(2, 1fr)" gap={3}>
            <GridItem><SkillDetail name="Python" set={python} color="blue" /></GridItem>
            <GridItem><SkillDetail name="JavaScript" set={js} color="yellow" /></GridItem>
            <GridItem><SkillDetail name="Go" set={[]} color="" /></GridItem>
            <GridItem><SkillDetail name="Terraform" set={[]} color="" /></GridItem>
            <GridItem><SkillDetail name="Docker" set={[]} color="" /></GridItem>
        </Grid>
    )
}
export default Skills;