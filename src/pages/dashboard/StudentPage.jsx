import React, { useState } from 'react';
import banner from '../../assets/bg.jpg'
import ClassStudents from '../../components/ClassStudents';
import StudentForm from '../../components/forms/StudentForm';



const StudentPage = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'Event 1' },
    { id: 2, name: 'Event 2' },
    { id: 2, name: 'Event 2' },
    { id: 2, name: 'Event 2' },
    // Add more events as needed
  ]);

  const students = [
    { id: 1, name: 'John Doe', index: '03210808123', programme:'Computer Science', level:'100', phone: '0555222219' },
    { id: 2, name: 'John Doe', index: '03210808123', programme:'Computer Science', level:'100', phone: '0555222219' },
    { id: 3, name: 'John Doe', index: '03210808123', programme:'Computer Science', level:'100', phone: '0555222219' },
    { id: 1, name: 'John Doe', index: '03210808123', programme:'Computer Science', level:'100', phone: '0555222219' },
    { id: 2, name: 'John Doe', index: '03210808123', programme:'Computer Science', level:'100', phone: '0555222219' },
    { id: 3, name: 'John Doe', index: '03210808123', programme:'Computer Science', level:'100', phone: '0555222219' },
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
    <h2 className='text-3xl fot-bold text-gray-800 w-1/2 inline'>All Students</h2>
    <div className='flex gap-3'>
        <button className='border px-4 py-1 rounded'>Filter By</button>
        <button className='border px-4 py-1 rounded'>Sort By</button>
    </div>
    </div>

    <div className='mt-8'>
       <ClassStudents students={students} />
    </div>
    </div>
    
      
    </div>
    <StudentForm />
    </div>
  );
};

export default StudentPage;
