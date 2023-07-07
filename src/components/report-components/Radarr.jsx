import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const Radarr = ({ label, dat }) => {
  const data = {
    labels: label,
    datasets: [
      {
        label: "Distribution of Attendance",
        data: dat,
        backgroundColor: "#65DFF0",
        borderColor: "#0FDD5F",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="w-[300px]">
      <Radar
        data={data}
        height={"100%"}
        width={"100%"}
      />
    </div>
  );
};

export default Radarr;
