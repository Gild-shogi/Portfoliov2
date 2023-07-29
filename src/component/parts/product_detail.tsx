import { Button, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { ReactElement } from "react";
interface Props {
    title: string;
    description: ReactElement;
    url: string;
}

function  ProductionDetail(props: Props){
    const {isOpen, onOpen, onClose} = useDisclosure()
    // const finalRef = React.useRef(null)

    if (props.url != "") {
    return(
        <>
      <Button mt={4} onClick={onOpen}>
        詳細
      </Button>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size="6xl">
            <ModalOverlay />
            <ModalContent>
            <ModalHeader fontFamily="heading">{props.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                {props.description}
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
                </Button>
                <Link href={props.url} isExternal><Button variant='ghost'>Go to Site</Button></Link>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
    } else {
        return (
            <>
            <Button mt={4} onClick={onOpen}>
              詳細
            </Button>
              <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size="6xl">
                  <ModalOverlay />
                  <ModalContent>
                  <ModalHeader>{props.title}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                      {props.description}
                  </ModalBody>
      
                  <ModalFooter>
                      <Button colorScheme='blue' mr={3} onClick={onClose}>
                      Close
                      </Button>
                  </ModalFooter>
                  </ModalContent>
              </Modal>
              </>
        )
    }
}
export default ProductionDetail;