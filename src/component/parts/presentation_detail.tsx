import { Box, Flex, Link, Tag } from "@chakra-ui/react";
import { ReactElement } from "react";

interface Props {
  event: string;
  year: number;
  award: string;
  link: string;
  link_text: string;
  other: ReactElement | null;
}

function PresentationDetail(props: Props) {
  const { event, year, award, link, link_text, other } = props;

  return (
    <Flex fontSize="lg" pl="40px">
      <Box>
        {award !== "" && (
          <Tag mr="10px" colorScheme="teal">
            {award}
          </Tag>
        )}
      </Box>
      <Box>
        {event}, {year}
        {link_text !== "" && (
          <>
            :{" "}
            <Link color="blue.400" href={link} isExternal>
              {link_text}
            </Link>
          </>
        )}
        {other}
      </Box>
    </Flex>
  );
}

export default PresentationDetail;
