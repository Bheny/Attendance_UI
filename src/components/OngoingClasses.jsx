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
    // Add more ongoing classes as needed
  ];

  return (
    <div>
      <h2></h2>
      {ongoingClasses.length > 0 ? (
        <table className='table w-full text-left my-6'>
          <thead>
            <tr className='text-gray-700'>
              <th>Event</th>
              <th>Host</th>
              <th>Venue</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {ongoingClasses.map((classItem) => (
              <tr key={classItem.id} >
                <td className='py-3'>{classItem.className}</td>
                <td className='py-3'>{classItem.teacher}</td>
                <td className='py-3'>{classItem.room}</td>
                <td className='py-3'>{classItem.date}</td>
                <td className='py-3'>{classItem.startTime}</td>
                <td className='py-3'>{classItem.endTime}</td>
                <td className='py-3'><span className='bg-green-300 px-4 py-1 rounded-full text-gray-900'>{classItem.status}</span></td>
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
