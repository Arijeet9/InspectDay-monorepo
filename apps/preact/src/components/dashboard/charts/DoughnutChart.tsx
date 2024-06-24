import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { DoughnutDataTypes } from "../../../types/types";
import { Text, YStack } from "tamagui";

ChartJS.register(Tooltip, Legend, ArcElement);

const DoughnutChart = ({
  title,
  data,
}: {
  title: string;
  data: DoughnutDataTypes;
}) => {

  // filtering empty string labels from legend
  const filteredLabels = data.labels.filter((label) => label !== "");
  const options = {
    plugins: {
      legend: {
        position: "right", // align legend to the right
        labels: {
          usePointStyle: true, // use point style (circle)
          // customized legend labels to filter out empty string
          filter: function (legendItem:any) {
            return filteredLabels.indexOf(legendItem.text) !== -1;
          },
        },
      },
    },
    cutout: "75%", // to adjust the size of the center hole
  };

  return (
    <>
      <YStack
        p="$4"
        w="36vw"
        maxHeight="45vh"
        borderWidth={1}
        borderColor="#DDE1E6"
        borderRadius="$4"
        gap="$1"
      >
        <Text col="#010101">{title}</Text>
        <Doughnut options={options} data={data} />
      </YStack>
    </>
  );
};

export default DoughnutChart;
