import EnrollmentReport from "../../components/report-components/EnrollmentReport.jsx";
import GenderPerClass from "../../components/report-components/GenderPerClass";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { Radar } from "react-chartjs-2";
import AvgPie from "../../components/report-components/AvgPie";
import ExamParticipation from "../../components/report-components/ExamParticipation.jsx";
// import ExamParticipation from "../../components/report-components/ExamParticipation";
import Radarr from "../../components/report-components/Radarr.jsx";

const StudentsPage = () => {
  const chartData = {
    labels: ["Female", "Male"],
    datasets: [
      {
        data: [4500, 1500],
        backgroundColor: ["#65DFF0", "#1F48A1"],
      },
    ],
  };

  const coresubschartData = {
    labels: ["HND ICT", "HND CS"],
    datasets: [
      {
        data: [50, 70],
        backgroundColor: ["#9588EB", "#65DDF0"],
      },
    ],
  };

  const elecsubschartData = {
    labels: ["BTECH ICT", "BTECH CS"],
    datasets: [
      {
        data: [30, 40],
        backgroundColor: ["#0088FE", "#0FDD5F", "#FFBB28", "#FF8042"],
      },
    ],
  };

  const radarData = [
    {
      subject: "D.Math",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "D.S.A",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Js",
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Mobile P.",
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "Networks",
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: "Web Dev",
      A: 65,
      B: 85,
      fullMark: 150,
    },
    {
      subject: "IoT",
      A: 65,
      B: 85,
      fullMark: 150,
    },
    {
      subject: "A.I",
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];

  const labels = radarData.map((d) => d.subject);
  const data = radarData.map((d) => d.subject);

  return (
    <div className="grid grid-cols-2 gap-6 p-8 ">
      <div className="new-card pl-5 flex justify-start items-start flex-row pt-4 col-span-2 sm:col-span-1">
        <div className="flex-1">
          <EnrollmentReport chartData={chartData} />
        </div>

        <div className="flex-1 bg-gray-100 h-full rounded-3xl px-2 pt-3 flex flex-col gap-10">
          {classData.map((d, i) => (
            <GenderPerClass
              classs={d.className}
              males={d.males}
              females={d.females}
              totalStudents={d.totalStudents}
              key={i}
            />
          ))}
        </div>
      </div>
      <div className="new-card flex justify-start pt-4 items-start flex-col col-span-2 sm:col-span-1">
        <h2 className="text-2xl text-gray-800 font-bold mb-4 ml-5">
          Subject Performance
          <br />
          <small className="text-sm font-light">relation with attendance</small>
        </h2>

        <div className="w-full grid grid-cols-4 gap-10 h-full py-3 px-3 items-center justify-center">
          <div className="h-full col-span-2 addborder rounded-3xl shadow">
            <h2 className="text-xl text-gray-600 font-medium w-full pl-10 pt-6">
              HND students
            </h2>
            <AvgPie data={coresubschartData} />
          </div>

          <div className="h-full col-span-2 addborder rounded-3xl shadow">
            <h2 className="text-xl text-gray-600 font-medium w-full pl-10 pt-6">
              BTECH Students
            </h2>
            <AvgPie data={elecsubschartData} />
          </div>
        </div>
      </div>

      <div className="flex-1 h-[470px] bg-white px-5 pt-6 rounded-3xl flex justify-start items-start flex-col col-span-2 ">
        <h2 className="text-2xl text-gray-700 font-bold mb-4 ml-5">
          Examination Participation
        </h2>
        <div className="w-full grid grid-cols-3">
          <div className="col-span-2">
            <ExamParticipation />
          </div>
          <div className="h-full  px-1 py-2 w-full flex items-center">
            <ResponsiveContainer width={"100%"} height={320} className="">
              <RadarChart
                width={300}
                cx="50%"
                cy="50%"
                outerRadius="80%"
                data={radarData}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar
                  name="Mike"
                  dataKey="A"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;

const classData = [
  {
    className: "HND C.S",
    totalStudents: 1000,
    males: 400,
    females: 600,
    avgMath: Math.floor(Math.random() * 100),
  },
  {
    className: "HND ICT",
    totalStudents: 800,
    males: 350,
    females: 450,
    avgMath: Math.floor(Math.random() * 100),
  },
  {
    className: "BTECH C.S",
    totalStudents: 1200,
    males: 600,
    females: 900,
    avgMath: Math.floor(Math.random() * 100),
  },
  {
    className: "BTECH ICT",
    totalStudents: 1200,
    males: 600,
    females: 1000,
    avgMath: Math.floor(Math.random() * 100),
  },
];

// const radarData = [
//   { subject: "Math", A: 90 },
//   { subject: "Science", A: 70 },
//   { subject: "History", A: 80 },
//   { subject: "English", A: 65 },
//   { subject: "Art", A: 75 },
//   { subject: "Music", A: 95 },
// ];
