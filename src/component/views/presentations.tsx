import PresentationDetail from "../parts/presentation_detail";
import { Stack } from "@chakra-ui/react";

function Presentations() {
  return (
    <Stack mt={2} mb={2}>
      <PresentationDetail
        event="AgilePBL祭り2025"
        year={2025}
        award=""
        link="https://www.docswell.com/s/gild/KJ41VM-2025-03-23-082933/"
        link_text="スライド"
        other={null}
      />
    </Stack>
  );
}

export default Presentations;
