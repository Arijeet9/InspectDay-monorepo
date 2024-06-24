

//constants for overview header cards
export const overviewConstants = [
  {
    title: "Total Inspections",
    rate: "10.0%",
    no: "25",
  },
  {
    title: "Active Leads",
    rate: "10.0%",
    no: "20",
  },
  {
    title: "Completed Leads",
    rate: "10.0%",
    no: "20",
  },
  {
    title: "Unavailable Inspections",
    rate: "",
    no: "10",
  },
];

//constants for inspection status doughnut chart
export const doughnutInspectionStatusData = {
  labels: ["Completed", "Scheduled", "Started"],
  datasets: [
    {
      label: "My First Dataset",
      data: [30, 10, 10],
      backgroundColor: ["#22C55E", "#3B82F6", "#E5E7EB"],
      hoverOffset: 4,
    },
  ],
};

//constants for inspector availability doughnut chart
export const doughnutInspectorAvailabilityData = {
  labels: ["", "Available", "Unavailable"],
  datasets: [
    {
      label: "My First Dataset",
      data: [30, 25, 10],
      backgroundColor: ["#E5E7EB", "#22C55E", "#FCA5A5"],
      hoverOffset: 4,
    },
  ],
};