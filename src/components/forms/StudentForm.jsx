import React, { useState } from 'react';

const StudentForm = ({ onSubmit }) => {
    const [studentImage, setStudentImage] = useState('');
  const [studentName, setStudentTitle] = useState('');
  const [studentIndex, setStudentIndex] = useState('');
  const [programme, setProgramme] = useState('');
  const [level, setLevel] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an Student object with form data
    const Student = {
        studentImage,
      studentName,
      studentIndex,
      programme,
      level,
      phone,
    };

    // Pass the Student object to the onSubmit callback
    onSubmit(Student);

    // Reset form fields
    setStudentImage('')
    setStudentTitle('');
    setStudentIndex('');
    setProgramme('');
    setLevel('');
    setphone('');
  };

  return (
    <div className="w-full lg:max-w-md mx-auto p-4 rounded-lg bg-white">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Add New Student</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          <label htmlFor="StudentTitle" className="block mb-1">
            Student Image
          </label>
          <input
            type="file"
            id="StudentTitle"
            className="w-full border border-gray-300 rounded p-2"
            value={studentImage}
            onChange={(e) => setStudentImage(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="StudentTitle" className="block mb-1">
            Student Title:
          </label>
          <input
            type="text"
            id="StudentTitle"
            className="w-full border border-gray-300 rounded p-2"
            value={studentName}
            onChange={(e) => setStudentTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="studentIndex" className="block mb-1">
            StudentIndex:
          </label>
          <input
            type='text'
            id="studentIndex"
            className="w-full border border-gray-300 rounded p-2"
            value={studentIndex}
            onChange={(e) => setStudentIndex(e.target.value)}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="programme" className="block mb-1">
              Programme
            </label>
            <select className="w-full border border-gray-300 rounded p-2">
                <option>Computer Science</option>
                <option>IT</option>
            </select>
          </div>
          <div>
            <label htmlFor="level" className="block mb-1">
             Level
            </label>
            <select className="w-full border border-gray-300 rounded p-2">
                <option>100</option>
                <option>200</option>
                <option>300</option>
                <option>400</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="venue" className="block mb-1">
            Phone
          </label>
          <input
            type="text"
            id="venue"
            className="w-full border border-gray-300 rounded p-2"
            value={phone}
            onChange={(e) => setVenue(e.target.value)}
            required
          />
        </div>
       
        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-4"
          >
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
