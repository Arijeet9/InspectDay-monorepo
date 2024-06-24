import { Text, XStack, YStack } from "tamagui";
import {

  overviewConstants
} from "../constants/constant";

import OverviewHeaderCard from "../components/dashboard/cards/OverviewHeaderCard";

const Dashboard = () => {
  return (
    <>
      <YStack p="$4" gap="$4" maxHeight="100vh" width="75vw" overflow="scroll" bc="#FFFFFF"  >
        <YStack gap="$4">
          <Text col="#1E1E1E">Overview</Text>
          <XStack gap="$2">
            {overviewConstants.map((item, i) => {
              return <OverviewHeaderCard key={i} overviewHeaderData={item} />;
            })}
          </XStack>
        </YStack>
      </YStack>
    </>
  );
};

export default Dashboard;
