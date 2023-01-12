import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  HStack,
  Heading,
  Box,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Header() {
  const { toggleColorMode } = useColorMode();
  const currentIcon = useColorModeValue(<MoonIcon />, <SunIcon />);
  const title = "Alex's Social Links";
  const stackBgColor = useColorModeValue("white", "teal.500");
  const titleColor = useColorModeValue("teal.500", "white");

  return (
    <HStack
      width="100%"
      height="75px"
      backgroundColor={stackBgColor}
      justify="end"
      paddingEnd={50}
      spacing={50}
    >
      <Heading color={titleColor} size="md" noOfLines={1}>
        {title}
      </Heading>
      <Box />
      <Button rightIcon={currentIcon} onClick={toggleColorMode}>
        Light/Dark
      </Button>
    </HStack>
  );
}
