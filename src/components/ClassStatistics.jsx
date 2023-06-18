import React from 'react';
import PieChart from './graphs/Piechart';


const ClassStatistics = ({data}) => {


  return (
    <div className='rounded shadow-xl'>
       
        <div className='p-2'>
          <h2 className='text-gray-700 font-bold text-sm'>{data.classname}</h2>
          <p className='text-gray-500 text-sm'>
            <span>Total students : </span>
            <span>{data.totalStudents}</span>
          </p>
          
        </div>
        <div>

        <PieChart totalStudents={data.totalStudents} maleCount={data.maleCount} femaleCount={data.femaleCount} />
        </div>
     </div>
   
  );
};

export default ClassStatistics;
