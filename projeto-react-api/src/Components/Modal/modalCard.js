import {
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

function ModalCard() {
  const context = useContext(GlobalContext);

  const { isOpen, setIsOpen, flow, setFlow } = context;

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            h={"220px"}
            w={"460px"}
          >
            {flow === 1 ? (
              <>
                <Heading>Gotcha!</Heading>
                <Text>Your Pokemon has already been added to Pokedex.</Text>
              </>
            ) : (
              <>
                <Heading>Oh, no!</Heading>
                <Text>Your Pokemon has been removed from the Pokedex.</Text>
              </>
            )}
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalCard;
