import React, { useState } from 'react';
import banner from '../../assets/bg.jpg'
import ClassStudents from '../../components/ClassStudents';
import ClassStatistics from '../../components/ClassStatistics';



const ClassPage = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'Event 1' },
    { id: 2, name: 'Event 2' },
    { id: 2, name: 'Event 2' },
    { id: 2, name: 'Event 2' },
    // Add more events as needed
  ]);

  const classes = [
    { id: 1, classname: 'HND COMPUTER SCIENCE', totalStudents: '70', maleCount:'30', femaleCount: '40' },
    { id: 2, classname: 'BTECH COMPUTER SCIENCE', totalStudents: '40', maleCount:'30', femaleCount: '10' },
    { id: 3, classname: 'HND ICT', totalStudents: '150', maleCount:'140', femaleCount: '40' },
    { id: 1, classname: 'BTECH ICT', totalStudents: '135', maleCount:'98', femaleCount: '37' },
    
]
  const handleCreateEvent = () => {
    // Logic to create a new event
    // Update the 'events' state with the new event
  };

  return (
    <div className="container py-8 md:px-4 grid grid-cols-1 gap-3 lg:grid-cols-3">
    <div className="md:col-span-2">
    <div className="bg-white p-4 w-full my-4 rounded-lg">
    <div className='w-full flex'>
    <h2 className='text-3xl fot-bold text-gray-800 w-1/2 inline'>All Classes</h2>
    <div className='flex gap-3'>
        <button className='border px-4 py-1 rounded'>Filter By</button>
        <button className='border px-4 py-1 rounded'>Sort By</button>
    </div>
    </div>

    <div className='mt-8'>
    <div className='mt-8 grid gap-3 md:grid-cols-4'>
       {classes.map((data, index)=>(
        <ClassStatistics data={data} />
       ))}
    </div>
    </div>
    </div>
    
      
    </div>
  
    </div>
  );
};

export default ClassPage;
