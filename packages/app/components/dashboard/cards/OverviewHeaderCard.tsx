import { TrendingUp } from "@tamagui/lucide-icons";
import { OverviewHeaderTypes } from "app/types/types";
import { Card, XStack, Text,useMedia } from "tamagui";

export function OverviewHeaderCard ({
  overviewHeaderData,
}: {
  overviewHeaderData: OverviewHeaderTypes;
}) {

  const media=useMedia()
  return (
    <>
      <Card
        p="$3"
        w="100%"
        maxWidth={media.sm ? "100%" : "17vw"}
        borderWidth={1}
        borderColor="#E5E7EB"
        bc="#FFFFFF"
      >
        <Card.Header p={0}>
          <XStack ai="center" gap="$4" >
            <Text col="#343434" fontSize={media.sm?"$2":"1vw"}>{overviewHeaderData.title}</Text>
            {overviewHeaderData.rate && (
              <XStack p="$2" bc="#23C10A26" br="$12" ai="center" gap="1vw">
                <TrendingUp size="$1" col="#0B8A00" />
                <Text col="#0B8A00" fontSize={media.sm?"$2":"1vw"}>{overviewHeaderData.rate}</Text>
              </XStack>
            )}
          </XStack>
        </Card.Header>
        <Card.Footer col="#6A7ADA" fontSize="$2">{overviewHeaderData.no}</Card.Footer>
        {/* any other components */}
        <Card.Background />
      </Card>
    </>
  );
};

