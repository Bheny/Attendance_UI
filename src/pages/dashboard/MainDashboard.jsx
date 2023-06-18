import { React, useState } from "react";
import MoodTrendsGraph from "../../components/graphs/MoodTrendsGraph";
import AssessmentResultsGraph from "../../components/graphs/AssesmentResultsGraph";
import SummeryWidget from "../../components/widgets/SummeryWidget.jsx";
import OngoingClasses from "../../components/OngoingClasses";
import NotificationWidget from "../../components/widgets/NotificationWidget";
import ClassStudents from "../../components/ClassStudents";
import AttendanceStatistics from "../../components/AttendanceStatistics";

const MainDashboard = () => {
  const moodTrendData = [
    { rating: 3, date: "2023-06-01" },
    { rating: 4, date: "2023-06-02" },
    { rating: 5, date: "2023-06-03" },
    // Add more mood data objects as needed
    
  ];
    // Example data for attendance statistics
    const totalStudents = 500;
    const totalTeachers = 25;
    const attendanceRate = 85;
    const totalClasses = 100;
    const totalEvents = 10;
  
  const assessmentData = {
    labels: ["Assessment 1", "Assessment 2", "Assessment 3"],
    scores: [85, 92, 78],
  };

  const summaryItems = [
    {
      title:'Total Events',
      value:totalEvents
    },
    {
      title:'Total Students',
      value:totalStudents

    }
    ,
    {
      title:'Total Classes',
      value:totalClasses
    },
    {
      title:'Attendance Rate',
      value:attendanceRate
    }
  ]

  const students = [
    { id: 1, name: 'John Doe', index: '03210808123', programme:'Computer Science', level:'100', phone: '0555222219' },
    { id: 2, name: 'John Doe', index: '03210808123', programme:'Computer Science', level:'100', phone: '0555222219' },
    { id: 3, name: 'John Doe', index: '03210808123', programme:'Computer Science', level:'100', phone: '0555222219' },
    ]
  return (
    <>
      <div className="container mx-auto py-8 md:px-4 grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="md:col-span-2">
        <div className="bg-white p-4 w-full grid gap-3 md:grid-cols-4 my-4 rounded-lg">
          {summaryItems.map((item, index)=>(
            <SummeryWidget title={item.title} value={item.value} />
          ))}
          
        </div>
        {/* <!-- Add your dashboard content here --> */}
        <div className="grid grid-cols-1   gap-4">
          {/* <!-- Card 1: Mood Trends --> */}
          <div className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-xl text-gray-700 font-bold mb-4">Event Schedule</h2>
            <p className="text-gray-700 mb-2">
              Track and visualize your class over time.
            </p>
            {/* <!-- Add mood trend chart or visualizations here --> */}
            <div className="w-full ">
              <OngoingClasses />
            </div>
          </div>

          {/* <!-- Card 2: Assessment Results --> */}
          <div className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-xl font-bold mb-4">Students</h2>
            <p className="text-gray-700 mb-2">
              View all students of your class
            </p>
            {/* <!-- Add assessment results and progress information here --> */}
            <div className="w-full">
             <ClassStudents students={students}/>
            </div>
          </div>

         
        
        </div>
        </div>
        <div className="w-full">
                {/* <!-- Card 3: Recommendations --> */}
          <div className="bg-white w-full shadow-md rounded-md p-4">
            <h2 className="text-xl font-bold mb-4">Notifications</h2>
            <p className="text-gray-700 mb-2">
             Stay up to date with the notifications.
            </p>

            <div className="grid grid-cols-1  gap-4">
              <NotificationWidget />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
