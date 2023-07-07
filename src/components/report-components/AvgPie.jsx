import { DoughnutChart } from "../charts";
const COLORS = ["#9588EB", "#65DDF0", "#EC86EC", "#FF8042"];

const AvgPie = ({ data }) => {
  return (
    <div className=" h-[220px] w-full flex justify-center">
      <div className="mx-auto min-w-[250px] min-h-[260px] ">
        <DoughnutChart chartData={data} />
      </div>
    </div>
  );
};

export default AvgPie;
