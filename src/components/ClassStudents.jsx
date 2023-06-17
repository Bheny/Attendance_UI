import React from 'react';
import img from "../assets/pic.jpeg";
const ClassStudents = ({ students }) => {
  return (
    <div className='w-full'>
      
      {students.length > 0 ? (
        <table  className='w-full text-left my-6'>
          <thead>
            <tr>
            
              <th> Student Name</th>
              <th>Index Number</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className='py-3 flex gap-3'><img
              src={img}
              className="w-8 h-8  object-center object-cover rounded-full"
              alt="profile_picture"
            />{student.name}</td>
                <td className='py-3'>{student.index}</td>
                <td className='py-3'>{student.email}</td>
                <td className='py-3'>{student.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No students in the class.</p>
      )}
    </div>
  );
};

export default ClassStudents;
