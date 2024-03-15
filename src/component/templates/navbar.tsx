import { Button, HStack, Image, Link, Spacer } from '@chakra-ui/react';

function NavBar() {
  return (
      <>
        <HStack as="header" top={0} zIndex="10" overflow="unset" position="sticky" bg="white">
        <Link href="#Skills"><Button>Skills</Button></Link>
        <Link href="#Products"><Button>Products</Button></Link>
        <Link href="#Publication"><Button>Publication</Button></Link>
        <Link href="#History"><Button>History</Button></Link>
        <Spacer />
        <Link className="microtask repeat lazyload" href="//crowd4u.org">
          <Image src="//crowd4u.org/img/crowd4u_banner182x47.png"/>
        </Link>
        </HStack>
      </>
    )
}
export default NavBar
