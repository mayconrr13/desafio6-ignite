import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
  AspectRatio,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent w="min-content" maxW="900px" bg="transparent">
        <ModalBody p={0}>
          <Image
            src={imgUrl}
            alt={imgUrl}
            objectFit="cover"
            maxW="900px"
            maxH="600px"
          />
        </ModalBody>

        <ModalFooter
          bg="pGray.800"
          borderBottomLeftRadius={8}
          borderBottomRightRadius={8}
          p={4}
        >
          <Link href={imgUrl} isExternal mr="auto">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
