import React, { useState } from 'react';

const EventForm = ({ onSubmit }) => {
    const [eventImage, setEventImage] = useState('');
  const [eventTitle, setEventTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [venue, setVenue] = useState('');
  const [assignedClass, setAssignedClass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an event object with form data
    const event = {
        eventImage,
      eventTitle,
      description,
      startTime,
      endTime,
      venue,
      assignedClass,
    };

    // Pass the event object to the onSubmit callback
    onSubmit(event);

    // Reset form fields
    setEventTitle('');
    setDescription('');
    setStartTime('');
    setEndTime('');
    setVenue('');
    setAssignedClass('');
  };

  return (
    <div className="w-full lg:max-w-md mx-auto p-4 rounded-lg bg-white">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Create New Event</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          <label htmlFor="eventTitle" className="block mb-1">
            Event Image
          </label>
          <input
            type="file"
            id="eventTitle"
            className="w-full border border-gray-300 rounded p-2"
            value={eventImage}
            onChange={(e) => setEventTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="eventTitle" className="block mb-1">
            Event Title:
          </label>
          <input
            type="text"
            id="eventTitle"
            className="w-full border border-gray-300 rounded p-2"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">
            Description:
          </label>
          <textarea
            id="description"
            className="w-full border border-gray-300 rounded p-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="startTime" className="block mb-1">
              Start Time:
            </label>
            <input
              type="datetime-local"
              id="startTime"
              className="w-full border border-gray-300 rounded p-2"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="endTime" className="block mb-1">
              End Time:
            </label>
            <input
              type="datetime-local"
              id="endTime"
              className="w-full border border-gray-300 rounded p-2"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="venue" className="block mb-1">
            Venue:
          </label>
          <input
            type="text"
            id="venue"
            className="w-full border border-gray-300 rounded p-2"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="assignedClass" className="block mb-1">
            Assigned Class:
          </label>
          <input
            type="text"
            id="assignedClass"
            className="w-full border border-gray-300 rounded p-2"
            value={assignedClass}
            onChange={(e) => setAssignedClass(e.target.value)}
            required
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-4"
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
