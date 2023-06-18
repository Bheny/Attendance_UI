import React from 'react';

const OngoingClasses = () => {
  // Sample data for demonstration purposes
  const ongoingClasses = [
    {
      id: 1,
      className: 'Database 1',
      teacher: 'John Doe',
      room: 'A101',
      date:'9/1/2023',
      status:'In Session',
      startTime: '09:00 AM',
      endTime: '10:30 AM',
    },
    {
      id: 2,
      className: 'Programming',
      teacher: 'Jane Smith',
      room: 'B205',
      date:'9/1/2023',
      status:'upcomming',
      startTime: '10:45 AM',
      endTime: '12:15 PM',
    },
    {
      id: 3,
      className: 'Linux',
      teacher: 'Jane Smith',
      room: 'B205',
      date:'9/1/2023',
      status:'upcomming',
      startTime: '10:45 AM',
      endTime: '12:15 PM',
    },
    {
      id: 4,
      className: 'Departmental Meeting',
      teacher: 'Jane Smith',
      room: 'B205',
      date:'9/1/2023',
      status:'upcomming',
      startTime: '10:45 AM',
      endTime: '12:15 PM',
    },
    // Add more ongoing classes as needed
  ];

  return (
    <div className='overflow-x-scroll  w-full'>
      <h2></h2>
      {ongoingClasses.length > 0 ? (
        <table className=' w-[700px] md:w-full text-left my-6'>
          <thead>
            <tr className='text-gray-700 w-full'>
              <th className="sticky left-0 bg-white whitespace-no-wrap">Event</th>
              <th className="whitespace-no-wrap">Host</th>
              <th className="whitespace-no-wrap">Venue</th>
              <th className="whitespace-no-wrap">Date</th>
              <th className="whitespace-no-wrap">Start Time</th>
              <th className="whitespace-no-wrap">End Time</th>
              <th className="whitespace-no-wrap">Status</th>
            </tr>
          </thead>
          <tbody>
            {ongoingClasses.map((classItem) => (
              <tr key={classItem.id} >
                <td className='sticky left-0 bg-white whitespace-no-wrap py-3'>{classItem.className}</td>
                <td className='whitespace-no-wrap py-3'>{classItem.teacher}</td>
                <td className='whitespace-no-wrap py-3'>{classItem.room}</td>
                <td className='whitespace-no-wrap py-3'>{classItem.date}</td>
                <td className='whitespace-no-wrap py-3'>{classItem.startTime}</td>
                <td className='whitespace-no-wrap py-3'>{classItem.endTime}</td>
                <td className='whitespace-no-wrap py-3'><span className='bg-green-300 px-4 py-1 rounded-full text-gray-900'>{classItem.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No ongoing classes at the moment.</p>
      )}
    </div>
  );
};

export default OngoingClasses;
