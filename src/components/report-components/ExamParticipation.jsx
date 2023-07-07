import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = [
  "Discrete Math",
  "D.S.A",
  "Javascript",
  "Mobile Prog.",
  "Networks",
  "Web Dev",
  "IoT",
  "A.I",
];

const alabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Male",
      data: [80, 60, 60, 90, 55, 40, 93, 60],
      backgroundColor: "#1F48A1",
    },
    {
      label: "Female",
      data: [40, 20, 10, 14, 12, 22, 43, 10],
      backgroundColor: "#0FDD5F",
    },
  ],
};

const adata = {
  labels: alabels,
  datasets: [
    {
      label: "Males",
      data: [75, 30, 65, 90, 55, 40, 93, 78, 65, 90, 55, 40],
      backgroundColor: "#9588EB",
    },
    {
      label: "Females",
      data: [70, 66, 29, 14, 12, 22, 43, 91, 66, 29, 14, 12],
      backgroundColor: "#0FDD5F",
    },
  ],
};
const ExamParticipation = ({ isAttendance }) => {
  return (
    <div className="flex-1 h-[370px] px-10">
      <Bar
        options={options}
        data={isAttendance ? adata : data}
      />
    </div>
  );
};

export default ExamParticipation;
