import {
  ChartData,
  ChartDataset,
  Point,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Amazon and Google Stock prices in 2023",
      font: {
        size: 20,
        weight: "bold",
      },
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const label = context.dataset?.label || "";
          const yLabel = context.parsed.y;
          const content = "";
          return `${label}: ${yLabel}${content}`;
        },
      },
    },
  },
};

const setData = (datasets: ChartDataset<"line", (number | Point | null)[]>[]) =>
  ({
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets,
  } as ChartData<"line", (number | Point | null)[], unknown>);

export type ChatProps = {
  data: ChartDataset<"line", (number | Point | null)[]>[];
};

export const Chart: React.FC<ChatProps> = ({ data }) => {
  return <Line options={options} data={setData(data)} />;
};
