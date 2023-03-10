import Head from "next/head";
import NextLink from "next/link";
import { Inter } from "@next/font/google";
import {
  Box,
  Skeleton,
  Tag,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import Header from "../components/Header";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loading, setLoading] = useState(true);
  const boxBgColor = useColorModeValue("gray.100", "black");
  const tagColor = useColorModeValue("teal", "gray");
  const [myLinks, setMyLinks] = useState([]);

  useEffect(() => {
    fetch("api/links")
      .then((resp) => resp.json())
      .then(setMyLinks);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [myLinks]);

  function renderLinks() {
    if (myLinks) {
      return myLinks.map((link, index) => {
        return (
          <NextLink key={`link-${index}`} href={link.url} passHref>
            <Tag
              key={index}
              padding={25}
              width={[200, 300, 800, 900, 1700]}
              variant="subtle"
              colorScheme={tagColor}
              size={"lg"}
              justifyContent="center"
            >
              {link.text}
            </Tag>
          </NextLink>
        );
      });
    }

    return false;
  }

  return (
    <>
      <Head>
        <title>Alex Social Links</title>
        <meta name="description" content="Next app with some social links" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />

        {loading ? (
          <Box
            width={[300, 400, 900, 1000, 1800]}
            padding={10}
            ml={10}
            mr={10}
            background={boxBgColor}
          >
            <Skeleton height={20} mt={4} />
            <Skeleton height={20} mt={4} />
            <Skeleton height={20} mt={4} />
            <Skeleton height={20} mt={4} />
            <Skeleton height={20} mt={4} />
            <Skeleton height={20} mt={4} />
            <Skeleton height={20} mt={4} />
          </Box>
        ) : (
          <Box
            width={[300, 400, 900, 1000, 1800]}
            padding={10}
            ml={10}
            mr={10}
            background={boxBgColor}
          >
            <VStack spacing={10}>{renderLinks()}</VStack>
          </Box>
        )}
      </main>
    </>
  );
}
