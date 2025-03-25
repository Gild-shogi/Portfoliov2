import { Box, Divider, Heading, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import HistoryDetail from "../parts/history_detail";
import historyData from "../../data/history.json"; // JSONをインポート

function History() {
  const [sortedData, setSortedData] = useState(historyData);

  useEffect(() => {
    // 年を新しい順にソート
    const sorted = [...historyData].sort((a, b) => b.year - a.year);
    setSortedData(sorted);
  }, []);

  return (
    <Stack>
      {sortedData.map((yearData) => (
        <Stack key={yearData.year}>
          <Year year={yearData.year} />
          {yearData.details.map((item, index) => (
            <HistoryDetail key={index} {...item} />
          ))}
        </Stack>
      ))}
    </Stack>
  );
}

export default History;

interface YearProps {
  year: number;
}

function Year({ year }: YearProps) {
  return (
    <Box>
      <Heading as="h4" size="lg" mt="5px" ml="10px" color="blackAlpha.600">
        {year}
      </Heading>
      <Divider ml="15px" />
    </Box>
  );
}
