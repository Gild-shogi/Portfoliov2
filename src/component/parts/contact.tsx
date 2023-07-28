import github from "../../assets/GitHub-Mark-64px.png"
import note from "../../assets/Noteicon.png"
import twitter from "../../assets/TwitterB.png"

import { HStack, Image, Link } from "@chakra-ui/react"

function Contact(){
    return (
        <HStack spacing="0.1">
            <Link href="https://github.com/Gild-shogi" isExternal><Image m="30px" src={github} alt="github Link" boxSize="40px"/></Link>
            <Link href="https://twitter.com/Gild_prog" isExternal><Image m="30px" src={twitter} alt="twitter Link" boxSize="40px"/></Link>
            <Link href="https://note.com/gild_coffee" isExternal><Image m="30px" src={note} alt="note Link" boxSize="40px"/></Link>
        </HStack>
    )
}

export default Contact;