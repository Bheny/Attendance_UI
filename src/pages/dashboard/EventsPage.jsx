import React, { useState } from 'react';
import banner from '../../assets/bg.jpg'
import EventForm from '../../components/forms/EventForm';


const EventsPage = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'Event 1' },
    { id: 2, name: 'Event 2' },
    { id: 2, name: 'Event 2' },
    { id: 2, name: 'Event 2' },
    // Add more events as needed
  ]);


  const handleCreateEvent = () => {
    // Logic to create a new event
    // Update the 'events' state with the new event
  };

  return (
    <div className="container py-8 md:px-4 grid grid-cols-1 gap-3 lg:grid-cols-3">
    <div className="md:col-span-2">
    <div className="bg-white p-4 w-full my-4 rounded-lg">
    <div className='w-full flex'>
    <h2 className='text-3xl fot-bold text-gray-800 w-1/2 inline'>Your Events</h2>
    <div className='flex gap-3'>
        <button className='border px-4 py-1 rounded'>Filter By</button>
        <button className='border px-4 py-1 rounded'>Sort By</button>
    </div>
    </div>

    <div className='mt-8 grid gap-3 md:grid-cols-4'>
       {events.map((event, index)=>(
        <div className='rounded shadow-xl'>
        <img src={banner} className='h-32 object-center object-cover w-full rounded' />
        <div className='p-2'>
          <h2 className='text-gray-700 font-bold text-lg'>Departmental Durbar</h2>
          <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          
        </div>
        <div className='w-full p-4 '>
            <button className='bg-blue-600 text-white px-4 py-1 float-right '>View More</button>
            
          </div>
     </div>
       ))}
    </div>
    </div>
    
      
    </div>
    <EventForm />
    </div>
  );
};

export default EventsPage;
