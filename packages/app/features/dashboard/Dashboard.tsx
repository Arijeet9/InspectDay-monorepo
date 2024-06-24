


import { Text, XStack, YStack, useMedia } from 'tamagui'
import {
  doughnutInspectionStatusData,
  doughnutInspectorAvailabilityData,
  overviewConstants,
} from 'app/constants/constant'

import { OverviewHeaderCard } from 'app/components/dashboard/cards/OverviewHeaderCard'
import { DoughnutChart } from 'app/components/dashboard/charts/DoughnutChart'
import { UpcomingInspectionTable } from 'app/components/dashboard/tables/upcoming_inspection_table/UpcomingInspectionTable'
import { PerformanceTable } from 'app/components/dashboard/tables/performance_table/PerformanceTable'

export function Dashboard() {
  const media = useMedia()
  const isSmallScreen = media.sm

  const LayoutStack = isSmallScreen ? YStack : XStack
  const layoutGap = "$4"
  const cardGap = "$2"

  return (
    <YStack p="$4" gap={layoutGap} maxHeight="100vh" width="75vw" overflow="scroll" bc="#FFFFFF">
      <YStack gap={layoutGap}>
        <Text col="#1E1E1E">Overview</Text>
        <LayoutStack gap={cardGap}>
          {overviewConstants.map((item, i) => (
            <OverviewHeaderCard key={i} overviewHeaderData={item} />
          ))}
        </LayoutStack>
      </YStack>
      <LayoutStack gap={layoutGap}>
        <DoughnutChart title="Inspection Status" data={doughnutInspectionStatusData} />
        <DoughnutChart title="Inspector Availability Chart" data={doughnutInspectorAvailabilityData} />
      </LayoutStack>
      <LayoutStack gap={layoutGap}>
        <UpcomingInspectionTable />
        <PerformanceTable />
      </LayoutStack>
    </YStack>
  )
}

