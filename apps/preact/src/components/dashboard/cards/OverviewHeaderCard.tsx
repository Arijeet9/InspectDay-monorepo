import { TrendingUp } from "@tamagui/lucide-icons";
import { Card, XStack, Text } from "tamagui";
import { OverviewHeaderTypes } from "../../../types/types";

const OverviewHeaderCard = ({
  overviewHeaderData,
}: {
  overviewHeaderData: OverviewHeaderTypes;
}) => {
  return (
    <>
      <Card
        p="$3"
        maxWidth="18vw"
        w="100%"
        borderWidth={1}
        borderColor="#E5E7EB"
        bc="#FFFFFF"
      >
        <Card.Header p="0">
          <XStack ai="center" gap="$4" >
            <Text col="#343434" fontSize="$2">{overviewHeaderData.title}</Text>
            {overviewHeaderData.rate && (
              <XStack p="$2" bc="#23C10A26" br="$12" ai="center" gap="$2">
                <TrendingUp size="$1" col="#0B8A00" />
                <Text col="#0B8A00" fontSize="$2">{overviewHeaderData.rate}</Text>
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

export default OverviewHeaderCard;
