import { DoughnutChart } from "../charts";

const EnrollmentReport = ({ chartData }) => {
  return (
    <div>
      <div>
        <h2 className="text-2xl text-gray-800 font-bold mb-2 ">
          Attendance Trend
        </h2>
        <span className="text-lg">attendance of students by gender</span>
      </div>
      <div>
        <div className=" h-[270px] w-full flex justify-center">
          <div className="mx-auto min-w-[200px] min-h-[270px] ">
            <DoughnutChart chartData={chartData} />
          </div>
        </div>
        <div className="flex w-full justify-between px-4">
          <div className=" female flex flex-col items-center">
            <h4 className="font-medium text-2xl  py-0 my-0">Female </h4>
            <div className="item-number">45,000</div>
          </div>
          <div className=" male flex flex-col items-center">
            <h4 className="font-medium text-2xl py-0 my-0">Male </h4>
            <div className="item-number">105,000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentReport;
